const Services = () => (
  <div className="page-padding">
    <section className="services">
      <div className="section-header">
        <p className="section-sub">Performance-Driven Digital Services</p>
        <h2 className="section-title">Services designed to grow traffic, conversions and revenue.</h2>
      </div>
      <div className="services__grid">
        <article className="service-card">
          <span className="service-card__badge">01</span>
          <span className="service-card__icon">🛒</span>
          <h3 className="service-card__title">Shopify & E-commerce</h3>
          <p className="service-card__desc">Store builds, migrations and optimization for Shopify brands that need reliable growth.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">02</span>
          <span className="service-card__icon">💻</span>
          <h3 className="service-card__title">Custom Web Development</h3>
          <p className="service-card__desc">Modern web experiences built for speed, lead generation, and scalable digital marketing.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">03</span>
          <span className="service-card__icon">🚀</span>
          <h3 className="service-card__title">SEO Optimization</h3>
          <p className="service-card__desc">Technical SEO and content strategy to improve organic visibility and search performance.</p>
        </article>
      </div>
    </section>

    <section className="why-us">
      <div className="why-us__inner">
        <div className="section-header">
          <h2 className="section-title">How we deliver measurable digital growth.</h2>
          <p className="section-sub">Structured execution, clear communication and fast delivery for businesses that are serious about scaling.</p>
        </div>
        <div className="why-us__grid">
          <article className="stat-card">
            <span className="stat-card__badge">01</span>
            <h3 className="stat-card__label">Specialized Teams</h3>
            <p>Each service is managed by specialists with deep expertise in the channel.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">02</span>
            <h3 className="stat-card__label">Data-driven Strategy</h3>
            <p>Every recommendation is backed by performance signals and revenue impact.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">03</span>
            <h3 className="stat-card__label">Faster Execution</h3>
            <p>Clear workflows that reduce delays and accelerate every launch.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">04</span>
            <h3 className="stat-card__label">Long-Term Growth</h3>
            <p>We build systems that can scale and sustain growth over time.</p>
          </article>
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="cta-section__orb"></div>
      <div className="cta-section__inner">
        <h2 className="cta-section__title">Ready to upgrade your digital growth engine?</h2>
        <p className="cta-section__sub">Book a call to discuss a growth system tailored to your business goals.</p>
        <div className="cta-section__actions">
          <a className="btn btn--primary" href="https://wa.me/9430056407" target="_blank" rel="noreferrer noopener">Start a Project</a>
          <a className="btn btn--outline" href="mailto:webssolution05@gmail.com">Book a Call</a>
        </div>
      </div>
    </section>
  </div>
)

export default Services
