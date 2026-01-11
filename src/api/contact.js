const API_BASE = import.meta.env.VITE_API_BASE_URL;

export async function sendContactForm(data) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Failed to send message");
  }

  return res.json();
}
