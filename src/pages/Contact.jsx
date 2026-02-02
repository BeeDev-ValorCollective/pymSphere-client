import Section from "../components/Section";
import Card from "../components/Card";
import Button from "../components/Button";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      {/* HERO */}
      <section className="contactHero">
        <div className="container contactHero__inner">
          <h1 className="contactHero__title">Get In Touch</h1>
          <p className="contactHero__subtitle">
            Ready to discover how innovative AI can enhance your daily experiences? Our team is here to  discuss your unique challenges and explore how PymSphere can deliver personalized, reliable  solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* WAYS TO REACH US */}
      <Section
        title="Ways to Reach Us"
        className="contactSection contactSection--white"
      >
        <div className="contactGrid contactGrid--3">
          <Card className="contactCard">
            <div className="contactCard__icon" aria-hidden="true">
              ✉️
            </div>
            <h3 className="contactCard__title">Email Us</h3>
            <p className="contactCard__text">
              For general inquiries and support
            </p>
            <a
              className="contactCard__link"
              href="mailto:contact@pymsphere.com"
            >
              contact@pymsphere.com
            </a>
          </Card>

          <Card className="contactCard">
            <div className="contactCard__icon" aria-hidden="true">
              📞
            </div>
            <h3 className="contactCard__title">Call Us</h3>
            <p className="contactCard__text">Speak directly with our team</p>
            <a className="contactCard__link" href="tel:+15551234567">
              +1 (555) 123-4567
            </a>
          </Card>

          <Card className="contactCard">
            <div className="contactCard__icon" aria-hidden="true">
              📍
            </div>
            <h3 className="contactCard__title">Visit Us</h3>
            <p className="contactCard__text">9:00am - 5:30pm</p>
            <div className="contactCard__link">San Francisco, CA</div>
          </Card>
        </div>
      </Section>

      {/* SEND MESSAGE */}
      <section className="contactSplit">
        <div className="container contactSplit__inner">
          <div className="contactSplit__copy">
            <h2 className="contactSplit__title">Send Us a Message</h2>
            <p className="contactSplit__text">
              Whether you&#39;re interested in our AI platforms, need technical
              support, or want to explore partnership opportunities, we&#39;re
              here to help. Fill out the form and our team will get back to you
              within 24 hours.
            </p>
          </div>

          <Card className="contactFormCard">
            <form className="contactForm" onSubmit={(e) => e.preventDefault()}>
              <div className="contactForm__grid">
                <label className="field">
                  <span className="srOnly">Your Name</span>
                  <input
                    className="input"
                    type="text"
                    placeholder="Your Name"
                  />
                </label>

                <label className="field">
                  <span className="srOnly">Email Address</span>
                  <input
                    className="input"
                    type="email"
                    placeholder="Email Address"
                  />
                </label>

                <label className="field">
                  <span className="srOnly">Company Name</span>
                  <input
                    className="input"
                    type="text"
                    placeholder="Company Name"
                  />
                </label>

                <label className="field">
                  <span className="srOnly">Phone Number</span>
                  <input
                    className="input"
                    type="tel"
                    placeholder="Phone Number"
                  />
                </label>
              </div>

              <label className="field field--full">
                <span className="srOnly">Subject</span>
                <input className="input" type="text" placeholder="Subject" />
              </label>

              <div className="contactForm__actions">
                <Button variant="primary" className="contactForm__btn">
                  Send Message
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* LOCATION */}
      <Section
        title="Our Location"
        className="contactSection contactSection--white"
      >
        <Card className="locationCard">
          <div className="locationCard__map" role="img" aria-label="World map">
            <div className="locationCard__placeholder">Map Image</div>
          </div>
        </Card>
      </Section>
    </div>
  );
}
