import { useEffect, useRef, useState, type ReactNode } from "react";

const WA_BASE = "https://wa.me/5492645720932";
const IG_HANDLE = "ornecerderaa.digital";
const IG_URL = `https://www.instagram.com/${IG_HANDLE}/`;

function waLink(message: string): string {
  return `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

type Service = {
  id: string;
  title: string;
  blurb: string;
  includes: string[];
  note?: string;
};

const SERVICES: Service[] = [
  {
    id: "cm",
    title: "Community Manager (mensual)",
    blurb:
      "Gestión estratégica, constante y profesional de la presencia digital de la marca.",
    includes: [
      "Estrategia de marketing inicial",
      "Optimización estética del feed",
      "Ideas de contenido alineadas a la marca",
      "Planificación IG / TikTok",
      "Jornadas de contenido",
      "Historias destacadas",
      "Posteos, reels y edición",
    ],
  },
  {
    id: "estrategia",
    title: "Estrategia Marketing inicial",
    blurb:
      "Análisis para definir el rumbo del contenido y las acciones digitales.",
    includes: [
      "Definición de públicos",
      "Buyer persona",
      "Análisis de la competencia",
      "Análisis FODA",
      "Ideas de contenido estratégicas",
    ],
  },
  {
    id: "ads",
    title: "Meta Ads",
    blurb:
      "Configuración y gestión de campañas. Encargada: Denise Yafar.",
    includes: [
      "Configuración de campañas",
      "Segmentación de públicos",
      "Optimización de anuncios",
      "Análisis de resultados",
    ],
  },
  {
    id: "contenido",
    title: "Creación de contenido (presencial)",
    blurb:
      "Producción audiovisual para alimentar las redes durante el mes.",
    includes: [
      "Valor por hora de creación de contenido",
      "Se realiza de forma presencial",
      "De 1 hora de grabación: aprox. 4 videos",
    ],
  },
  {
    id: "ugc",
    title: "Contenido UGC",
    blurb:
      "El UGC (User Generated Content) es contenido creado con un estilo natural y cercano, pensado para que tu marca se comunique con su audiencia de una forma más auténtica.",
    includes: [
      "Videos y piezas de contenido para mostrar tu producto o servicio",
      "Contenido real, espontáneo y atractivo",
      "Una recomendación cercana, como la de alguien a quien le gusta tu marca",
    ],
    note: "Encargada: Celeste Achem.",
  },
  {
    id: "diseno",
    title: "Diseño gráfico",
    blurb: "Piezas para redes e impresión.",
    includes: [
      "Flyers",
      "Tarjetas",
      "Catálogos",
      "Piezas para feed, stories y más",
    ],
  },
  {
    id: "web",
    title: "Página web prediseñada",
    blurb: "Armado en Empretienda / Tienda Nube.",
    includes: [
      "Carga de productos",
      "Dominio propio incluido",
    ],
  },
];

type PdfProduct = {
  id: string;
  title: string;
  blurb: string;
  category: string;
  priceLabel: string;
  coverSrc: string;
};

const PDF_PRODUCTS: PdfProduct[] = [
  {
    id: "hooks",
    title: "Pack de 120 hooks para reel",
    blurb: "Aperturas listas para frenar el scroll y empezar fuerte.",
    category: "Recursos PDF",
    priceLabel: "$21.999",
    coverSrc: "/pdf/hooks-cover.jpg",
  },
  {
    id: "stories",
    title: "5 estrategias para vender por historias",
    blurb: "Ideas prácticas para convertir tus historias en una herramienta de venta.",
    category: "Recursos PDF",
    priceLabel: "$24.999",
    coverSrc: "/pdf/stories-cover.PNG",
  },
  {
    id: "ideas",
    title: "100 ideas de contenido para tu negocio",
    blurb: "Ideas accionables para no quedarte sin qué publicar.",
    category: "Recursos PDF",
    priceLabel: "$34.999",
    coverSrc: "/pdf/ideas-cover.jpg",
  },
];

type Testimonial = {
  id: string;
  src: string;
  alt: string;
};

type WorkVideo = {
  id: string;
  title: string;
  driveId: string;
  href: string;
};

const WORK_VIDEOS: WorkVideo[] = [
  {
    id: "w1",
    title: "Trabajo 1",
    driveId: "1qBHqQ-_oQ60ixKJg1IOBY8rXRNqAWAvL",
    href: "https://drive.google.com/file/d/1qBHqQ-_oQ60ixKJg1IOBY8rXRNqAWAvL/view?usp=share_link",
  },
  {
    id: "w2",
    title: "Trabajo 2",
    driveId: "1MBVGkVLf9ExBvSGZynBk7V1FA3uP8wM8",
    href: "https://drive.google.com/file/d/1MBVGkVLf9ExBvSGZynBk7V1FA3uP8wM8/view?usp=sharing",
  },
  {
    id: "w3",
    title: "Trabajo 3",
    driveId: "1KkO7lah_XhaDOl0VycTZ496qw7wJahmq",
    href: "https://drive.google.com/file/d/1KkO7lah_XhaDOl0VycTZ496qw7wJahmq/view?usp=sharing",
  },
  {
    id: "w4",
    title: "Trabajo 4",
    driveId: "1tTl2MDr64LyivMJcnkvddAYUDD8CWpKN",
    href: "https://drive.google.com/file/d/1tTl2MDr64LyivMJcnkvddAYUDD8CWpKN/view?usp=sharing",
  },
  {
    id: "w5",
    title: "Trabajo 5",
    driveId: "14D2BlvcFBwfbr6WhYn4yKeARP9Fl_l0x",
    href: "https://drive.google.com/file/d/14D2BlvcFBwfbr6WhYn4yKeARP9Fl_l0x/view?usp=sharing",
  },
];

const MORE_WORKS_FOLDER =
  "https://drive.google.com/drive/folders/11io68EWYu3qWRU2PVD6whdFT6b7dVr8T?usp=sharing";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    src: "/testimonios/wa-1.png",
    alt: "Captura de WhatsApp — testimonio 1",
  },
  {
    id: "t2",
    src: "/testimonios/wa-2.png",
    alt: "Captura de WhatsApp — testimonio 2",
  },
  {
    id: "t3",
    src: "/testimonios/wa-3.png",
    alt: "Captura de WhatsApp — testimonio 3",
  },
  {
    id: "t4",
    src: "/testimonios/wa-4.png",
    alt: "Captura de WhatsApp — testimonio 4",
  },
  {
    id: "t5",
    src: "/testimonios/wa-5.png",
    alt: "Captura de WhatsApp — testimonio 5",
  },
];

function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`.trim()}>{children}</div>;
}

