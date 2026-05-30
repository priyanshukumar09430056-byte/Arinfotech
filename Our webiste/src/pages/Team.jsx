const teamMembers = [
  { name: 'Ayush Anand', role: 'CEO & Founder', initials: 'AA', bio: 'Leads strategy, digital growth, and Shopify delivery for high-performance brands.' },
  { name: 'Vidya Gupta', role: 'Co-Founder', initials: 'VG', bio: 'Drives content direction, brand storytelling, and campaign strategy.' },
  { name: 'Animesh Anand', role: 'Co-Founder', initials: 'AA', bio: 'Delivers creative motion graphics, animation and visual content production.' },
  { name: 'Tanisha', role: 'CFO & AI Specialist', initials: 'T', bio: 'Manages finances, optimizes AI workflows and streamlines creative content production.' },
  { name: 'Mohit', role: 'Ads Manager', initials: 'M', bio: 'Builds and scales paid acquisition with data-driven performance marketing.' },
  { name: 'Ashish Kumar', role: 'Social Media Manager', initials: 'AK', bio: 'Executes social strategies that grow engagement and brand awareness.' },
  { name: 'Durganshi', role: 'Social Media Manager', initials: 'D', bio: 'Creates campaigns that connect with audiences across modern social platforms.' },
  { name: 'Sweta Kumari', role: 'Content Writer', initials: 'S', bio: 'Writes compelling copy and content that converts across digital channels.' },
  { name: 'Prerna Raj', role: 'Team Leader', initials: 'PR', bio: 'Coordinates delivery across projects and keeps every launch on track.' },
  { name: 'Priyanshu Kumar', role: 'Shopify Developer', initials: 'PK', bio: 'Builds scalable Shopify and web solutions with conversion-driven architecture.' },
  { name: 'Kajal Kumari', role: 'HR', initials: 'KK', bio: 'Supports operations, hiring, and a strong team culture for long-term growth.' },
  { name: 'Vivek Kumar', role: 'Video Editor', initials: 'VK', bio: 'Turns footage into polished brand videos with modern storytelling.' },
]

const Team = () => (
  <div className="page-padding">
    <section className="page-hero">
      <div className="section-header">
        <p className="section-sub">Meet Our Experts</p>
        <h1 className="section-title">The Passionate Minds Behind Your Brand’s Growth</h1>
        <p className="section-sub">Our team combines strategy, design, development and marketing to help ambitious brands scale.</p>
      </div>
    </section>

    <section className="services">
      <div className="section-header">
        <h2 className="section-title">Our Team</h2>
        <p className="section-sub">A collective of specialists working together to deliver measurable digital results.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map(member => (
          <article key={member.name} className="team-card">
            <div className="team-card__avatar">{member.initials}</div>
            <h3 className="team-card__name">{member.name}</h3>
            <p className="team-card__role">{member.role}</p>
            <p className="team-card__desc">{member.bio}</p>
          </article>
        ))}
      </div>
    </section>

    <section className="why-us">
      <div className="why-us__inner">
        <div className="section-header">
          <h2 className="section-title">Why Our Team Works</h2>
          <p className="section-sub">We deliver structured execution, clear accountability and real business outcomes.</p>
        </div>
        <div className="why-us__grid">
          <article className="stat-card">
            <span className="stat-card__badge">01</span>
            <h3 className="stat-card__label">Specialized Expertise</h3>
            <p>Every role is owned by a specialist, from Shopify development to SEO and creative production.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">02</span>
            <h3 className="stat-card__label">Data-Driven Delivery</h3>
            <p>We use performance metrics and revenue signals to prioritize every decision.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">03</span>
            <h3 className="stat-card__label">Collaborative Approach</h3>
            <p>Clients are treated as partners, with transparent communication at every step.</p>
          </article>
          <article className="stat-card">
            <span className="stat-card__badge">04</span>
            <h3 className="stat-card__label">Growth Focus</h3>
            <p>We build systems that are optimized for long-term growth, not short-term fixes.</p>
          </article>
        </div>
      </div>
    </section>
  </div>
)

export default Team
