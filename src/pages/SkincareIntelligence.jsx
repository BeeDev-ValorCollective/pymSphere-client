import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import "./styles/SkincareIntelligence.css";

import { useSiteData, useSiteSection, useSiteValue } from '../customHooks/Context'

export default function SkincareIntelligence() {
  const { loading, error } = useSiteData()
  const skincareApp = useSiteSection("skincareApp")
  const howItWorks = useSiteSection("howItWorks")
  const images = useSiteValue("images", {})
  const skincareImages = images?.[0]?.skincare ?? []


  if (loading) return <p>Loading…</p>
  if (error) return <p>Error loading data: {error}</p>

  return (
    <div className="skincare">
      {/* HERO */}
      <section className="skincareHero">
        <div className="container skincareHero__inner">
          <div className="skincareHero__content">
            <h1 className="skincareHero__title">
              AI-Powered Skincare <br />
              Intelligence
            </h1>

            <p className="skincareHero__subtitle">
              Enhance your daily skincare routine with personalized AI insights into your skin's appearance,  texture, and tone. Enjoy tailored product suggestions, visual glow tracking, and routine ideas  designed to support your unique preferences and lifestyle—all through smart, adaptive  technology that helps make consistent skincare effortless and enjoyable. 
            </p>

            <div className="skincareHero__actions">
              <Button variant="secondary" className="skincareHero__btnPrimary">
                Start Free Analysis
              </Button>
              <Button variant="secondary" className="skincareHero__btnGhost">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="skincareHero__media">
            <div className="skincareHero__imageFrame" aria-label="Hero image">
              <div className="skincareHero__imagePlaceholder">
                <img src={skincareImages[0].img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE APP DOES (white section) */}
      <section className="skincareSection skincareSection--white">
        <div className="container">
          <h2 className="skincareH2">What The App Does</h2>

          <div className="skincareGrid skincareGrid--3">
            {skincareApp.map((item) => (
              <Card key={item.title} className="skincareFeatureCard">
                <div className="skincareFeatureCard__icon" aria-hidden="true">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3 className="skincareFeatureCard__title">{item.title}</h3>
                <p className="skincareFeatureCard__text">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (cream section) */}
      <section className="skincareSection skincareSection--cream">
        <div className="container">
          <h2 className="skincareH2">How It Works</h2>

          <div className="skincareGrid skincareGrid--3">
            {howItWorks.map((item) => (
              <Card key={item.step} className="skincareStepCard">
                <div className="skincareStepCard__badge">{item.step}</div>
                <h3 className="skincareStepCard__title">{item.title}</h3>
                <p className="skincareStepCard__text">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT SECTION */}
      <section className="skincareSection skincareSection--white">
        <div className="container skincareSplit">
          <div className="skincareSplit__media">
            <div className="skincareSplit__imageFrame" aria-label="App image">
              <div className="skincareSplit__imagePlaceholder">
                <img src={skincareImages[1].img} alt={skincareImages[1].name} />
              </div>
            </div>
          </div>

          <div className="skincareSplit__content">
            <h2 className="skincareSplit__title">
              Your Personal Skincare Assistant
            </h2>

            <div className="skincareSplit__block">
              <h4 className="skincareSplit__h4">Skincare Companion</h4>
              <p className="skincareSplit__p">
                Friendly AI insights into your skin's appearance, texture, and tone—offering gentle, personalized  suggestions to support your daily glow. 
              </p>
            </div>

            <div className="skincareSplit__block">
              <h4 className="skincareSplit__h4">Track Your Glow</h4>
              <p className="skincareSplit__p">
                Follow your visual progress over time with photo comparisons and appearance insights that  make celebrating consistent routines fun and motivating. 
              </p>
            </div>

            <div className="skincareSplit__block">
              <h4 className="skincareSplit__h4">Smart Reminders</h4>
              <p className="skincareSplit__p">
                Stay on track with gentle notifications that adapt to your schedule and preferences, helping  make daily skincare habits effortless. 
              </p>
            </div>

            <div className="skincareSplit__block">
              <h4 className="skincareSplit__h4">Product Matching</h4>
              <p className="skincareSplit__p">
                Explore product ideas tailored to your preferences with AI-powered recommendations from  trusted brands, including transparent matches for your existing favorites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HONDO BAND (pink band) */}
      <section className="skincareHondo">
        <div className="container skincareHondo__inner">
          <h2 className="skincareHondo__title">Powered by HONDO AI Engine</h2>
          <p className="skincareHondo__text">
            Our skincare intelligence platform is built on HONDO, a
            defense-grade AI infrastructure that delivers military-level
            precision and reliability. Experience the same advanced technology
            used in mission-critical applications, now optimized for your
            personal skincare journey.
          </p>
          <Button variant="secondary" className="skincareHondo__btn">
            Learn About HONDO
          </Button>
        </div>
      </section>

      {/* CTA STRIP (teal) */}
      <section className="skincareCta">
        <div className="container skincareCta__inner">
          <h3 className="skincareCta__title">Ready to Transform Your Skin?</h3>
          <Button variant="secondary" className="skincareCta__btn">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
}