function AssetSlot({
  src,
  alt,
  fallback,
  className = "",
}: {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`asset-fallback ${className}`.trim()} role="img" aria-label={alt}>
        <span>{fallback}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
    />
  );
}

function VideoCard({
  video,
  onPlay,
}: {
  video: WorkVideo;
  onPlay: () => void;
}) {
  const [thumbFailed, setThumbFailed] = useState(false);

  return (
    <figure className="work-card reveal">
      <button
        type="button"
        className="work-play"
        onClick={onPlay}
        aria-label={`Reproducir ${video.title}`}
      >
        {thumbFailed ? null : (
          <img
            className="work-thumb"
            src={`https://drive.google.com/thumbnail?id=${video.driveId}&sz=w1000`}
            alt=""
            onError={() => setThumbFailed(true)}
          />
        )}
        <span className="work-play-icon" aria-hidden="true" />
        <span className="work-play-label">Reproducir</span>
      </button>
    </figure>
  );
}

function WorkLightbox({
  video,
  onClose,
  onPrev,
  onNext,
}: {
  video: WorkVideo;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        onPrev();
      }
      if (event.key === "ArrowRight") {
        onNext();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="work-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      onClick={onClose}
    >
      <button
        type="button"
        className="work-lightbox-nav work-lightbox-prev"
        aria-label="Video anterior"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
      />
      <div
        className="work-lightbox-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <iframe
          key={video.id}
          src={`https://drive.google.com/file/d/${video.driveId}/preview`}
          title={video.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
        <a
          className="work-lightbox-open"
          href={video.href}
          target="_blank"
          rel="noreferrer"
        >
          Abrir en Drive
        </a>
        <button type="button" className="work-lightbox-close" onClick={onClose}>
          Cerrar
        </button>
      </div>
      <button
        type="button"
        className="work-lightbox-nav work-lightbox-next"
        aria-label="Video siguiente"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
      />
    </div>
  );
}

function WorksRail() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    pausedRef.current = openIndex !== null;
  }, [openIndex]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = window.setInterval(() => {
      if (pausedRef.current) {
        return;
      }
      const card = scroller.querySelector<HTMLElement>(".work-card, .work-more");
      const step = (card?.getBoundingClientRect().width ?? 260) + 16;
      const maxScroll = scroller.scrollWidth - scroller.clientWidth;
      if (maxScroll <= 4) {
        return;
      }
      if (scroller.scrollLeft >= maxScroll - 12) {
        scroller.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }
      scroller.scrollBy({ left: step, behavior: "smooth" });
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  function scrollByCard(direction: -1 | 1) {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }
    const card = scroller.querySelector<HTMLElement>(".work-card");
    const step = (card?.getBoundingClientRect().width ?? 260) + 16;
    scroller.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  function goOpen(delta: number) {
    setOpenIndex((current) => {
      if (current === null) {
        return current;
      }
      return (current + delta + WORK_VIDEOS.length) % WORK_VIDEOS.length;
    });
  }

  const openVideo = openIndex === null ? null : WORK_VIDEOS[openIndex];

  return (
    <>
      <div
        className="works-rail"
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          if (openIndex === null) {
            pausedRef.current = false;
          }
        }}
        onTouchStart={() => {
          pausedRef.current = true;
        }}
        onTouchEnd={() => {
          window.setTimeout(() => {
            if (!document.querySelector(".work-lightbox")) {
              pausedRef.current = false;
            }
          }, 4500);
        }}
      >
        <button
          type="button"
          className="works-nav works-nav-prev"
          aria-label="Video anterior"
          onClick={() => scrollByCard(-1)}
        />
        <div
          className="works-grid"
          ref={scrollerRef}
          aria-label="Carrusel de trabajos"
        >
          {WORK_VIDEOS.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={() => setOpenIndex(index)}
            />
          ))}
          <a
            className="work-more reveal"
            href={MORE_WORKS_FOLDER}
            target="_blank"
            rel="noreferrer"
          >
            Ver más trabajos en Drive
          </a>
        </div>
        <button
          type="button"
          className="works-nav works-nav-next"
          aria-label="Video siguiente"
          onClick={() => scrollByCard(1)}
        />
      </div>
      {openVideo ? (
        <WorkLightbox
          video={openVideo}
          onClose={() => setOpenIndex(null)}
          onPrev={() => goOpen(-1)}
          onNext={() => goOpen(1)}
        />
      ) : null}
    </>
  );
}

