import { useEffect, useMemo, useState } from "react";
import "./App.css";

const WHATSAPP_NUMBER = "919894349627";
const INSTAGRAM_URL =
  "https://www.instagram.com/shri_inbaas_bakery?stkn=bHNpYnhnYjd0Z3dr";
const EMAIL = "Shriinbaas@gmail.com";

const products = [
  { name: "Black Forest", price: 700, category: "Chocolate", image: "/images/Blackforest.jpg" },
  { name: "White Forest", price: 700, category: "Classic", image: "/images/Whiteforest.jpg" },
  { name: "Red Velvet", price: 1000, category: "Special", image: "/images/RedVelvet.jpg" },
  { name: "Butterscotch", price: 850, category: "Classic", image: "/images/ButterScotch.jpg" },
  { name: "Strawberry", price: 800, category: "Fruit", image: "/images/Strawberry.jpg" },
  { name: "Mango", price: 800, category: "Fruit", image: "/images/Mango.jpg" },
  { name: "Blueberry", price: 750, category: "Fruit", image: "/images/Blueberry.jpg" },
  { name: "Pineapple", price: 750, category: "Fruit", image: "/images/Pineapple.jpg" },
  { name: "Choco Truffle", price: 900, category: "Chocolate", image: "/images/Chacotruffel.jpg" },
  { name: "Chocolate Ice Cake", price: 750, category: "Chocolate", image: "/images/Chocolateicecake.jpg" },
  { name: "Choco Scotch", price: 800, category: "Chocolate", image: "/images/ChacoScotch.jpg" },
  { name: "Vanilla", price: 600, category: "Classic", image: "/images/Venila.jpg" },
  { name: "2-in-1", price: 850, category: "Special", image: "/images/2 in one.jpg" },
  { name: "Rasmalai", price: 950, category: "Special", image: "/images/Rasamalai.jpg" },
  { name: "3-in-1", price: 900, category: "Special", image: "/images/3 in one.jpg" },
  { name: "Rasmalai Scotch", price: 1000, category: "Special", image: "/images/Rasamalaiscotch.jpg" },
  { name: "Choco Oreo", price: 950, category: "Chocolate", image: "/images/Chocooreo.jpg" },
];

const categories = ["All", "Chocolate", "Classic", "Fruit", "Special"];

