export default function Header() {
  return (
    <header style={{ padding: "16px 0" }}>
      <div
        className="container"
        style={{
          display: "flex",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: 700 }}>PymSphere</div>
        <nav style={{ display: "flex", gap: 16 }}>
          <a href="#top">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
