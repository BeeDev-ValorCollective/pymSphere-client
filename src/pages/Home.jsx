import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div id="top">
      <section className="section">
        <div className="container">
          <h1 style={{ margin: 0 }}>PymSphere</h1>
          <p style={{ color: "var(--muted)", maxWidth: 680 }}></p>
        </div>
      </section>

      <section id="features" className="section">
        <div className="container">
          <h2>Features</h2>
          <p style={{ color: "var(--muted)" }}>Placeholder</p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2>Contact</h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
