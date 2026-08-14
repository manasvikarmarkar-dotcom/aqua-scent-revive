import { createFileRoute, Link } from "@tanstack/react-router";
import { fragrances } from "@/data/fragrances";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SARKAR — Four Parfums, One Signature" },
      {
        name: "description",
        content:
          "Explore the SARKAR parfum house: Noble aquatic, Throne leather, Orion citrus and Regal oud. 50ml extrait de parfum.",
      },
      { property: "og:title", content: "SARKAR — Four Parfums, One Signature" },
      {
        property: "og:description",
        content:
          "Noble reborn as a marine-fresh parfum, alongside Throne, Orion and Regal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const noble = fragrances[0]!;

  return (
    <main>
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="tracking-brand text-xs text-gold uppercase">New Composition</p>
            <h1 className="mt-6 text-6xl leading-[0.95] md:text-8xl">
              <span className="text-aqua-gradient">Noble</span>
            </h1>
            <p className="tracking-brand mt-5 text-xs text-muted-foreground uppercase">
              {noble.tagline}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {noble.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/parfum/$slug"
                params={{ slug: noble.slug }}
                className="tracking-brand border border-primary px-7 py-3 text-[11px] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Explore Parfum
              </Link>
              <a
                href="#collection"
                className="tracking-brand border border-border px-7 py-3 text-[11px] uppercase transition-colors hover:border-primary"
              >
                The Collection
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 rounded-full bg-primary/15 blur-3xl" />
            <img
              src={noble.bottle}
              alt="Noble parfum bottle by SARKAR"
              className="max-h-[520px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section id="collection" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="tracking-brand text-center text-xs text-muted-foreground uppercase">
          The Four Parfums
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {fragrances.map((f) => (
            <Link
              key={f.slug}
              to="/parfum/$slug"
              params={{ slug: f.slug }}
              className="surface-panel group flex flex-col items-center p-6 transition-colors hover:border-primary/60"
            >
              <img
                src={f.bottle}
                alt={`${f.name} parfum bottle`}
                loading="lazy"
                className="h-52 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <h3 className="tracking-brand mt-6 text-lg">{f.name}</h3>
              <p className="mt-2 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                {f.accord}
              </p>
              <p className="mt-4 text-sm text-gold">{f.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
