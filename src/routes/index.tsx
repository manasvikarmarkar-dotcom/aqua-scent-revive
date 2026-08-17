import { createFileRoute, Link } from "@tanstack/react-router";
import { fragrances } from "@/data/fragrances";

/** Build a Shopify CDN srcset for responsive delivery. Local assets pass through. */
function cdnSrcSet(url: string, widths: number[]) {
  if (!url.includes("cdn/shop")) return undefined;
  return widths.map((w) => `${url.replace(/([?&])width=\d+/, `$1width=${w}`)} ${w}w`).join(", ");
}

const heroScene = fragrances[1]!.scene;

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
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroScene,
        imageSrcSet: cdnSrcSet(heroScene, [640, 960, 1200]),
        imageSizes: "100vw",
        fetchPriority: "high",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      {/* Cinematic hero */}
      <section className="relative h-[72svh] min-h-[420px] w-full overflow-hidden md:h-[86vh] md:min-h-[520px]">
        <img
          src={heroScene}
          srcSet={cdnSrcSet(heroScene, [640, 960, 1200])}
          sizes="100vw"
          width={1200}
          height={1500}
          alt="SARKAR cinematic campaign still"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background" />
        <div className="absolute inset-x-0 bottom-12 flex flex-col items-center gap-5 px-6 text-center md:bottom-16 md:gap-6">
          <p className="text-[10px] tracking-[0.35em] text-muted-foreground uppercase">
            Extrait de Parfum · 50ml
          </p>
          <a
            href="#collection"
            className="border border-foreground px-8 py-3 text-xs tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background md:px-10"
          >
            Discover
          </a>
        </div>
      </section>

      {/* Full-bleed fragrance chapters */}
      {fragrances.map((f) => (
        <section
          key={f.slug}
          className="relative h-[68svh] min-h-[420px] w-full overflow-hidden md:h-[78vh] md:min-h-[460px]"
        >
          <img
            src={f.scene}
            srcSet={cdnSrcSet(f.scene, [640, 960, 1200])}
            sizes="100vw"
            alt={`${f.name} campaign visual`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-4 px-6 pb-12 text-center md:pb-14">
            <img
              src={f.bottle}
              srcSet={cdnSrcSet(f.bottle, [300, 450, 600])}
              sizes="(max-width: 768px) 160px, 210px"
              alt={`${f.name} parfum bottle`}
              loading="lazy"
              decoding="async"
              className="h-32 w-auto object-contain sm:h-40 md:h-52"
            />
            <h2 className="text-2xl tracking-[0.3em] sm:text-3xl md:text-5xl">{f.name}</h2>
            <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
              {f.tagline}
            </p>
            <Link
              to="/parfum/$slug"
              params={{ slug: f.slug }}
              className="mt-2 border border-foreground/80 px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase transition-colors hover:bg-foreground hover:text-background sm:px-8"
            >
              Explore Parfum
            </Link>
          </div>
        </section>
      ))}

      {/* Shop grid */}
      <section id="collection" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="text-center text-xs tracking-[0.35em] text-muted-foreground uppercase">
          Shop All
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-10 md:mt-14 lg:grid-cols-4">
          {fragrances.map((f) => (
            <Link key={f.slug} to="/parfum/$slug" params={{ slug: f.slug }} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary/40">
                <img
                  src={f.packaging}
                  sizes="(max-width: 640px) 45vw, 280px"
                  alt={`${f.name} packaging`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={f.bottle}
                  srcSet={cdnSrcSet(f.bottle, [300, 450])}
                  sizes="(max-width: 640px) 45vw, 280px"
                  alt={`${f.name} parfum bottle`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-contain p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-8"
                />
              </div>
              <h3 className="mt-4 text-center text-xs tracking-[0.3em] sm:text-sm">{f.name}</h3>
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
