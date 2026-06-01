const Services = () => (
  <div className="page-padding">
    <section className="services">
      <div className="section-header">
        <p className="section-sub">WHAT WE OFFER</p>
        <h2 className="section-title">Strategic Digital Marketing Services That Deliver Results</h2>
        <p className="section-sub">We offer a full suite of performance-driven digital marketing services designed to elevate your brand and drive real business growth. Whether you're looking to build brand awareness, generate quality leads, or boost your online sales — AR Infotech has you covered.</p>
      </div>
      <div className="services__grid">
        <article className="service-card">
          <span className="service-card__badge">01</span>
          <img src="https://media.giphy.com/media/l0HlJKStMebhwVgqs/giphy.gif" alt="Performance Marketing" className="service-card__gif" />
          <h3 className="service-card__title">Performance Marketing</h3>
          <p className="service-card__desc">Maximize ROI with data-driven campaigns that deliver measurable results for your business.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">02</span>
          <img src="https://media.giphy.com/media/l0MYB8Ory7Hqefo9a/giphy.gif" alt="Social Media Marketing" className="service-card__gif" />
          <h3 className="service-card__title">Social Media Marketing</h3>
          <p className="service-card__desc">Strategic content creation and management across platforms to engage your audience and grow your brand.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">03</span>
          <img src="https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif" alt="Search Engine Optimization" className="service-card__gif" />
          <h3 className="service-card__title">Search Engine Optimization</h3>
          <p className="service-card__desc">Improve your website’s visibility and ranking on search engines with proven SEO strategies.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">04</span>
          <img src="https://media.giphy.com/media/xT9IgGFQj1oyxLqL6k/giphy.gif" alt="Content Marketing" className="service-card__gif" />
          <h3 className="service-card__title">Content Marketing</h3>
          <p className="service-card__desc">Engaging content that builds brand authority and attracts your ideal customers.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">05</span>
          <img src="https://media.giphy.com/media/l0MYIHF3LkF9tY2Cg/giphy.gif" alt="Brand Strategy & Consulting" className="service-card__gif" />
          <h3 className="service-card__title">Brand Strategy & Consulting</h3>
          <p className="service-card__desc">Customized marketing strategies that align with your business goals and drive growth.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">06</span>
          <img src="https://media.giphy.com/media/3o7TKsQmbjrU8hQNGo/giphy.gif" alt="Creative Design" className="service-card__gif" />
          <h3 className="service-card__title">Creative Design</h3>
          <p className="service-card__desc">Visually appealing creatives that resonate with your target audience and elevate your brand.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">07</span>
          <img src="https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif" alt="E-Commerce Marketing" className="service-card__gif" />
          <h3 className="service-card__title">E-Commerce Marketing</h3>
          <p className="service-card__desc">Comprehensive solutions to boost your online store’s sales and visibility.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">08</span>
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="WhatsApp Business API" className="service-card__gif" />
          <h3 className="service-card__title">WhatsApp Business API</h3>
          <p className="service-card__desc">In-depth WhatsApp Business API performance analysis to refine, optimize, and scale your customer engagement campaigns.</p>
        </article>
      </div>
    </section>

    <section className="why-us">
      <div className="why-us__inner">
        <div className="section-header">
          <h2 className="section-title">Why Choose AR Infotech?</h2>
          <p className="section-sub">Empowering brands with integrity, simplicity, performance, and innovation.</p>
        </div>
        <div className="why-us__grid">
          <article className="stat-card">
            <span className="stat-card__badge">01</span>
            <h3 className="stat-card__label">Specialized Experts</h3>
            <p>Each service is managed by specialists with deep expertise in their channel.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">02</span>
            <h3 className="stat-card__label">Data-Driven Results</h3>
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
        <h2 className="cta-section__title">Ready to turn your vision into reality?</h2>
        <p className="cta-section__sub">Whether you need branding, web design, packaging, or digital marketing, AR Infotech is here to help. Let’s build your next project together.</p>
        <div className="cta-section__actions">
          <a className="btn btn--primary" href="https://wa.me/9430056407" target="_blank" rel="noreferrer noopener">Book an Appointment</a>
          <a className="btn btn--outline" href="mailto:arinfotech000@gmail.com">Submit Enquiry</a>
        </div>
      </div>
    </section>
  </div>
)

export default Services;
