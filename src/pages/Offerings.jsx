import { useSiteData, useSiteSection, useSiteValue } from '../customHooks/Context'

import Button from "../components/Button";
import "./styles/Offerings.css";


export default function Offerings() {
    const { loading, error } = useSiteData()
    const offerings = useSiteSection("offerings")
    const images = useSiteValue("images", {})
    const offeringImages = images?.[0]?.offerings ?? []

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
              <div className="offeringsImage__placeholder">
                <img src={offeringImages[0].img} alt={offeringImages[0].name} />
              </div>
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
                    <div className="offeringsImage__placeholder">
                      <img src={item.img} alt={item.title} />
                    </div>
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
