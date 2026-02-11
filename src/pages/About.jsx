import { useSiteData, useSiteSection } from '../customHooks/Context'

import "./styles/About.css";


export default function About() {
    const { loading, error } = useSiteData()
    const missionItems = useSiteSection("missionItems")
    const leaders = useSiteSection("leaders")
    const pillars = useSiteSection("pillars")

    const activeLeaders = leaders.filter((l) => l.is_active === true)

    if (loading) return <p>Loading…</p>
    if (error) return <p>Error loading data: {error}</p>

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
                <div className="missionCard__icon" aria-hidden="true">
                  <img src={item.img} alt={item.title} />
                </div>
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

          <div className="aboutGrid aboutGrid--3">
            {activeLeaders.map((i) => (
              <div key={i} className="card leaderCard">
                <div className="leaderCard__avatar" aria-hidden="true">
                  <img src={i.img} alt={i.name} />
                </div>
                <h3 className="leaderCard__name">{i.name}</h3>
                <p className="leaderCard__role">{i.title}</p>
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
            PymSphere was founded on a clear insight: advanced AI technology, honed through rigorous  engineering, can make everyday wellness more accessible and effective. Led by a U.S. Marine  Corps veteran and SDVOSB-certified team, we bring disciplined innovation to consumer AI— starting with skincare and expanding to intuitive daily tools. 
          </p>
          <p className="aboutStory__text">
            Our flagship product, Mayon, is the AI skincare companion that helps you discover personalized  routines for your best glow. Through on-device insights into your skin's appearance, texture,  and tone, Mayon offers tailored suggestions based on your lifestyle, preferences, and existing  products—making consistent, effortless skincare available to everyone. 
          </p>
          <p className="aboutStory__text">
            We're building a future where powerful AI feels like a helpful friend in your daily life. Privacy first and user-focused, Mayon is just the beginning of how PymSphere delivers smart,  approachable technology for real people. 
          </p>
          <p className="aboutStory__text">
            Join the journey. Download Mayon and start your personalized skincare experience today.
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
            {pillars.map((i) => (
              <div key={i.id} className="card pillarCard">
                <div className="pillarCard__icon" aria-hidden="true">
                  <img src={i.img} alt={i.title} />
                </div>
                <h3 className="pillarCard__title">{i.title}</h3>
                <p className="pillarCard__text">{i.text}</p>
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
