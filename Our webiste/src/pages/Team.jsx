const teamMembers = [
  { name: 'Priyanshu Kumar',  role: 'CEO & Founder',         src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Vidya Gupta',      role: 'Co-Founder',            src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Animesh Anand',    role: 'Co-Founder',            src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Tanisha',          role: 'CFO & AI Specialist',   src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Mohit',            role: 'Ads Manager',           src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Ashish Kumar',     role: 'Social Media Manager',  src: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Durganshi',        role: 'Social Media Manager',  src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Sweta Kumari',     role: 'Content Writer',        src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Prerna Raj',       role: 'Team Leader',           src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Priyanshu Kumar',  role: 'Shopify Developer',     src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Kajal Kumari',     role: 'HR',                    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400&h=500' },
  { name: 'Vivek Kumar',      role: 'Video Editor',          src: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400&h=500' },
]

const Team = () => (
  <div className="team-page">

    {/* ── Hero ── */}
    <section className="team-hero">
      <p className="team-hero__sub">Meet Our Experts</p>
      <h1 className="team-hero__title">
        The Passionate Minds<br />Behind Your Brand's Growth
      </h1>
      <p className="team-hero__desc">
        Our team combines strategy, design, development and marketing<br />
        to help ambitious brands scale globally.
      </p>
    </section>

    {/* ── Grid ── */}
    <section className="team-section">
      <div className="team-photo-grid">
        {teamMembers.map(member => (
          <article key={`${member.name}-${member.role}`} className="team-photo-card">
            <div className="team-photo-card__img-wrap">
              <img
                src={member.src}
                alt={member.name}
                className="team-photo-card__img"
                loading="lazy"
              />
              <div className="team-photo-card__overlay" />
            </div>
            <div className="team-photo-card__info">
              <h3 className="team-photo-card__name">{member.name}</h3>
              <p className="team-photo-card__role">{member.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="team-cta">
      <div className="team-cta__orb" />
      <div className="team-cta__inner">
        <h2 className="team-cta__title">Want to Join the Team?</h2>
        <p className="team-cta__sub">
          We're always looking for talented individuals who are passionate about digital growth.
        </p>
        <div className="team-cta__actions">
          <a className="btn btn--primary" href="https://wa.me/9430056407" target="_blank" rel="noreferrer noopener">
            Apply on WhatsApp
          </a>
          <a className="btn btn--outline" href="mailto:arinfotech000@gmail.com">
            Send Your Resume
          </a>
        </div>
      </div>
    </section>
  </div>
)

export default Team
