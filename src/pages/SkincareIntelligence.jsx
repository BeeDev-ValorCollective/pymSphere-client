import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import "./styles/SkincareIntelligence.css";

export default function SkincareIntelligence() {
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
              Transform your skincare routine with personalized AI analysis,
              smart recommendations, and progress tracking designed specifically
              for your unique skin journey.
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
              <div className="skincareHero__imagePlaceholder">Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THE APP DOES (white section) */}
      <section className="skincareSection skincareSection--white">
        <div className="container">
          <h2 className="skincareH2">What The App Does</h2>

          <div className="skincareGrid skincareGrid--3">
            {[
              {
                title: "AI Skin Analysis",
                text: "Advanced computer vision analyzes your skin condition with precision, identifying concerns and tracking changes over time.",
              },
              {
                title: "Smart Recommendations",
                text: "Get personalized product and routine suggestions powered by AI that learns from your skin’s unique needs.",
              },
              {
                title: "Progress Tracking",
                text: "Visualize your transformation with detailed analytics, photo comparisons, and milestone achievements.",
              },
            ].map((item) => (
              <Card key={item.title} className="skincareFeatureCard">
                <div className="skincareFeatureCard__icon" aria-hidden="true" />
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
            {[
              {
                step: "1",
                title: "Capture Your Skin",
                text: "Take a quick selfie using our guided camera system for accurate AI analysis of your skin condition.",
              },
              {
                step: "2",
                title: "AI Analysis",
                text: "Our advanced AI processes your image, identifying skin type, concerns, and areas for improvement.",
              },
              {
                step: "3",
                title: "Get Your Plan",
                text: "Receive personalized product recommendations and a custom routine tailored to your unique needs.",
              },
            ].map((item) => (
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
              <div className="skincareSplit__imagePlaceholder">Image</div>
            </div>
          </div>

          <div className="skincareSplit__content">
            <h2 className="skincareSplit__title">
              Your Personal Skincare Assistant
            </h2>

            <div className="skincareSplit__block">
              <h4 className="skincareSplit__h4">Detailed Skin Insights</h4>
              <p className="skincareSplit__p">
                Understand your skin’s condition with comprehensive analysis
                including texture, hydration, and problem areas.
              </p>
            </div>

            <div className="skincareSplit__block">
              <h4 className="skincareSplit__h4">Track Your Progress</h4>
              <p className="skincareSplit__p">
                See your skin improve over time with before-and-after
                comparisons and detailed progress metrics.
              </p>
            </div>

            <div className="skincareSplit__block">
              <h4 className="skincareSplit__h4">Smart Reminders</h4>
              <p className="skincareSplit__p">
                Never miss a step with intelligent notifications that adapt to
                your schedule and routine.
              </p>
            </div>

            <div className="skincareSplit__block">
              <h4 className="skincareSplit__h4">Product Matching</h4>
              <p className="skincareSplit__p">
                Discover products perfectly suited to your skin type with
                AI-powered recommendations from trusted brands.
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
