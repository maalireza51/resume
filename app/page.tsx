import Image from "next/image";

const resumeUrl = "/Alireza-Mashayekhi-Resume.pdf";

const career = [
  { company: "SnappMarket", role: "Software Engineer · Frontend", period: "2026 — Present", description: "Working on frontend architecture and user experiences for a large ecommerce platform.", tags: ["React", "TypeScript", "Frontend architecture"] },
  { company: "Gooya", role: "Full-Stack Product Development", period: "2026", description: "Building web and administrative experiences for an AI-focused product.", tags: ["Next.js", "NestJS", "Product engineering"] },
  { company: "Shab", role: "Software Engineer · Frontend Chapter Lead", period: "2023 — 2026", description: "Developed marketplace experiences and helped improve frontend quality and team practices.", tags: ["React", "Performance", "Design systems"] },
  { company: "Qanunbio", role: "Software Engineer · Frontend (part-time)", period: "2025", description: "Created interfaces for research data exploration and visualization.", tags: ["Next.js", "Data visualization", "Frontend"] },
  { company: "Qmoil", role: "Full-Stack Developer", period: "2021 — 2022", description: "Built software for operational workflows and reporting.", tags: ["React", "Full-stack", "Dashboards"] },
  { company: "Dekatech", role: "Independent Full-Stack Developer", period: "2022", description: "Developed web experiences around AI-enabled products.", tags: ["Next.js", "Full-stack", "AI integration"] },
  { company: "RasmSafar", role: "Frontend Developer", period: "2019", description: "Built responsive experiences for a travel platform.", tags: ["React", "Responsive design", "Frontend"] },
];

const featured = [
  { number: "01", category: "Frontend architecture", company: "SnappMarket", title: "Building for scale and consistency", description: "Contributed to frontend modernization and reusable interface patterns for a large ecommerce platform.", tags: ["TypeScript", "React", "Design systems"] },
  { number: "02", category: "Full-stack delivery", company: "Gooya", title: "Connecting product and engineering", description: "Built public-facing and administrative web experiences for an AI-focused product.", tags: ["Next.js", "NestJS", "Product engineering"] },
  { number: "03", category: "Data & product UI", company: "Qanunbio", title: "Making complex data approachable", description: "Developed research interfaces that make data easier to explore, understand, and work with.", tags: ["Data visualization", "Next.js", "Research tools"] },
];

const experienceSummary = [
  { company: "SnappMarket", focus: "Ecommerce platform", description: "Frontend architecture, reusable UI, and product experiences at scale." },
  { company: "Shab", focus: "Rental marketplace", description: "Search and marketplace experiences, performance work, design systems, and frontend leadership." },
  { company: "Gooya", focus: "AI product", description: "Full-stack web and administrative experiences for an AI-focused product." },
  { company: "Qanunbio", focus: "Research technology", description: "Interfaces for data exploration, visualization, and research workflows." },
  { company: "Qmoil", focus: "Operations software", description: "Full-stack applications for operations and reporting." },
  { company: "Dekatech", focus: "AI solutions", description: "Web applications and interfaces for AI-enabled services." },
  { company: "RasmSafar", focus: "Travel platform", description: "Responsive search and booking experiences." },
];

