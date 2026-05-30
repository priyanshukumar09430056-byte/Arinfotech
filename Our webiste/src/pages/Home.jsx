const Home = () => (
  <>
    <header className="hero">
      <div className="hero__content">
        <span className="hero__badge">Performance-Driven Digital Services</span>
        <h1 className="hero__title">
          Build Digital Systems <span className="text-purple">That Drive Real Revenue</span>
        </h1>
        <p className="hero__subtitle">
          Shopify development, SEO and performance marketing engineered for companies serious about scalable global growth.
        </p>
        <div className="hero__ctas">
          <a className="btn btn--primary" href="https://wa.me/9430056407" target="_blank" rel="noreferrer noopener">
            Start a Project
          </a>
          <a className="btn btn--outline" href="/portfolio">
            View Portfolio
          </a>
        </div>
      </div>
    </header>

    <section id="services" className="services">
      <div className="section-header">
        <p className="section-sub">Performance-Driven Digital Services</p>
        <h2 className="section-title">
          We combine development, marketing and strategy into structured growth systems.
        </h2>
      </div>
      <div className="services__grid">
        <article className="service-card">
          <span className="service-card__badge">01</span>
          <span className="service-card__icon">🛒</span>
          <h3 className="service-card__title">Shopify & E-commerce Development</h3>
          <p className="service-card__desc">
            High-converting Shopify stores built for scalability, speed, and better conversion performance.
          </p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">02</span>
          <span className="service-card__icon">💻</span>
          <h3 className="service-card__title">Custom Web Development</h3>
          <p className="service-card__desc">
            Modern websites engineered to convert visitors into qualified leads with strong brand presence.
          </p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">03</span>
          <span className="service-card__icon">🚀</span>
          <h3 className="service-card__title">SEO Optimization</h3>
          <p className="service-card__desc">
            Technical and strategic SEO frameworks structured for sustainable organic growth.
          </p>
        </article>
      </div>
    </section>

    <section id="portfolio" className="projects">
      <div className="section-header">
        <p className="section-sub">Selected Work</p>
        <h2 className="section-title">A glimpse into the brands we’ve helped build, optimize and scale.</h2>
      </div>
      <div className="projects__grid">
        <article className="project-card">
          <div className="project-card__thumbnail">
            <div className="project-card__glow"></div>
            <span className="project-card__icon">E-COMMERCE</span>
          </div>
          <p className="project-card__tag">E-COMMERCE</p>
          <h3 className="project-card__title">FreshONeedUSA</h3>
          <p className="project-card__desc">Shopify Development</p>
        </article>
        <article className="project-card">
          <div className="project-card__thumbnail">
            <div className="project-card__glow"></div>
            <span className="project-card__icon">D2C</span>
          </div>
          <p className="project-card__tag">D2C BRAND</p>
          <h3 className="project-card__title">CosmosEntials</h3>
          <p className="project-card__desc">Web Development + SEO</p>
        </article>
        <article className="project-card">
          <div className="project-card__thumbnail">
            <div className="project-card__glow"></div>
            <span className="project-card__icon">EDUCATION</span>
          </div>
          <p className="project-card__tag">EDUCATION</p>
          <h3 className="project-card__title">Sankalp Academy</h3>
          <p className="service-card__desc">Website Development</p>
        </article>
      </div>
      <div className="projects__cta">
        <a className="btn btn--outline" href="/portfolio">View Full Portfolio</a>
      </div>
    </section>

    <section className="why-us">
      <div className="why-us__inner">
        <div className="section-header">
          <h2 className="section-title">Built for Businesses That Take Growth Seriously</h2>
          <p className="section-sub">We operate with structure, clarity and measurable accountability.</p>
        </div>
        <div className="why-us__grid">
          <article className="stat-card">
            <span className="stat-card__badge">01</span>
            <h3 className="stat-card__label">Dedicated Specialists</h3>
            <p>Each service is handled by a focused expert — no generalists, no shortcuts.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">02</span>
            <h3 className="stat-card__label">Performance-First Approach</h3>
            <p>Every decision is driven by measurable outcomes and business growth.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">03</span>
            <h3 className="stat-card__label">Fast Execution Cycles</h3>
            <p>Structured workflows that reduce delays and accelerate delivery.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">04</span>
            <h3 className="stat-card__label">Long-Term Partnership Mindset</h3>
            <p>We build scalable systems designed for sustainable expansion.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="testimonials">
      <div className="section-header">
        <p className="section-sub">What Our Clients Say</p>
        <h2 className="section-title">Real feedback from businesses we’ve partnered with.</h2>
      </div>
      <div className="testimonials__grid">
        <article className="testimonial-card">
          <div className="testimonial-card__stars">★★★★★</div>
          <p className="testimonial-card__text">
            AR Infotech completely transformed our Shopify store. The structure, speed and conversion improvements were immediately noticeable.
          </p>
          <div className="testimonial-card__author">
            <div className="testimonial-card__avatar">R</div>
            <div>
              <p className="testimonial-card__name">Rahul Mehta</p>
              <p className="testimonial-card__role">FreshONeedUSA</p>
            </div>
          </div>
        </article>
        <article className="testimonial-card">
          <div className="testimonial-card__stars">★★★★★</div>
          <p className="testimonial-card__text">
            Their SEO strategy helped us grow organic traffic significantly within months. Clear communication and structured execution.
          </p>
          <div className="testimonial-card__author">
            <div className="testimonial-card__avatar">N</div>
            <div>
              <p className="testimonial-card__name">Neha Sharma</p>
              <p className="testimonial-card__role">CosmosEntials</p>
            </div>
          </div>
        </article>
        <article className="testimonial-card">
          <div className="testimonial-card__stars">★★★★★</div>
          <p className="testimonial-card__text">
            Professional, fast and highly accountable. The website upgrade elevated our brand presence instantly.
          </p>
          <div className="testimonial-card__author">
            <div className="testimonial-card__avatar">B</div>
            <div>
              <p className="testimonial-card__name">Bheem Singh</p>
              <p className="testimonial-card__role">Sankalp Academy</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section className="cta-section" id="contact">
      <div className="cta-section__orb"></div>
      <div className="cta-section__inner">
        <h2 className="cta-section__title">Ready to Build a Digital System That Scales?</h2>
        <p className="cta-section__sub">
          Let's discuss your goals and create a structured growth strategy tailored to your business.
        </p>
        <div className="cta-section__actions">
          <a className="btn btn--primary" href="https://wa.me/9430056407" target="_blank" rel="noreferrer noopener">
            Start a Project
          </a>
          <a className="btn btn--outline" href="mailto:webssolution05@gmail.com">
            Book a Call
          </a>
        </div>
      </div>
    </section>
  </>
)

export default Home
