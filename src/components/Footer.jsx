export default function Footer() {
  return (
    <footer style={{ padding: "32px 0", opacity: 0.85 }}>
      <div className="container">© {new Date().getFullYear()} PymSphere</div>
    </footer>
  );
}