const skillGroups = [
  { title: "Frontend & product", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Design systems", "Storybook", "PWA"] },
  { title: "Backend & data", items: ["NestJS", "Node.js", "REST APIs", "MySQL", "SQL", "DuckDB", "TypeORM"] },
  { title: "Delivery & integration", items: ["Vite", "Docker", "CI/CD", "WordPress REST API", "AI integration", "ECharts", "WebSocket"] },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Alireza Mashayekhi, back to top"><span className="brand-mark">AM<span className="brand-dot">.</span></span><span className="brand-name">ALIREZA MASHAYEKHI</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#work">Selected work</a><a href="#experience">Experience</a><a href="#skills">Skills</a>
        </nav>
        <a className="header-contact" href="mailto:maalireza51@gmail.com">Let&apos;s connect <span aria-hidden="true">↗</span></a>
      </header>

      <main id="top">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="section-kicker"><span className="live-dot" /> SOFTWARE ENGINEER · FRONTEND & FULL-STACK</div>
            <h1 id="hero-title">Building useful products <em>from interface to infrastructure.</em></h1>
            <p className="hero-lede">I&apos;m Alireza Mashayekhi. I turn complex workflows into clear, dependable web experiences — from dashboards and design systems to data-rich platforms and AI-enabled products.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href={resumeUrl} download="Alireza-Mashayekhi-Resume.pdf">Download resume <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-meta"><span>Based in Iran · Working across product teams</span><span className="meta-divider" /><a href="https://www.linkedin.com/in/alireza-mashayekhi" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame"><Image src="/profileImg2.jpg" alt="Alireza Mashayekhi" fill priority sizes="(max-width: 800px) 75vw, 350px" className="portrait" /></div>
            <div className="visual-label visual-label-top"><span>01 / PRODUCT ENGINEERING</span><strong>Designing for clarity.</strong></div>
            <div className="visual-label visual-label-bottom"><span>02 / END-TO-END DELIVERY</span><strong>Building for reality.</strong></div>
          </div>
        </section>

        <section className="intro-band" id="about">
          <div className="page-width intro-grid"><div><span className="section-label">ABOUT / 001</span><h2>Practical engineering,<br /><i>thoughtful delivery.</i></h2></div><div className="intro-text"><p>My work sits where product needs meet technical execution. I build frontend architectures that teams can maintain, operational tools that reduce friction, and full-stack experiences that connect user interfaces to real business workflows.</p><p>Across ecommerce, marketplaces, healthcare research, and AI products, I&apos;ve worked closely with designers, product managers, and backend teams to take ideas into usable software.</p></div></div>
        </section>

        <section className="section page-width" id="work" aria-labelledby="work-title">
          <div className="section-heading"><div><span className="section-label">SELECTED WORK / 002</span><h2 id="work-title">The work behind the words<span className="accent-period">.</span></h2></div><p>A few examples of the problems, products, and systems I&apos;ve helped build.</p></div>
          <div className="featured-grid">{featured.map((item) => <article className="featured-card" key={item.number}><div className="featured-top"><span>{item.number} / {item.category}</span><span className="featured-arrow" aria-hidden="true">↗</span></div><div className="featured-body"><span className="company-label">{item.company}</span><h3>{item.title}</h3><p>{item.description}</p></div><div className="tag-row">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><a className="card-link" href="#experience">Experience at a glance <span aria-hidden="true">→</span></a></article>)}</div>
        </section>

        <section className="career-section" aria-labelledby="career-title"><div className="page-width"><div className="section-heading"><div><span className="section-label">CAREER / 003</span><h2 id="career-title">Where I&apos;ve contributed<span className="accent-period">.</span></h2></div><p>A path through product platforms, data tools, and operational software.</p></div><div className="career-list">{career.map((item) => <article className="career-row" key={item.company}><div className="career-period">{item.period}</div><div className="career-content"><div className="career-title"><h3>{item.company}</h3><span>{item.role}</span></div><p>{item.description}</p><div className="tag-row">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>

        <section className="section page-width experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading"><div><span className="section-label">EXPERIENCE / 004</span><h2 id="experience-title">Experience at a glance<span className="accent-period">.</span></h2></div><p>A concise look at the kinds of work I&apos;ve done across teams and products.</p></div>
          <div className="experience-summary-grid">{experienceSummary.map((item) => <article className="experience-summary-card" key={item.company}><span>{item.focus}</span><h3>{item.company}</h3><p>{item.description}</p></article>)}</div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title"><div className="page-width"><div className="section-heading"><div><span className="section-label">TOOLKIT / 005</span><h2 id="skills-title">Tools I work with<span className="accent-period">.</span></h2></div><p>A focused selection of technologies used across my projects.</p></div><div className="skills-grid">{skillGroups.map((group, index) => <div className="skill-group" key={group.title}><span className="skill-number">0{index + 1}</span><h3>{group.title}</h3><div className="tag-row">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div><div className="education"><span>EDUCATION</span><p>Bachelor of Electronics Engineering · Urmia University <small>2015 — 2019</small></p></div></div></section>

        <section className="contact-section" id="contact"><div className="page-width contact-grid"><div><span className="section-label">WHAT&apos;S NEXT / 006</span><h2>Let&apos;s build something <i>worth using.</i></h2><p>Interested in frontend architecture, full-stack product work, or thoughtful AI integration? I&apos;d be glad to talk.</p></div><div className="contact-actions"><a className="button button-light" href="mailto:maalireza51@gmail.com">Email me <span aria-hidden="true">↗</span></a><a className="contact-email" href="mailto:maalireza51@gmail.com">maalireza51@gmail.com</a><a className="contact-social" href="https://www.linkedin.com/in/alireza-mashayekhi" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="contact-social" href={resumeUrl} download="Alireza-Mashayekhi-Resume.pdf">Download resume ↓</a></div></div></section>
      </main>

      <footer className="site-footer page-width"><span>© {new Date().getFullYear()} Alireza Mashayekhi</span><span>Made for clarity, built for the web.</span><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}
