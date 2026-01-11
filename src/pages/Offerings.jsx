import Button from "../components/Button";
import "./styles/Offerings.css";

const offerings = [
  {
    title: "Hondo OS",
    body: "Enterprise-grade AI operating system built on defense-adjacent engineering principles. HONDO provides the foundational infrastructure for mission-critical applications, delivering unparalleled reliability, security, and performance. Designed for environments where failure is not an option, HONDO powers intelligent systems across defense, enterprise, and consumer platforms with military-grade precision.",
    cta: "Learn More",
  },
  {
    title: "Applied Customer Intelligence",
    body: "Transform customer data into actionable insights with our advanced analytics platform. AI leverages machine learning to predict behavior, personalize experiences, and optimize engagement across every touchpoint. Built for enterprise scale, our system processes millions of interactions to deliver real-time intelligence that drives business growth and customer satisfaction.",
    cta: "Learn More",
  },
  {
    title: "AI & Machine Learning",
    body: "Cutting-edge artificial intelligence and machine learning solutions tailored to your specific challenges. Our team of AI researchers and engineers develop custom models for computer vision, natural language processing, predictive analytics, and autonomous systems. From proof-of-concept to production deployment, we deliver AI that solves real-world problems with measurable impact.",
    cta: "Learn More",
  },
  {
    title: "Consumer Goods Intelligence",
    body: "AI-powered solutions designed specifically for consumer goods companies. Optimize supply chains, predict demand patterns, personalize product recommendations, and enhance customer experiences with intelligent automation. Our platform integrates seamlessly with existing systems to deliver actionable insights that drive sales, reduce costs, and improve operational efficiency across the entire product lifecycle.",
    cta: "Learn More",
  },
  {
    title: "Data Protection Systems",
    body: "Defense-grade security infrastructure that safeguards your most sensitive data. Our comprehensive data protection platform combines advanced encryption, threat detection, and compliance management to ensure complete security across all environments. Built on principles tested in the most demanding scenarios, our systems protect with military-grade reliability and performance.",
    cta: "Learn More",
  },
  {
    title: "Defense & Enterprise Systems",
    body: "Mission-critical systems engineered for the most demanding operational environments. Our defense and enterprise solutions deliver precision automation, intelligent decision support, and performance where failures are not an option. Built for maximum reliability and built to scale across secure environments, our systems meet strict standards required in defense applications.",
    cta: "Learn More",
  },
  {
    title: "Life Sciences AI",
    body: "Advanced artificial intelligence solutions accelerating breakthroughs in healthcare and life sciences. Our platform combines deep learning with domain expertise to analyze medical imaging, predict patient outcomes, optimize clinical trials, and accelerate drug discovery. Built with the highest standards for accuracy and compliance, our AI empowers researchers and clinicians to make better decisions faster.",
    cta: "Learn More",
  },
  {
    title: "MILK Retail AI Platform",
    body: "Revolutionary retail intelligence platform that transforms how businesses understand and serve their customers. MILK combines computer vision, behavioral analytics, and predictive modeling to optimize store layouts, personalize shopping experiences, and maximize conversion rates. From inventory management to customer insights, MILK delivers actionable insights that drive measurable results in physical and digital retail environments.",
    cta: "Learn More",
  },
];

export default function Offerings() {
  return (
    <div className="offerings">
      {/* Page header */}
      <section className="offeringsHero">
        <div className="container offeringsHero__inner">
          <h1 className="offeringsHero__title">Our Offerings</h1>
          <p className="offeringsHero__subtitle">
            Intelligent AI-powered platforms engineered for defense, enterprise,
            and consumer applications—bringing military-grade technology to
            transform industries and enhance everyday experiences.
          </p>
        </div>
      </section>

      {/* Featured band */}
      <section className="offeringsFeature">
        <div className="container offeringsFeature__inner">
          <div className="offeringsFeature__content">
            <h2 className="offeringsFeature__title">Skincare Intelligence</h2>
            <p className="offeringsFeature__text">
              Revolutionary AI-powered skincare analysis that combines computer
              vision with dermatological expertise. Get personalized product
              recommendations, track your skin’s progress with detailed
              analytics, and receive custom routine optimization—all powered by
              advanced machine learning that understands your unique skin
              journey.
            </p>

            <Button variant="secondary" className="offeringsFeature__btn">
              Explore Skincare AI
            </Button>
          </div>

          <div className="offeringsFeature__media">
            <div className="offeringsImage offeringsImage--hero">
              <div className="offeringsImage__placeholder">Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Rows */}
      <section className="offeringsRows">
        <div className="container offeringsRows__inner">
          {offerings.map((item, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={item.title}
                className={`offeringsRow ${
                  reverse ? "offeringsRow--reverse" : ""
                }`}
              >
                <div className="offeringsRow__media">
                  <div className="offeringsImage">
                    <div className="offeringsImage__placeholder">Image</div>
                  </div>
                </div>

                <div className="offeringsRow__content">
                  <h3 className="offeringsRow__title">{item.title}</h3>
                  <p className="offeringsRow__text">{item.body}</p>
                  <Button variant="primary" className="offeringsRow__btn">
                    {item.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Capabilities strip */}
      <section className="offeringsCta">
        <div className="container offeringsCta__inner">
          <h3 className="offeringsCta__title">
            Request a Capabilities Briefing
          </h3>
          <Button variant="secondary" className="offeringsCta__btn">
            Contact Us Today
          </Button>
        </div>
      </section>
    </div>
  );
}
