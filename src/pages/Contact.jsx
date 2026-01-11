import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="container section">
      <h1>Get In Touch</h1>
      <p className="muted">Ways to reach us + message form + location map.</p>

      <div style={{ marginTop: 24 }}>
        <ContactForm />
      </div>
    </div>
  );
}
