export default function Card({ title, text, children, className = "" }) {
  return (
    <div className={`card ${className}`.trim()}>
      {title && <h3 className="card__title">{title}</h3>}
      {text && <p className="card__text">{text}</p>}
      {children}
    </div>
  );
}
