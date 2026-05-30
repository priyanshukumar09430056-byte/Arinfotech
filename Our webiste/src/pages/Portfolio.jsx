const Portfolio = () => (
  <div className="page-padding">
    <section className="projects">
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
          <p className="project-card__desc">Website Development</p>
        </article>
      </div>
      <div className="projects__cta">
        <a className="btn btn--outline" href="https://arinfotech.online/portfolio" target="_blank" rel="noreferrer noopener">View Full Portfolio</a>
      </div>
    </section>
  </div>
)

export default Portfolio
