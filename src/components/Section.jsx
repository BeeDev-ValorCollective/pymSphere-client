export default function Section({ title, subtitle, children, id, variant }) {
  const className = ["section", variant ? `section--${variant}` : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={className}>
      <div className="container">
        {(title || subtitle) && (
          <header className="section__header">
            {title && <h2 className="section__title">{title}</h2>}
            {subtitle && <p className="section__subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
