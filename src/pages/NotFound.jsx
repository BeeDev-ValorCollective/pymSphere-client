const Img404 = "https://httphive.com/framed/404.png"

export default function NotFound() {



  return (
    <div className="container_404" style={{ padding: "64px 0" }}>
      <h1><img src={Img404} alt="404" referrerPolicy="no-referrer" /></h1>
      <p style={{ color: "var(--muted)" }}>Page not found. Please check spelling</p>
    </div>
  );
}
