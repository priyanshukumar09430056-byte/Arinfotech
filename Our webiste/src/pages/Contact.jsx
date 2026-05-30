const Contact = () => (
  <div className="page-padding">
    <section className="services">
      <div className="section-header">
        <p className="section-sub">Contact AR Infotech</p>
        <h2 className="section-title">Let’s build a system that scales your digital growth.</h2>
      </div>
      <div className="services__grid">
        <article className="service-card">
          <span className="service-card__badge">Email</span>
          <h3 className="service-card__title">arinfotech000@gmail.com</h3>
          <p className="service-card__desc">Send your project details, questions, or onboarding requests anytime.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">Phone</span>
          <h3 className="service-card__title">+91 94300 56407</h3>
          <p className="service-card__desc">Reach out directly on WhatsApp for faster responses.</p>
        </article>
        <article className="service-card">
          <span className="service-card__badge">Chat</span>
          <h3 className="service-card__title">WhatsApp Support</h3>
          <p className="service-card__desc">Start a conversation instantly with our growth team.</p>
        </article>
      </div>
    </section>

    <section className="services">
      <div className="section-header">
        <p className="section-sub">Send an enquiry</p>
        <h2 className="section-title">Drop us a message and we’ll email you back fast.</h2>
      </div>
      <form className="contact-form" action="https://formsubmit.co/arinfotech000@gmail.com" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Website Enquiry - AR Infotech" />
        <input type="hidden" name="_template" value="table" />
        <div className="contact-form__grid">
          <label className="contact-form__field">
            <span>Name</span>
            <input type="text" name="Name" placeholder="Your name" required />
          </label>
          <label className="contact-form__field">
            <span>Email</span>
            <input type="email" name="Email" placeholder="Your email address" required />
          </label>
          <label className="contact-form__field contact-form__field--full">
            <span>Subject</span>
            <input type="text" name="Subject" placeholder="Project, question or request" required />
          </label>
          <label className="contact-form__field contact-form__field--full">
            <span>Message</span>
            <textarea name="Message" placeholder="Write your enquiry here" rows="7" required />
          </label>
        </div>
        <button className="btn btn--primary" type="submit">Send Enquiry</button>
      </form>
    </section>

    <section className="cta-section">
      <div className="cta-section__orb"></div>
      <div className="cta-section__inner">
        <h2 className="cta-section__title">Ready to launch your next digital growth project?</h2>
        <p className="cta-section__sub">Contact us today and let’s build a strategy that converts.</p>
        <div className="cta-section__actions">
          <a className="btn btn--primary" href="https://wa.me/9430056407" target="_blank" rel="noreferrer noopener">Chat on WhatsApp</a>
          <a className="btn btn--outline" href="mailto:arinfotech000@gmail.com">Email Us</a>
        </div>
      </div>
    </section>
  </div>
)

export default Contact
