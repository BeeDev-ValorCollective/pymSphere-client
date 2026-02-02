import Button from "../components/Button";
import "./styles/Offerings.css";

const offerings = [
  {
    title: "Hondo OS",
    body: "Robust AI operating system engineered for high-reliability applications. Hondo provides  foundational infrastructure for intelligent systems, delivering strong security, performance, and  scalability. Designed for demanding environments where consistency and precision matter,  Hondo supports advanced AI across enterprise and consumer platforms with dependable,  intuitive technology. ",
    cta: "Learn More",
  },
  {
    title: "Applied Customer Intelligence",
    body: "Turn customer data into useful insights with our robust analytics platform. Using machine  learning, the system helps identify patterns, support personalized experiences, and improve  engagement across touchpoints. Designed for scalability, it processes large volumes of  interactions to provide timely information that supports business decisions and enhances  customer interactions.",
    cta: "Learn More",
  },
  {
    title: "AI & Machine Learning",
    body: "Advanced artificial intelligence and machine learning tools designed to address practical  challenges. Our team of experienced AI engineers and researchers builds custom models for  computer vision, natural language processing, pattern recognition, and adaptive systems. From  initial concepts to full deployment, we create AI solutions that support real-world applications  with reliable, user-focused results.",
    cta: "Learn More",
  },
  {
    title: "Applied Consumer Intelligence",
    body: "AI-powered tools designed for consumer goods companies to support supply chain  management, identify demand patterns, provide personalized product suggestions, and  enhance customer interactions with smart automation. Our platform integrates with existing  systems to offer useful insights that can help inform sales strategies, support cost management,  and improve operational efficiency throughout the product lifecycle.",
    cta: "Learn More",
  },
  {
    title: "Data Protection Systems",
    body: "Robust security infrastructure designed to help safeguard sensitive data. Our comprehensive  data protection platform combines advanced encryption, threat monitoring, and compliance  support to promote secure operations across various environments. Built with reliability and  performance in focus, our systems offer dependable protection for important information in  demanding settings.",
    cta: "Learn More",
  },
  {
    title: "Defense & Enterprise Systems",
    body: "Reliable systems engineered for demanding operational environments. Our enterprise solutions  provide precision automation, intelligent decision support, and consistent performance in high stakes settings. Built for scalability and security, our systems support advanced applications  across enterprise platforms with strong reliability and efficiency. ",
    cta: "Learn More",
  },
  {
    title: "Life Sciences AI",
    body: "Innovative artificial intelligence tools designed to support wellness and lifestyle applications.  Our platform uses machine learning and computer vision to provide insights into appearance  and patterns, offering personalized suggestions for daily routines. Built with strong emphasis on  privacy, accuracy, and user-focused design, our AI helps create approachable, adaptive  experiences that enhance everyday wellness. ",
    cta: "Learn More",
  },
  {
    title: "MILK Retail AI Platform",
    body: "Intelligent retail platform designed to help businesses better understand customer interactions  and shopping patterns. MILK uses computer vision and analytics to support store layout ideas,  personalized experiences, and engagement strategies. From inventory tracking to customer  insights, MILK provides useful information to inform retail decisions in physical and digital  environments. ",
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
              Innovative AI-powered skincare companion that uses advanced computer vision to provide  insights into your skin's appearance, texture, and tone. Enjoy personalized product suggestions, track your glow progress with visual insights, and discover tailored routine ideas—all supported  by smart machine learning that adapts to your preferences and daily lifestyle for effortless,  consistent results.

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
