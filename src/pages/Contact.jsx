import Section from "../components/Section";
import Card from "../components/Card";
import "./styles/Contact.css";

import ContactForm from "../components/ContactForm";

export default function Contact() {

  const PhoneLink = import.meta.env.VITE_LINK_PHONE
  const PhoneDisplay = import.meta.env.VITE_DISPLAY_PHONE;
  const EmailLink = import.meta.env.VITE_MAIN_EMAIL;
  const Address01 = import.meta.env.VITE_ADDRESS_LINE1;
  const Address02 = import.meta.env.VITE_ADDRESS_LINE2;
  const Address03 = import.meta.env.VITE_ADDRESS_LINE3;

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
              href={`mailto:${ EmailLink }?subject=Request%20For%20Tax%20Services&body=Hello,%0A%0AI%20would%20like%20to%20inquire%20about...`}>{ EmailLink }</a>
          </Card>

          <Card className="contactCard">
            <div className="contactCard__icon" aria-hidden="true">
              📞
            </div>
            <h3 className="contactCard__title">Call Us</h3>
            <p className="contactCard__text">Speak directly with our team</p>
            <a className="contactCard__link" href={ PhoneLink }>{ PhoneDisplay }</a>
          </Card>

          <Card className="contactCard">
            <div className="contactCard__icon" aria-hidden="true">
              📍
            </div>
            <h3 className="contactCard__title">Visit Us</h3>
            <p className="contactCard__text">9:00am - 5:30pm</p>
            <div className="contactCard__link">{Address02}</div>
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

          <ContactForm />
        </div>
      </section>

      {/* LOCATION */}
      {/* <Section
        title="Our Location"
        className="contactSection contactSection--white"
      >
        <Card className="locationCard">
          <div className="locationCard__map" role="img" aria-label="World map">
            <div className="locationCard__placeholder">Map Image</div>
          </div>
        </Card>
      </Section> */}
    </div>
  );
}
