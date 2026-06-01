const Home = () => (
  <>
    <header className="hero">
      <div className="hero__content">
        <span className="hero__badge">Performance-Driven Digital Services</span>
        <h1 className="hero__title">
          DESIGNING THE <span className="text-purple">DIGITAL FUTURE.</span>
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
        <p className="section-sub">WHAT WE OFFER</p>
        <h2 className="section-title">Strategic Digital Marketing Services That Deliver Results</h2>
        <p className="section-sub">We offer a full suite of performance-driven digital marketing services designed to elevate your brand and drive real business growth. Whether you're looking to build brand awareness, generate quality leads, or boost your online sales — AR Infotech has you covered.</p>
      </div>
      <div className="services__grid">
        <article className="service-card">
          <span className="service-card__badge">01</span>
          <img src="https://www.corcusstudio.in/assets/img/service/01.gif" alt="Performance Marketing" className="service-card__gif" />
          <div className="service-card__content">
            <h3 className="service-card__title">Performance Marketing</h3>
            <p className="service-card__desc">Maximize ROI with data-driven campaigns that deliver measurable results for your business.</p>
          </div>
        </article>
        <article className="service-card">
          <span className="service-card__badge">02</span>
          <img src="https://www.corcusstudio.in/assets/img/service/02.gif" alt="Social Media Marketing" className="service-card__gif" />
          <div className="service-card__content">
            <h3 className="service-card__title">Social Media Marketing</h3>
            <p className="service-card__desc">Strategic content creation and management across platforms to engage your audience and grow your brand.</p>
          </div>
        </article>
        <article className="service-card">
          <span className="service-card__badge">03</span>
          <img src="https://www.corcusstudio.in/assets/img/service/03.gif" alt="Search Engine Optimization" className="service-card__gif" />
          <div className="service-card__content">
            <h3 className="service-card__title">Search Engine Optimization</h3>
            <p className="service-card__desc">Improve your website’s visibility and ranking on search engines with proven SEO strategies.</p>
          </div>
        </article>
        <article className="service-card">
          <span className="service-card__badge">04</span>
          <img src="https://www.corcusstudio.in/assets/img/service/04.gif" alt="Content Marketing" className="service-card__gif" />
          <div className="service-card__content">
            <h3 className="service-card__title">Content Marketing</h3>
            <p className="service-card__desc">Engaging content that builds brand authority and attracts your ideal customers.</p>
          </div>
        </article>
        <article className="service-card">
          <span className="service-card__badge">05</span>
          <img src="https://www.corcusstudio.in/assets/img/service/05.gif" alt="Brand Strategy & Consulting" className="service-card__gif" />
          <div className="service-card__content">
            <h3 className="service-card__title">Brand Strategy & Consulting</h3>
            <p className="service-card__desc">Customized marketing strategies that align with your business goals and drive growth.</p>
          </div>
        </article>
        <article className="service-card">
          <span className="service-card__badge">06</span>
          <img src="https://www.corcusstudio.in/assets/img/service/06.gif" alt="Creative Design" className="service-card__gif" />
          <div className="service-card__content">
            <h3 className="service-card__title">Creative Design</h3>
            <p className="service-card__desc">Visually appealing creatives that resonate with your target audience and elevate your brand.</p>
          </div>
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
            <span className="project-card__icon">
              <img src="https://thesugrclinic.com/wp-content/uploads/2026/04/The-sugr-clinic-website-banner-phone_page-0001-scaled.jpg" alt="The Sugr Clinic logo" />
            </span>
          </div>
          <p className="project-card__tag">CLINIC WEBSITE</p>
          <h3 className="project-card__title">www.thesugrclinic.com</h3>
          <p className="project-card__desc">Web Design + Branding</p>
        </article>
        <article className="project-card">
          <div className="project-card__thumbnail">
            <div className="project-card__glow"></div>
            <span className="project-card__icon">
              <img src="https://www.cosmosentials.com/cdn/shop/files/urban_web_1_3e7974b9-65a2-4664-bc78-8e598f4399b9.png?v=1732270285&width=410" alt="Cosmosential logo" />
            </span>
          </div>
          <p className="project-card__tag">D2C BRAND</p>
          <h3 className="project-card__title">www.cosmosential.com</h3>
          <p className="project-card__desc">Brand Website + SEO</p>
        </article>
        <article className="project-card">
          <div className="project-card__thumbnail">
            <div className="project-card__glow"></div>
            <span className="project-card__icon">
              <img src="https://hypnix.co/wp-content/uploads/2026/03/cropped-cropped-WhatsApp_Image_2026-03-05_at_12.19.31-removebg-preview-32x32.png" alt="Hypnix logo" />
            </span>
          </div>
          <p className="project-card__tag">WELLNESS BRAND</p>
          <h3 className="project-card__title">www.hypnix.co</h3>
          <p className="project-card__desc">Website Development</p>
        </article>
      </div>
      <div className="projects__cta">
        <a className="btn btn--outline" href="../pages/Portfolio.jsx" target="_blank" rel="noreferrer noopener">View Full Portfolio</a>
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