export default function App() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  function pdfPurchaseHref(product: PdfProduct): string {
    return waLink(
      `Hola Orne! Quiero comprar el PDF “${product.title}”. ¿Me pasás los medios de pago y cómo lo recibo?`,
    );
  }

  function toggleService(id: string) {
    setOpenServiceId((current) => (current === id ? null : id));
  }

  const contactHref = waLink(
    "Hola Orne! Quiero contactarte desde la web de Orne Digital.",
  );
  const hireHref = waLink(
    "Hola Orne! Quiero contratar servicios de Orne Digital.",
  );
  const meetingHref = waLink(
    "Hola Orne! Quiero agendar una reunión para hablar de mi marca / servicio.",
  );
  const bannerItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="page">
      <header className="topbar">
        <a className="brand" href="#top">
          <img src="/logo-oc.png" alt="" />
          <span>Orne Digital</span>
        </a>
        <nav className="nav" aria-label="Secciones">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#servicios">Servicios</a>
          <a href="#trabajos">Trabajos</a>
          <a href="#tienda">Recursos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="cta-top" href={contactHref} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </header>

      <section className="hero" id="top" aria-label="Inicio">
        <div className="hero-copy">
          <img className="hero-mark" src="/logo-oc.png" alt="" />
          <h1 className="brand-hero">Hola, soy Orne</h1>
          <p className="lede">
            Impulso marcas y acompaño Community Managers con estrategia,
            claridad y visión profesional.
          </p>
          <p className="hero-intro">
            Estos son mis servicios y recursos para marcas y Community Managers
            que quieren crecer de verdad.
          </p>
          <div className="cta-row">
            <a className="cta-primary" href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="sobre-mi">
        <div className="about-split">
          <div className="about-media">
            <img src="/orne-lifestyle.png" alt="Orne trabajando con su notebook" />
          </div>
          <Reveal className="about-copy">
            <h2>Sobre mí</h2>
            <p>
              Hace más de 4 años trabajo como Community Manager,
              especializándome en redes y crecimiento de marcas.
            </p>
            <p>
              Aunque el trabajo se ve en el feed, mi enfoque va más allá de
              publicar: construyo confianza, comunidad y una estrategia clara
              para que la marca se vea y se sienta profesional.
            </p>
            <p>
              Armé este espacio para que puedas acceder a mis servicios y
              recursos, ya sea que tengas un negocio o estés empezando tu
              camino como Community Manager.
            </p>
            <a className="cta-primary" href="#contacto">
              Contacto
            </a>
          </Reveal>
        </div>
      </section>

      <section className="services" id="servicios">
        <Reveal className="section-head">
          <h2>Servicios</h2>
          <p className="section-lede">
            Tocá cada caja para ver qué incluye. “Contratar servicio” abre
            WhatsApp.
          </p>
        </Reveal>
        <ul className="service-list">
          {SERVICES.map((service, index) => {
            const isOpen = openServiceId === service.id;
            const panelId = `service-panel-${service.id}`;

            return (
              <li
                key={service.id}
                className={`service-item reveal${isOpen ? " is-open" : ""}`}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                <button
                  type="button"
                  className="service-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleService(service.id)}
                >
                  <h3>{service.title}</h3>
                  <span className="service-chevron" aria-hidden="true" />
                </button>
                <div className="service-panel" id={panelId} hidden={!isOpen}>
                  <div className="service-panel-inner">
                    <p>{service.blurb}</p>
                    <ul className="service-includes">
                      {service.includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    {service.note ? (
                      <p className="service-note">{service.note}</p>
                    ) : null}
                    <p className="service-price">Consultar por WhatsApp</p>
                    <a
                      className="cta-service"
                      href={waLink(
                        `Hola Orne! Quiero contratar: ${service.title}`,
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Contratar servicio
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <Reveal className="mid-cta">
          <a className="cta-primary" href={meetingHref} target="_blank" rel="noreferrer">
            Agendar una reunión
          </a>
        </Reveal>
      </section>

      <section className="works" id="trabajos">
        <Reveal className="section-head">
          <h2>Trabajos que hice</h2>
          <p className="section-lede">
            Algunos videos de proyectos que realicé. El carrusel avanza solo;
            usá las flechas o deslizá para verlos todos.
          </p>
        </Reveal>
        <WorksRail />
      </section>

      <section className="testimonials" id="testimonios">
        <Reveal className="section-head">
          <h2>Testimonios</h2>
          <p className="section-lede">
            Capturas reales de chats de WhatsApp.
          </p>
        </Reveal>
        <div className="chat-banner" aria-label="Carrusel de testimonios">
          <div className="chat-track">
            {bannerItems.map((item, index) => (
              <figure key={`${item.id}-${index}`} className="testimonial-slide">
                <AssetSlot
                  src={item.src}
                  alt={item.alt}
                  fallback="Captura WhatsApp"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="shop" id="tienda">
        <Reveal className="section-head">
          <h2>Guías prácticas</h2>
          <p className="section-lede">
            Recursos para avanzar más rápido, con claridad y estructura. Elegí
            un PDF y escribime por WhatsApp para coordinar la compra.
          </p>
        </Reveal>
        <ul className="product-grid">
          {PDF_PRODUCTS.map((product, index) => (
            <li
              key={product.id}
              className="product reveal"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="product-cover" data-pdf-cover={product.id}>
                <AssetSlot
                  src={product.coverSrc}
                  alt={`Portada PDF — ${product.title}`}
                  fallback="Portada PDF"
                  className="product-cover-img"
                />
              </div>
              <p className="product-kicker">{product.category}</p>
              <h3>{product.title}</h3>
              <p>{product.blurb}</p>
              <p className="product-price">{product.priceLabel}</p>
              <a
                className="cta-buy"
                href={pdfPurchaseHref(product)}
                target="_blank"
                rel="noreferrer"
              >
                Comprar por WhatsApp
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="cta-final" id="contacto">
        <Reveal className="cta-final-inner">
          <p className="socials-kicker">Siguiente paso</p>
          <h2>¿Lista para dar el siguiente paso?</h2>
          <p className="section-lede">
            Ya sea que tengas una marca o quieras crecer como Community Manager,
            tengo una propuesta para vos.
          </p>
          <a className="cta-primary" href={hireHref} target="_blank" rel="noreferrer">
            Hablemos
          </a>
        </Reveal>
      </section>

      <footer className="footer">
        <p className="footer-brand">
          <img src="/logo-oc.png" alt="" />
          <span>Orne Digital</span>
        </p>
        <p>Community · estrategia · recursos para CM</p>
        <a href={IG_URL} target="_blank" rel="noreferrer">
          @{IG_HANDLE}
        </a>
      </footer>

    </div>
  );
}
