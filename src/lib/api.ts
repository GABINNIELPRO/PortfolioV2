/*const RAG_BASE = import.meta.env.VITE_RAG_BASE as string | undefined*/
const RAG_BASE = "https://portfolio-agent-api-bbn1.onrender.com"
export async function askToRAG(query: string) {
  if (!RAG_BASE) {
    throw new Error("VITE_RAG_BASE (URL du backend) est manquant !")
  }

  const res = await fetch(`${RAG_BASE}/ask/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  })

  const raw = await res.text()
  if (!res.ok) {
    throw new Error(`Erreur API RAG (${res.status}) — ${raw.slice(0, 300) || "Réponse vide"}`)
  }

  try {
    const data = JSON.parse(raw) as { answer: string }
    return { answer: data.answer ?? "" }
  } catch (err) {
    console.error("Parse JSON Error:", err)
    throw new Error(`Réponse backend invalide : ${raw.slice(0, 300)}`)
  }
}
