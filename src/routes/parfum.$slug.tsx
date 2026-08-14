import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getFragrance, fragrances } from "@/data/fragrances";

export const Route = createFileRoute("/parfum/$slug")({
  loader: ({ params }) => {
    const fragrance = getFragrance(params.slug);
    if (!fragrance) throw notFound();
    return { fragrance };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Parfum unavailable — SARKAR" }, { name: "robots", content: "noindex" }],
      };
    }
    const { fragrance } = loaderData;
    const title = `${fragrance.name} — ${fragrance.family} Parfum | SARKAR`;
    return {
      meta: [
        { title },
        { name: "description", content: fragrance.description.slice(0, 155) },
        { property: "og:title", content: title },
        { property: "og:description", content: fragrance.description.slice(0, 155) },
        { property: "og:type", content: "product" },
        { property: "og:image", content: fragrance.bottle },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: fragrance.bottle },
      ],
    };
  },
  component: ParfumPage,
});

function ParfumPage() {
  const { fragrance } = Route.useLoaderData();
  const others = fragrances.filter((f) => f.slug !== fragrance.slug);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link
        to="/"
        className="tracking-brand text-[10px] text-muted-foreground uppercase hover:text-primary"
      >
        ← All Parfums
      </Link>

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        <div className="surface-panel relative flex items-center justify-center p-10">
          <div className="absolute inset-0 -z-10 bg-primary/10 blur-3xl" />
          <img
            src={fragrance.bottle}
            alt={`${fragrance.name} parfum bottle`}
            className="max-h-[460px] w-auto object-contain"
          />
        </div>

        <div>
          <h1 className="text-5xl md:text-6xl">{fragrance.name}</h1>
          <p className="tracking-brand mt-4 text-[11px] text-gold uppercase">
            {fragrance.tagline}
          </p>
          <p className="mt-2 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            {fragrance.accord}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {fragrance.description}
          </p>

          <dl className="mt-10 space-y-5">
            {(
              [
                ["Top", fragrance.notes.top],
                ["Heart", fragrance.notes.heart],
                ["Base", fragrance.notes.base],
              ] as const
            ).map(([label, notes]) => (
              <div key={label} className="border-t border-border pt-4">
                <dt className="tracking-brand text-[10px] text-muted-foreground uppercase">
                  {label}
                </dt>
                <dd className="mt-2 text-sm">{notes.join(" · ")}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex items-center gap-6">
            <span className="text-lg text-gold">{fragrance.price}</span>
            <button className="tracking-brand border border-primary px-8 py-3 text-[11px] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground">
              Add to Bag
            </button>
          </div>

          <div className="mt-12">
            <p className="tracking-brand text-[10px] text-muted-foreground uppercase">
              Packaging
            </p>
            <img
              src={fragrance.packaging}
              alt={`${fragrance.name} outer carton packaging`}
              loading="lazy"
              className="mt-4 h-48 w-auto object-contain"
            />
          </div>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="tracking-brand text-center text-xs text-muted-foreground uppercase">
          Also from the House
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {others.map((f) => (
            <Link
              key={f.slug}
              to="/parfum/$slug"
              params={{ slug: f.slug }}
              className="surface-panel flex flex-col items-center p-6 transition-colors hover:border-primary/60"
            >
              <img
                src={f.bottle}
                alt={`${f.name} parfum bottle`}
                loading="lazy"
                className="h-40 w-auto object-contain"
              />
              <h3 className="tracking-brand mt-5 text-base">{f.name}</h3>
              <p className="mt-2 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                {f.accord}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
