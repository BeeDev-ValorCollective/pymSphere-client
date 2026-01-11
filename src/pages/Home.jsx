import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">AI-Powered Skincare Intelligence</h1>
            <p className="hero__subtitle">
              Transform your skincare routine with personalized AI analysis,
              smart recommendations, and real-time progress tracking designed
              for your unique skin journey.
            </p>

            <div className="hero__actions">
              <Button variant="primary">Start Your Journey</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__imageFrame" aria-label="Skincare hero image">
              <div className="hero__imagePlaceholder">Hero Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE APP DOES */}
      <Section title="What The App Does">
        <div className="grid grid--4">
          {[
            "AI Skin Analysis",
            "Smart Recommendations",
            "Progress Tracking",
            "Personalized Routines",
          ].map((label) => (
            <Card key={label} className="iconCard">
              <div className="iconCard__icon" aria-hidden="true" />
              <div className="iconCard__label">{label}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* OUR OFFERINGS */}
      <Section title="Our Offerings">
        <div className="stack">
          <Card className="offerCard">
            <div className="offerCard__media">
              <div className="offerCard__imagePlaceholder">Image</div>
            </div>
            <div className="offerCard__content">
              <h3 className="offerCard__title">Skincare Intelligence</h3>
              <p className="offerCard__text">
                Our flagship AI-powered skincare platform combines advanced
                computer vision with dermatological expertise to deliver
                personalized skin analysis, product recommendations, and routine
                optimization.
              </p>
              <Button variant="primary">Explore Skincare AI</Button>
            </div>
          </Card>

          <Card className="offerCard offerCard--reverse">
            <div className="offerCard__media">
              <div className="offerCard__imagePlaceholder">Image</div>
            </div>
            <div className="offerCard__content">
              <h3 className="offerCard__title">Personal AI Assistant</h3>
              <p className="offerCard__text">
                Experience the future of personalized assistance with our
                AI-powered virtual companion. From managing your daily schedule
                to answering complex questions, it adapts to you over time.
              </p>
              <Button variant="primary">Meet Your AI Assistant</Button>
            </div>
          </Card>

          <Card className="offerCard">
            <div className="offerCard__media">
              <div className="offerCard__imagePlaceholder">Image</div>
            </div>
            <div className="offerCard__content">
              <h3 className="offerCard__title">Custom Routines</h3>
              <p className="offerCard__text">
                Build and automate personalized routines to fit your lifestyle
                perfectly. Whether it’s skincare, fitness, productivity, or
                wellness, it evolves with you.
              </p>
              <Button variant="primary">Create Your Routine</Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* DEFENSE-GRADE STRIP */}
      <section className="band band--mint">
        <div className="container band__inner">
          <h2 className="band__title">Built on Defense-Grade Technology</h2>
          <p className="band__text">
            Our platform is powered by HONDO, an enterprise-grade AI
            infrastructure developed with defense-adjacent engineering
            principles for security, reliability, and performance.
          </p>
          <Button variant="primary">Discover HONDO</Button>
        </div>
      </section>

      {/* WHY TRUST */}
      <Section title="Why Trust PymSphere">
        <div className="grid grid--5">
          {[
            "Years of Experience",
            "Defense-Adjacent Engineering",
            "Enterprise Systems",
            "Mission-Tested AI",
            "Veteran Owned & Operated",
          ].map((label) => (
            <Card key={label} className="iconCard">
              <div className="iconCard__icon" aria-hidden="true" />
              <div className="iconCard__label">{label}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA STRIP */}
      <section className="ctaStrip">
        <div className="container ctaStrip__inner">
          <h3 className="ctaStrip__title">Ready to Transform Your Skincare?</h3>
          <Button variant="secondary">Get Started Today</Button>
        </div>
      </section>
    </div>
  );
}
