import "./styles/About.css";

const missionItems = [
  {
    title: "AI Innovation",
    text: "Pushing the boundaries of artificial intelligence with cutting-edge research and practical applications that solve real-world challenges.",
  },
  {
    title: "Enterprise Systems",
    text: "Building robust, scalable infrastructure that powers mission-critical operations with uncompromising reliability and security.",
  },
  {
    title: "Critical Environments",
    text: "Delivering defense-grade solutions tested in the most demanding scenarios where precision and performance are paramount.",
  },
  {
    title: "Skincare Intelligence",
    text: "Revolutionizing personal care with AI-powered analysis and personalized recommendations that make professional skincare accessible to everyone.",
  },
];

const leaders = [
  ["Marcus Chen", "Chief Executive Officer"],
  ["Sarah Mitchell", "Chief Technology Officer"],
  ["David Rodriguez", "Chief Product Officer"],
  ["Emily Thompson", "Chief Science Officer"],
  ["James Sullivan", "VP of Engineering"],
];

const pillars = [
  [
    "Advanced AI",
    "Leveraging state-of-the-art machine learning, computer vision, and natural language processing to create intelligent systems that truly understand and adapt.",
  ],
  [
    "Security First",
    "Built on defense-grade security principles with end-to-end encryption, privacy-preserving AI, and infrastructure designed to protect your most sensitive information.",
  ],
  [
    "Human-Centered",
    "Technology that puts people first, with intuitive interfaces and personalized experiences, and AI that enhances rather than replaces human judgment and creativity.",
  ],
];

export default function About() {
  return (
    <div className="about">
      {/* Hero */}
      <section className="aboutHero">
        <div className="container aboutHero__inner">
          <h1 className="aboutHero__title">About PymSphere</h1>
          <p className="aboutHero__subtitle">
            We're pioneering the future of intelligent technology by combining
            defense-grade AI engineering with personalized consumer experiences
            that transform how people interact with technology in their daily
            lives.
          </p>
        </div>
      </section>

      {/* Mission (WHITE section) */}
      <section className="section aboutSection aboutSection--white">
        <div className="container">
          <header className="section__header">
            <h2 className="section__title aboutH2">Our Mission</h2>
          </header>

          <div className="aboutGrid aboutGrid--4">
            {missionItems.map((item) => (
              <div key={item.title} className="card missionCard">
                <div className="missionCard__icon" aria-hidden="true" />
                <h3 className="missionCard__title">{item.title}</h3>
                <p className="missionCard__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership (CREAM band) */}
      <section className="section aboutSection aboutSection--cream">
        <div className="container">
          <header className="section__header">
            <h2 className="section__title aboutH2">Leadership Team</h2>
          </header>

          <div className="aboutGrid aboutGrid--5">
            {leaders.map(([name, role]) => (
              <div key={name} className="card leaderCard">
                <div className="leaderCard__avatar" aria-hidden="true" />
                <h3 className="leaderCard__name">{name}</h3>
                <p className="leaderCard__role">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Vision (PEACH band) */}
      <section className="aboutStory">
        <div className="container aboutStory__inner">
          <h2 className="aboutStory__title">Our Story &amp; Vision</h2>
          <p className="aboutStory__text">
            PymSphere was born from a simple observation: the most advanced AI
            technologies developed for defense and enterprise applications could
            transform everyday consumer experiences. Our founding team, composed
            of veterans and defense-adjacent engineers, recognized that the same
            precision, reliability, and intelligence required in
            mission-critical systems could revolutionize how people approach
            personal care, productivity, and daily decision-making.
          </p>
          <p className="aboutStory__text">
            Today, we are building a future where sophisticated AI isn't just
            for governments and corporations — it’s accessible, intuitive, and
            genuinely helpful for everyone. From our flagship skincare
            intelligence platform to our personal AI assistant, every product
            reflects our commitment to bringing military-grade technology to
            consumer applications.
          </p>
        </div>
      </section>

      {/* Pillars (WHITE section) */}
      <section className="section aboutSection aboutSection--white">
        <div className="container">
          <header className="section__header">
            <h2 className="section__title aboutH2">Innovation Pillars</h2>
          </header>

          <div className="aboutGrid aboutGrid--3">
            {pillars.map(([title, text]) => (
              <div key={title} className="card pillarCard">
                <div className="pillarCard__icon" aria-hidden="true" />
                <h3 className="pillarCard__title">{title}</h3>
                <p className="pillarCard__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band (TEAL) */}
      <section className="aboutCta">
        <div className="container aboutCta__inner">
          <h2 className="aboutCta__title">Join Us on Our Mission</h2>
          <button className="btn btn--secondary">Get Started Today</button>
        </div>
      </section>
    </div>
  );
}
