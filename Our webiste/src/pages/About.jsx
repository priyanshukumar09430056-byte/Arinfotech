const About = () => (
  <div className="page-padding">
    <section className="services">
      <div className="section-header">
        <p className="section-sub">About AR Infotech</p>
        <h2 className="section-title">Performance-driven growth systems built for ambitious brands.</h2>
      </div>
      <div className="services__grid">
        <article className="service-card">
          <span className="service-card__badge">01</span>
          <span className="service-card__icon">🎯</span>
          <h3 className="service-card__title">Focused Execution</h3>
          <p className="service-card__desc">We deliver strategy, design, and development as a connected system with measurable results.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">02</span>
          <span className="service-card__icon">🤝</span>
          <h3 className="service-card__title">Accountable Partnership</h3>
          <p className="service-card__desc">Our process is transparent, structured, and built around long-term growth.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">03</span>
          <span className="service-card__icon">📈</span>
          <h3 className="service-card__title">Growth Mindset</h3>
          <p className="service-card__desc">Every decision is driven by business metrics, not guesswork.</p>
        </article>
      </div>
    </section>

    <section className="why-us">
      <div className="why-us__inner">
        <div className="section-header">
          <h2 className="section-title">Why choose us?</h2>
          <p className="section-sub">We build structured digital systems that align marketing, development and operations.</p>
        </div>
        <div className="why-us__grid">
          <article className="stat-card">
            <span className="stat-card__badge">01</span>
            <h3 className="stat-card__label">Reliable Delivery</h3>
            <p>Clear timelines, fast execution and milestone-driven progress.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">02</span>
            <h3 className="stat-card__label">Quality First</h3>
            <p>Modern site builds with performance and conversions in mind.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">03</span>
            <h3 className="stat-card__label">Data Focused</h3>
            <p>Decisions are guided by analytics, traffic and business outcomes.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">04</span>
            <h3 className="stat-card__label">Growth Systems</h3>
            <p>We build workflows that scale with your brand and market needs.</p>
          </article>
        </div>
      </div>
    </section>
  </div>
)

export default About
