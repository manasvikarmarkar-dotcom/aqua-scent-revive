import { createFileRoute, Link } from "@tanstack/react-router";
import { fragrances } from "@/data/fragrances";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SARKAR — Extrait de Parfum for the Unforgettable" },
      {
        name: "description",
        content:
          "Four SARKAR parfums: Noble aquatic, Throne leather, Orion citrus, Regal oud. 50ml extrait, two 7ml freebies with every order.",
      },
      { property: "og:title", content: "SARKAR — Extrait de Parfum" },
      {
        property: "og:description",
        content: "Noble reborn as a marine-fresh parfum, alongside Throne, Orion and Regal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const hero = fragrances[1]!;

  return (
    <main>
      {/* Cinematic hero */}
      <section className="relative h-[86vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={hero.scene}
          alt="SARKAR cinematic campaign still"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
        <div className="absolute inset-x-0 bottom-16 flex flex-col items-center gap-6 px-6 text-center">
          <p className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase">
            Extrait de Parfum · 50ml
          </p>
          <a
            href="#collection"
            className="border border-foreground px-10 py-3 text-xs tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
          >
            Discover
          </a>
        </div>
      </section>

      {/* Full-bleed fragrance chapters */}
      {fragrances.map((f) => (
        <section key={f.slug} className="relative h-[78vh] min-h-[460px] w-full overflow-hidden">
          <img
            src={f.scene}
            alt={`${f.name} campaign visual`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 px-6 pb-14 text-center">
            <img
              src={f.bottle}
              alt={`${f.name} parfum bottle`}
              loading="lazy"
              className="h-40 w-auto object-contain md:h-52"
            />
            <h2 className="text-3xl tracking-[0.3em] md:text-5xl">{f.name}</h2>
            <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              {f.tagline}
            </p>
            <Link
              to="/parfum/$slug"
              params={{ slug: f.slug }}
              className="mt-2 border border-foreground/80 px-8 py-2.5 text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background"
            >
              Explore Parfum
            </Link>
          </div>
        </section>
      ))}

      {/* Shop grid */}
      <section id="collection" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-xs tracking-[0.35em] text-muted-foreground uppercase">
          Shop All
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {fragrances.map((f) => (
            <Link key={f.slug} to="/parfum/$slug" params={{ slug: f.slug }} className="group">
              <div className="relative overflow-hidden bg-secondary/40">
                <img
                  src={f.packaging}
                  alt={`${f.name} packaging`}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={f.bottle}
                  alt={`${f.name} parfum bottle`}
                  loading="lazy"
                  className="absolute inset-0 h-72 w-full object-contain p-8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <h3 className="mt-5 text-center text-sm tracking-[0.3em]">{f.name}</h3>
              <p className="mt-2 text-center text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                {f.accord}
              </p>
              <p className="mt-3 text-center text-xs">{f.price}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
