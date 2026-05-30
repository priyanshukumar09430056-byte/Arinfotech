const courses = [
  { title: 'Social Media Management', description: 'Grow brands with real-world content strategy, platform management, and audience engagement.' },
  { title: 'Graphic Designing', description: 'Create professional visuals, branding assets, and digital artwork with modern design tools.' },
  { title: 'Video Editing', description: 'Turn raw footage into compelling stories using industry-standard editing workflows.' },
  { title: 'Performance Marketing', description: 'Learn paid acquisition, campaign optimization, and ROI-driven ad management.' },
  { title: 'Google My Business', description: 'Improve local visibility, manage reviews, and drive nearby customers to your business.' },
  { title: 'Website Development', description: 'Build websites with best practices for speed, usability, and conversion performance.' },
]

const benefits = [
  { title: 'Real-world Experience', description: 'Work on live projects and learn with hands-on industry training.' },
  { title: 'Professional Networking', description: 'Connect with mentors, experts, and a community of digital professionals.' },
  { title: 'Career Support', description: 'Get guidance on resumes, interviews, and building a strong portfolio.' },
  { title: 'Flexible Learning', description: 'Choose training that fits your schedule with online and practical sessions.' },
]

const Academic = () => (
  <div className="page-padding">
    <section className="page-hero">
      <div className="section-header">
        <p className="section-sub">Launch Your Career</p>
        <h1 className="section-title">Launch Your Career with Real Industry Skills</h1>
        <p className="section-sub">Experience practical training in digital marketing, design, development, and growth systems designed for real-world results.</p>
      </div>
    </section>

    <section className="services">
      <div className="section-header">
        <p className="section-sub">Our Courses</p>
        <h2 className="section-title">From foundational skills to advanced training, our courses prepare you for tomorrow’s industry.</h2>
      </div>
      <div className="courses-grid">
        {courses.map(course => (
          <article key={course.title} className="course-card">
            <h3 className="course-card__title">{course.title}</h3>
            <p className="course-card__desc">{course.description}</p>
            <a className="btn btn--outline" href="https://wa.me/9430056407" target="_blank" rel="noreferrer noopener">Know More</a>
          </article>
        ))}
      </div>
    </section>

    <section className="why-us">
      <div className="why-us__inner">
        <div className="section-header">
          <h2 className="section-title">Why Choose Our Academy</h2>
          <p className="section-sub">Get practical skills, mentorship, and career support that helps you launch with confidence.</p>
        </div>
        <div className="why-us__grid">
          {benefits.map(item => (
            <article key={item.title} className="stat-card">
              <span className="stat-card__badge">{item.title.split(' ')[0]}</span>
              <h3 className="stat-card__label">{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="cta-section">
      <div className="cta-section__orb"></div>
      <div className="cta-section__inner">
        <h2 className="cta-section__title">Ready to Enroll in a Course?</h2>
        <p className="cta-section__sub">Talk to us and discover the training path that fits your goals.</p>
        <div className="cta-section__actions">
          <a className="btn btn--primary" href="https://wa.me/9430056407" target="_blank" rel="noreferrer noopener">Enroll Now</a>
          <a className="btn btn--outline" href="mailto:webssolution05@gmail.com">Contact Us</a>
        </div>
      </div>
    </section>
  </div>
)

export default Academic
