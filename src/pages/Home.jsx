import { useSiteData, useSiteSection, useSiteValue } from '../customHooks/Context'
import { NavLink } from "react-router-dom";

import Section from "../components/Section"
import Card from "../components/Card"
import Button from "../components/Button"
import "./styles/Home.css"

import HomeHero from '../assets/HomeHero.jpg'


export default function Home() {
    const { loading, error } = useSiteData()
    const images = useSiteValue("images", {})
    const appDoes = useSiteSection("app")
    const whyTrust = useSiteSection("trust")
    const homeImages = images?.[0]?.home ?? [] 

    if (loading) return <p>Loading…</p>
    if (error) return <p>Error loading data: {error}</p>

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
              <Button variant="primary" disabled>Start Your Journey</Button>
              <Button variant="secondary"><NavLink to="/skincare-intelligence">Learn More</NavLink></Button>
            </div>
          </div>

          <div className="hero__media">
            <div className="hero__imageFrame" aria-label="Skincare hero image">
              <div className="hero__imagePlaceholder">
                <img className="heroImg" src={HomeHero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE APP DOES */}
      <Section title="What The App Does">
        <div className="grid grid--4">
         {appDoes.map((i) => (
            <Card key={i.id} className="iconCard">
              <div className="iconCard__icon" aria-hidden="true">
                <img src={i.img} alt={i.label} />
              </div>
              <div className="iconCard__label">{i.label}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* OUR OFFERINGS */}
      <Section title="Our Offerings">
        <div className="stack">
          <Card className="offerCard">
            <div className="offerCard__media">
              <div className="offerCard__imagePlaceholder">
                <img src={homeImages[0].img} alt={homeImages[0].name} />
              </div>
            </div>
            <div className="offerCard__content">
              <h3 className="offerCard__title">Skincare Intelligence</h3>
              <p className="offerCard__text">
                Our flagship AI-powered skincare platform uses advanced computer vision to provide personalized insights into your skin's appearance, along with tailored product recommendations and routine suggestions to enhance your daily glow.
              </p>
              {/* <Button variant="primary">Explore Skincare AI</Button> */}
            </div>
          </Card>

          <Card className="offerCard offerCard--reverse">
            <div className="offerCard__media">
              <div className="offerCard__imagePlaceholder">
                <img src={homeImages[1].img} alt={homeImages[1].name} />
              </div>
            </div>
            <div className="offerCard__content">
              <h3 className="offerCard__title">Personal AI Assistant</h3>
              <p className="offerCard__text">
                Discover personalized AI assistance with our virtual companion. It can help with everyday tasks like schedule reminders and answering questions, learning your preferences over time to provide more tailored responses.
              </p>
              {/* <Button variant="primary">Meet Your AI Assistant</Button> */}
            </div>
          </Card>

          <Card className="offerCard">
            <div className="offerCard__media">
              <div className="offerCard__imagePlaceholder">
                <img src={homeImages[2].img} alt={homeImages[2].name} />
              </div>
            </div>
            <div className="offerCard__content">
              <h3 className="offerCard__title">Custom Routines</h3>
              <p className="offerCard__text">
                Create personalized skincare routines that adapt to your daily lifestyle. Our AI learns your preferences over time to help enhance your appearance and glow.
              </p>
              {/* <Button variant="primary">Create Your Routine</Button> */}
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
          <Button variant="primary"><NavLink to="/offerings">Discover HONDO</NavLink></Button>
        </div>
      </section>

      {/* WHY TRUST */}
      <Section title="Why Trust PymSphere">
        <div className="grid grid--5">
          {whyTrust.map((i) => (
            <Card key={i.id} className="iconCard">
              <div className="iconCard__icon" aria-hidden="true">
                <img src={i.img} alt={i.label} />
              </div>
              <div className="iconCard__label">{i.label}</div>
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
