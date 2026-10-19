
import "./App.css";

const services = [
  {
    number: "01",
    icon: "✳",
    title: "Business Websites",
    description:
      "Professional, responsive websites that build trust and help your business grow online.",
    tags: ["Responsive Design", "SEO Friendly"],
  },
  {
    number: "02",
    icon: "↗",
    title: "E-commerce Websites",
    description:
      "Beautiful online stores that make it easier for your customers to discover and buy your products.",
    tags: ["Online Stores", "Product Catalogues"],
  },
  {
    number: "03",
    icon: "</>",
    title: "Web Applications",
    description:
      "Custom web applications designed around your business processes and everyday needs.",
    tags: ["Custom Features", "Business Tools"],
  },
];

function App() {
  return (
    <div className="website">
      <header className="site-header">
        <div className="container nav-wrapper">
          <a className="brand" href="#home" aria-label="Cloudora home">
            <img
              src="/images/cloudora-logo.png"
              alt="Cloudora"
              className="brand-logo"
            />
          </a>

          <nav className="navigation" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#about">About</a>
          </nav>

          <a className="button button-small" href="#contact">
            Let's Talk <span>↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-glow" aria-hidden="true" />

          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="status-dot" />
                WEB DEVELOPMENT &amp; DIGITAL SOLUTIONS
              </div>

              <h1>
                Your vision.
                <br />
                Our <span className="gradient-text">technology.</span>
              </h1>

              <p className="hero-description">
                We build modern websites and digital solutions that help
                businesses stand out, connect with customers, and grow with
                confidence.
              </p>

              <div className="hero-actions">
                <a className="button" href="#contact">
                  Start a Project <span>↗</span>
                </a>
                <a className="button button-outline" href="#work">
                  Explore Our Work <span>→</span>
                </a>
              </div>

              <div className="hero-note">
                <span className="note-line" />
                Thoughtful design. Reliable technology. Real solutions.
              </div>
            </div>

            <div className="hero-visual" aria-label="Illustration of a website being developed">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="floating-chip chip-top">
                <span className="chip-dot" /> Modern Design
              </div>

              <div className="browser-card">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="browser-address">yourbusiness.com</div>
                </div>

                <div className="browser-content">
                  <div className="mock-nav">
                    <span className="mock-logo" />
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="mock-hero">
                    <div className="mock-label">YOUR NEXT CHAPTER</div>
                    <div className="mock-heading">
                      Built for
                      <br />
                      what comes next.
                    </div>
                    <div className="mock-description" />
                    <div className="mock-description short" />
                    <div className="mock-button" />
                  </div>

                  <div className="mock-bottom">
                    <div>
                      <span className="mock-icon">✳</span>
                      <span className="mock-line" />
                    </div>
                    <div>
                      <span className="mock-icon">↗</span>
                      <span className="mock-line" />
                    </div>
                    <div>
                      <span className="mock-icon">&lt;/&gt;</span>
                      <span className="mock-line" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-chip chip-bottom">
                <span className="code-mark">&lt;/&gt;</span>
                Built with purpose
              </div>
            </div>
          </div>

          <div className="container hero-bottom">
            <span>DESIGNED AROUND YOUR BUSINESS</span>
            <span className="hero-bottom-line" />
            <span>MADE FOR THE DIGITAL WORLD</span>
          </div>
        </section>

        <section className="services-section section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">WHAT WE DO</span>
                <h2>
                  Digital solutions,
                  <br />
                  <span className="muted-heading">built around you.</span>
                </h2>
              </div>
              <p>
                The right technology can make a real difference. We focus on
                creating useful, attractive, and dependable digital experiences.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <span className="service-number">{service.number}</span>
                    <span className="service-icon">{service.icon}</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="service-tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a className="service-link" href="#contact">
                    Discuss your project <span>↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="portfolio-section section" id="work">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-label">SELECTED CONCEPTS</span>
                <h2>
                  Ideas brought
                  <br />
                  <span className="muted-heading">to the digital world.</span>
                </h2>
              </div>

              <p>
                Explore a few website concepts that demonstrate the types of
                digital experiences Cloudora can create.
              </p>
            </div>

            <div className="portfolio-grid">
              <article className="portfolio-card">
                <div className="portfolio-preview preview-business">
                  <div className="preview-browser">
                    <div className="preview-topbar">
                      <span>YOUR BRAND</span>
                      <span>HOME&nbsp; ABOUT&nbsp; CONTACT</span>
                    </div>
                    <div className="preview-business-content">
                      <span>YOUR BUSINESS, ONLINE</span>
                      <strong>Make a great first impression.</strong>
                      <div className="preview-line" />
                      <div className="preview-cta" />
                    </div>
                  </div>
                </div>

                <div className="portfolio-info">
                  <span className="project-type">CONCEPT PROJECT</span>
                  <h3>Small Business Website</h3>
                  <p>
                    A professional online presence for a local service business.
                  </p>
                </div>
              </article>

              <article className="portfolio-card">
                <div className="portfolio-preview preview-store">
                  <div className="preview-browser">
                    <div className="preview-topbar">
                      <span>YOUR STORE</span>
                      <span>SHOP&nbsp; COLLECTIONS&nbsp; CART</span>
                    </div>
                    <div className="preview-store-content">
                      <span>THE NEW COLLECTION</span>
                      <strong>Find your next favourite.</strong>
                      <div className="product-shapes">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portfolio-info">
                  <span className="project-type">CONCEPT PROJECT</span>
                  <h3>E-commerce Store</h3>
                  <p>
                    A sample online shop with product-focused layouts.
                  </p>
                </div>
              </article>

              <article className="portfolio-card">
                <div className="portfolio-preview preview-dashboard">
                  <div className="preview-browser dashboard-browser">
                    <div className="dashboard-sidebar">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="dashboard-content">
                      <span>OVERVIEW</span>
                      <strong>Business Dashboard</strong>
                      <div className="dashboard-stats">
                        <span />
                        <span />
                      </div>
                      <div className="dashboard-chart">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="portfolio-info">
                  <span className="project-type">CONCEPT PROJECT</span>
                  <h3>Business Web Application</h3>
                  <p>
                    An example dashboard for managing business information.
                  </p>
                </div>
              </article>
            </div>

            <p className="portfolio-disclaimer">
              These are illustrative concepts, not completed client projects.
            </p>
          </div>
        </section>


        <section className="work-section section" id="approach">
          <div className="container work-panel">
            <div className="work-content">
              <span className="section-label">OUR APPROACH</span>
              <h2>
                Good technology
                <br />
                starts with <span className="gradient-text">your idea.</span>
              </h2>
              <p>
                Every project begins by understanding the problem, the people,
                and the goals behind it. Then we work towards a solution that
                fits.
              </p>
              <a className="button" href="#contact">
                Tell Us Your Idea <span>↗</span>
              </a>
            </div>

            <div className="approach-steps">
              <div className="approach-step">
                <span>01</span>
                <div>
                  <h3>Understand</h3>
                  <p>Learn about your business and your goals.</p>
                </div>
              </div>
              <div className="approach-step">
                <span>02</span>
                <div>
                  <h3>Design &amp; Build</h3>
                  <p>Create a solution with care and purpose.</p>
                </div>
              </div>
              <div className="approach-step">
                <span>03</span>
                <div>
                  <h3>Launch &amp; Improve</h3>
                  <p>Test, refine, and prepare for real users.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <div className="container about-content">
            <span className="section-label">ABOUT CLOUDORA</span>
            <h2>
              Technology should move
              <br />
              your business <span className="gradient-text">forward.</span>
            </h2>
            <p>
              Cloudora is a web development and digital solutions brand focused
              on helping businesses establish and improve their online
              presence through thoughtful design and practical technology.
            </p>
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div>
                <span className="section-label">HAVE A PROJECT IN MIND?</span>
                <h2>Let's build something meaningful.</h2>
                <p>
                  Tell us about your idea, and let's explore how we can bring it
                  to life.
                </p>
                <p>
                  Prefer to write directly? Email{" "}
                  <a href="mailto:gavinduhasa@gmail.com">
                    gavinduhasa@gmail.com
                  </a>
                </p>
              </div>
              <a
                className="button"
                href="mailto:gavinduhasa@gmail.com?subject=Cloudora%20Project%20Enquiry"
              >
                Get in Touch <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
        
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home">
            <img
              src="/images/cloudora-logo.png"
              alt="Cloudora"
              className="brand-logo"
            />
          </a>
          <p>Your Vision. Our Technology.</p>
          <span>© {new Date().getFullYear()} Cloudora.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