function InstagramIcon({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.4" cy="6.7" r="1.15" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#25D366" />

      <path
        d="M16 6.2C10.59 6.2 6.2 10.59 6.2 16c0 1.73.45 3.35 1.24 4.76L6.2 25.8l5.18-1.22A9.75 9.75 0 0 0 16 25.8c5.41 0 9.8-4.39 9.8-9.8S21.41 6.2 16 6.2Z"
        fill="white"
      />

      <path
        d="M12.15 10.75c-.28 0-.58.03-.84.31-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.3 3.26c.16.21 2.2 3.52 5.38 4.8 2.66 1.07 3.2.85 3.77.8.58-.05 1.87-.76 2.13-1.5.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37-.31-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.31-.81 1.03-.99 1.24-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.51-1.56-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.68-1.69-.93-2.31-.25-.6-.5-.52-.68-.53h-.58Z"
        fill="#25D366"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.8 3.8l2.3-.7c.7-.2 1.4.2 1.7.9l1 2.5c.2.5.1 1-.3 1.4L10 9.5c1 2.1 2.4 3.6 4.5 4.5l1.6-1.5c.4-.4 1-.5 1.4-.3l2.5 1c.7.3 1.1 1 .9 1.7l-.7 2.3c-.2.7-.8 1.1-1.5 1.1C10.5 18.3 5.7 13.5 5.7 7.3c0-.7.4-1.3 1.1-1.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * CertificateIcon
 * ----------------
 * Renders the REAL FSSAI / FOSCOS logo image from /public/images/.
 * Drop your actual logo files in as:
 *   public/images/fssai-logo.png
 *   public/images/foscos-logo.png
 * (crop them from your certificate PDFs, or use the official files
 * FSSAI/FOSCOS gave you — trademarked government marks shouldn't be
 * recreated from scratch, so use the real ones you already have).
 *
 * If an image is missing or fails to load, it falls back to the
 * original ✓ / ▣ badge so the card never looks broken.
 */
function CertificateIcon({ type }) {
  const [imgFailed, setImgFailed] = useState(false);

  const src =
    type === "fssai" ? "/images/fssai-logo.jpg" : "/images/foscos-logo.jpg";
  const alt = type === "fssai" ? "FSSAI logo" : "FOSCOS logo";

  if (imgFailed) {
    return (
      <div className={`certificate-icon ${type} icon-fallback`}>
        {type === "fssai" ? "✓" : "▣"}
      </div>
    );
  }

  return (
    <div className={`certificate-icon ${type}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setImgFailed(true)}
      />
    </div>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openWhatsApp = (message) => {
    const text =
      message ||
      "Hello SHRI INBAAS SWEETS AND BAKERY, I would like to make an enquiry.";

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(text);

    window.open(url, "_blank");
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" || product.category === activeCategory;

      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);


// Add to cart  code


  // const addToCart = (product) => {
  //   setCart((current) => {
  //     const existing = current.find((item) => item.name === product.name);

  //     if (existing) {
  //       return current.map((item) =>
  //         item.name === product.name
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       );
  //     }

  //     return [...current, { ...product, quantity: 1 }];
  //   });

  //   setCartOpen(true);
  // };

  const updateQuantity = (name, change) => {
    setCart((current) =>
      current
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (name) => {
    setCart((current) => current.filter((item) => item.name !== name));
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const orderCart = () => {
    if (!cart.length) return;

    const items = cart
      .map(
        (item) =>
          `${item.name} x ${item.quantity} - ₹${
            item.price * item.quantity
          }`
      )
      .join("\n");

    openWhatsApp(
      `Hello SHRI INBAAS SWEETS AND BAKERY,\n\nI would like to order:\n\n${items}\n\nTotal: ₹${cartTotal}\n\nPlease confirm availability.`
    );
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = cartOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen]);

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <button
            className="brand"
            onClick={() => scrollTo("home")}
          >
            <span className="brand-small">EST. 2025</span>
            <span className="brand-name">
              SHRI INBAAS
            </span>
            <span className="brand-sub">
              SWEETS & BAKERY
            </span>
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => scrollTo("home")}>Home</button>
            <button onClick={() => scrollTo("cakes")}>Cakes</button>
            <button onClick={() => scrollTo("story")}>Our Story</button>
            <button onClick={() => scrollTo("certifications")}>
              Certifications
            </button>
            <button onClick={() => scrollTo("contact")}>Contact</button>

            <a
              className="nav-instagram mobile-instagram"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram"
            >
              <InstagramIcon size={20} />
              Instagram
            </a>
          </nav>

          <div className="nav-actions">
            {/* INSTAGRAM */}
            <a
              className="instagram-button"
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit SHRI INBAAS Bakery Instagram"
              title="Follow us on Instagram"
            >
              <InstagramIcon size={23} />
            </a>

        {/* nabebar bag code  */}


            {/* CART */}
            {/* <button
              className="cart-button"
              onClick={() => setCartOpen(true)}
              aria-label="Open cart"
            >
              {/* <span>Bag</span> */}
              {/* {cartCount > 0 && (
                <b>{cartCount}</b>
              )} */}
            {/* </button> */} 


            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
      
  <section className="hero" id="home">
  <div className="hero-content">
    <p className="section-label">
      ARTISAN BAKERY • KAMUTHI
    </p>

    <h1>
      Baked with
      <span>heart.</span>
    </h1>

    <p className="hero-description">
      Freshly crafted cakes, sweets and celebration
      treats made with care for every special moment.
    </p>

    <div className="hero-buttons">
      <button
        className="primary-button"
        onClick={() => scrollTo("cakes")}
      >
        Explore Cakes
        <span>↗</span>
      </button>

      <button
        className="secondary-button"
        onClick={() => openWhatsApp()}
      >
        Order on WhatsApp
      </button>
    </div>

    <div className="hero-social">
      <span>Follow our bakery</span>

      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon size={18} />
        @shri_inbaas_bakery
      </a>
    </div>
  </div>

  <div className="hero-visual">
    <div className="bakery-display">

      <div className="cake-glow"></div>

      <div className="cake-animation">
        <div className="cake-top">
          <span className="cherry"></span>
          <span className="cherry"></span>
          <span className="cherry"></span>
        </div>

        <div className="cake-cream"></div>

        <div className="cake-body">
          <span className="cream-drip drip-1"></span>
          <span className="cream-drip drip-2"></span>
          <span className="cream-drip drip-3"></span>
        </div>

        <div className="cake-bottom"></div>
      </div>

      <div className="cake-plate"></div>

      <div className="floating-word word-one">
        FRESH
      </div>

      <div className="floating-word word-two">
        SWEET
      </div>

    </div>
  </div>
</section>

        {/* INTRO */}
        <section className="intro-section">
          <div className="intro-container">
            <p className="section-label">THE SHRI INBAAS WAY</p>

            <h2>
              Sweet moments,
              <br />
              <em>made memorable.</em>
            </h2>

            <p>
              From classic favourites to rich celebration cakes,
              every creation is prepared to bring something special
              to your table.
            </p>
          </div>
        </section>

        {/* CAKES */}
        <section className="menu-section" id="cakes">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <p className="section-label">OUR COLLECTION</p>
                <h2>
                  Cakes for
                  <br />
                  <em>every occasion.</em>
                </h2>
              </div>

              <div className="menu-search">
                <input
                  type="text"
                  placeholder="Search cakes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="category-tabs">
              {categories.map((category) => (
                <button
                  key={category}
                  className={
                    activeCategory === category
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveCategory(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article
                  className="product-card"
                  key={product.name}
                >
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <span className="product-category">
                      {product.category}
                    </span>
                  </div>

                  <div className="product-info">
                    <div>
                      <h3>{product.name}</h3>
                      <p>1 KG</p>
                    </div>

                    <strong>₹{product.price}</strong>
                  </div>

                  {/* <button
                    className="add-button"
                    onClick={() => addToCart(product)}
                  >
                    Add to Order
                    <span>+</span>
                  </button> */}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALITY */}
        <section className="signature-section">
          <div className="signature-copy">
            <p className="section-label">
              OUR SPECIALITY
            </p>

            <h2>
              Crafted for
              <br />
              <em>your celebrations.</em>
            </h2>

            <p>
              Whether it is a birthday, wedding, anniversary,
              family gathering or simply a sweet craving,
              we create cakes that make the moment feel special.
            </p>

            <button
              className="gold-button"
              onClick={() => scrollTo("contact")}
            >
              Talk to us
              <span>→</span>
            </button>
          </div>

          <div className="signature-art">
            <div className="gold-ring"></div>
            <div className="art-cake">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="story-section" id="story">
          <div className="story-container">
            <div className="story-image">
              <video
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                  src="/videos/cakemaking.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="story-image-overlay">
                SHRI INBAAS
              </div>
            </div>

            <div className="story-copy">
              <p className="section-label">
                OUR STORY
              </p>

              <h2>
                A local bakery
                <br />
                <em>with a big heart.</em>
              </h2>

              <p>
                At SHRI INBAAS SWEETS & BAKERY, we believe
                great food brings people together.
              </p>

              <p>
                Our focus is simple — fresh products,
                beautiful presentation and a warm experience
                for every customer.
              </p>

              <button
                className="text-button"
                onClick={() => scrollTo("contact")}
              >
                Visit us
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS - SMALL MOVABLE MARQUEE */}
        <section
          className="certifications-section"
          id="certifications"
        >
          <div className="section-container">
            <div className="certificate-heading">
              <div>
                <p className="section-label">
                  TRUST & QUALITY
                </p>

                <h2>
                  Certified for
                  <br />
                  <em>your confidence.</em>
                </h2>
              </div>

              <p className="certificate-intro">
                Our licensing information is displayed
                transparently for our customers.
              </p>
            </div>

            {/* MOVING CERTIFICATE MARQUEE */}
            <div className="certificate-marquee">
              <div className="certificate-track">

                {/* CARD 1 */}
                <div className="certificate-card compact-card">
                  <CertificateIcon type="fssai" />

                  <div className="certificate-content">
                    <span className="certificate-label">
                      FSSAI STATE LICENSE
                    </span>

                    <h3>
                      SHRI INBAAS SWEETS AND BAKERY
                    </h3>

                    <p>
                      FSSAI License No:
                      <strong> 12425017000216</strong>
                    </p>

                    <div className="certificate-details">
                      <div>
                        <span>Issued</span>
                        <strong>27 Nov 2025</strong>
                      </div>

                      <div>
                        <span>Valid Until</span>
                        <strong>26 Nov 2026</strong>
                      </div>

                      <div>
                        <span>Type</span>
                        <strong>State License</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 2 */}
                <div className="certificate-card compact-card">
                  <CertificateIcon type="foscos" />

                  <div className="certificate-content">
                    <span className="certificate-label">
                      FOSCOS LICENSE RECEIPT
                    </span>

                    <h3>
                      Official Registration Record
                    </h3>

                    <p>
                      Reference No:
                      <strong> 20251127107994117</strong>
                    </p>

                    <div className="certificate-details">
                      <div>
                        <span>License Type</span>
                        <strong>State License</strong>
                      </div>

                      <div>
                        <span>Fee Paid</span>
                        <strong>₹2,000</strong>
                      </div>

                      <div>
                        <span>Status</span>
                        <strong>Registered</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DUPLICATES FOR CONTINUOUS MARQUEE */}
                <div className="certificate-card compact-card">
                  <CertificateIcon type="fssai" />

                  <div className="certificate-content">
                    <span className="certificate-label">
                      FSSAI STATE LICENSE
                    </span>

                    <h3>
                      SHRI INBAAS SWEETS AND BAKERY
                    </h3>

                    <p>
                      FSSAI License No:
                      <strong> 12425017000216</strong>
                    </p>

                    <div className="certificate-details">
                      <div>
                        <span>Issued</span>
                        <strong>27 Nov 2025</strong>
                      </div>

                      <div>
                        <span>Valid Until</span>
                        <strong>26 Nov 2026</strong>
                      </div>

                      <div>
                        <span>Type</span>
                        <strong>State License</strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="certificate-card compact-card">
                  <CertificateIcon type="foscos" />

                  <div className="certificate-content">
                    <span className="certificate-label">
                      FOSCOS LICENSE RECEIPT
                    </span>

                    <h3>
                      Official Registration Record
                    </h3>

                    <p>
                      Reference No:
                      <strong> 20251127107994117</strong>
                    </p>

                    <div className="certificate-details">
                      <div>
                        <span>License Type</span>
                        <strong>State License</strong>
                      </div>

                      <div>
                        <span>Fee Paid</span>
                        <strong>₹2,000</strong>
                      </div>

                      <div>
                        <span>Status</span>
                        <strong>Registered</strong>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ORDER CTA */}
        <section className="order-section">
          <div>
            <p className="section-label">
              READY TO ORDER?
            </p>

            <h2>
              Let's make
              <br />
              <em>something sweet.</em>
            </h2>

            <p>
              Tell us what you are looking for and we
              will help you with your order.
            </p>
          </div>

          <button
            className="order-whatsapp-button"
            onClick={() => openWhatsApp()}
          >
            <WhatsAppIcon size={28} />
            <span>
              <small>QUICK ORDER</small>
              WhatsApp Us
            </span>
          </button>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div className="contact-container">

            <div className="contact-intro">
              <p className="section-label">
                COME SAY HELLO
              </p>

              <h2>
                We'd love
                <span>to hear from you.</span>
              </h2>

              <p>
                Visit our bakery or contact us directly
                for orders, enquiries and celebrations.
              </p>

              <button
                className="contact-whatsapp-btn"
                onClick={() => openWhatsApp()}
              >
                <WhatsAppIcon size={24} />
                Chat on WhatsApp
              </button>
            </div>

            <div className="contact-card">

              <div className="contact-item">
                <div className="contact-item-icon">
                  <LocationIcon />
                </div>

                <div>
                  <span>VISIT US</span>

                  <h3>Our Bakery</h3>

                  <p>
                    No.264/40B1, Soodiyoor Road,
                    <br />
                    Abiramam Bus Stand,
                    <br />
                    Kamuthi, Ramanathapuram,
                    <br />
                    Tamil Nadu – 623601
                  </p>
                </div>
              </div>

              <div className="contact-divider"></div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <PhoneIcon />
                </div>

                <div>
                  <span>CALL / WHATSAPP</span>

                  <h3>+91 98943 49627</h3>

                  <button
                    className="contact-link-button"
                    onClick={() => openWhatsApp()}
                  >
                    Start a conversation →
                  </button>
                </div>
              </div>

              <div className="contact-divider"></div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MailIcon />
                </div>

                <div>
                  <span>EMAIL</span>

                  <h3>{EMAIL}</h3>

                  <a
                    className="contact-link-button"
                    href={`mailto:${EMAIL}`}
                  >
                    Send us an email →
                  </a>
                </div>
              </div>

              <div className="contact-divider"></div>

              {/* INSTAGRAM CONTACT */}
              <div className="contact-item">
                <div className="contact-item-icon instagram-contact-icon">
                  <InstagramIcon size={23} />
                </div>

                <div>
                  <span>FOLLOW US</span>

                  <h3>@shri_inbaas_bakery</h3>

                  <a
                    className="contact-link-button"
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit our Instagram →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <strong>SHRI INBAAS</strong>
          <span>SWEETS & BAKERY</span>
        </div>

        <div className="footer-social">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon size={22} />
          </a>

          <button
            onClick={() => openWhatsApp()}
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={25} />
          </button>
        </div>

        <p>
          © {new Date().getFullYear()} SHRI INBAAS
          SWEETS & BAKERY. All rights reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      {/* <button
        className="whatsapp-float"
        onClick={() => openWhatsApp()}
        aria-label="Chat with SHRI INBAAS SWEETS AND BAKERY on WhatsApp"
      >
        <WhatsAppIcon size={34} />

        <span className="whatsapp-tooltip">
          Chat with us on WhatsApp
        </span>
      </button> */}

      {/* FLOATING SOCIAL BUTTONS */}
<div className="floating-socials">

  {/* INSTAGRAM */}
  <a
    className="instagram-float"
    href={INSTAGRAM_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit SHRI INBAAS Bakery Instagram"
    title="Follow us on Instagram"
  >
    <InstagramIcon size={27} />

    <span className="social-tooltip">
      Follow us on Instagram
    </span>
  </a>

  {/* WHATSAPP */}
  <button
    className="whatsapp-float"
    onClick={() => openWhatsApp()}
    aria-label="Chat with SHRI INBAAS SWEETS AND BAKERY on WhatsApp"
    title="Chat with us on WhatsApp"
  >
    <WhatsAppIcon size={32} />

    <span className="social-tooltip">
      Chat with us on WhatsApp
    </span>
  </button>

</div>

      {/* CART DRAWER */}
      {cartOpen && (
        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >
          <aside
            className="cart-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cart-header">
              <div>
                <span>YOUR ORDER</span>
                <h2>Your Bag</h2>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                className="close-cart"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <div>🍰</div>
                <h3>Your bag is empty</h3>
                <p>
                  Add your favourite cake to start your order.
                </p>

                <button
                  onClick={() => {
                    setCartOpen(false);
                    scrollTo("cakes");
                  }}
                >
                  Explore Cakes
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cart.map((item) => (
                    <div
                      className="cart-item"
                      key={item.name}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-content">
                        <h3>{item.name}</h3>

                        <p>
                          ₹{item.price} / KG
                        </p>

                        <div className="quantity-controls">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.name,
                                -1
                              )
                            }
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              updateQuantity(
                                item.name,
                                1
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="cart-item-right">
                        <strong>
                          ₹{item.price * item.quantity}
                        </strong>

                        <button
                          onClick={() =>
                            removeFromCart(item.name)
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total">
                    <span>Total</span>
                    <strong>₹{cartTotal}</strong>
                  </div>

                  <button
                    className="checkout-button"
                    onClick={orderCart}
                  >
                    <WhatsAppIcon size={24} />
                    Order on WhatsApp
                  </button>
                </div>
              </>
            )}
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
