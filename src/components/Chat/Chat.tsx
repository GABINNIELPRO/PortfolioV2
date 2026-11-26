import { useEffect, useRef, useState, type FormEvent } from "react"
import { askToRAG } from "../../lib/api"
import Mascot from "./Mascot"
import "./Chat.css"

type Msg = { role: "me" | "bot" | "err"; text: string }

export default function Chat() {
  const [open, setOpen] = useState(false)
  const [q, setQ] = useState("")
  const [msgs, setMsgs] = useState<Msg[]>([])
  const [loading, setLoading] = useState(false)
  const [speaking, setSpeaking] = useState(false) // la mascotte continue de parler un peu après la réponse
  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const speakTimer = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" })
  }, [msgs, loading])

  useEffect(() => () => window.clearTimeout(speakTimer.current), [])

  // Fait parler la mascotte pendant une durée proportionnelle à la longueur de la réponse
  function speakFor(text: string) {
    window.clearTimeout(speakTimer.current)
    setSpeaking(true)
    const duration = Math.min(4000, 800 + text.length * 15)
    speakTimer.current = window.setTimeout(() => setSpeaking(false), duration)
  }

  async function send(e: FormEvent) {
    e.preventDefault()
    const text = q.trim()
    if (!text || loading) return
    setQ("")
    setMsgs((m) => [...m, { role: "me", text }])
    setLoading(true)
    try {
      const { answer } = await askToRAG(text)
      const reply = answer || "No answer found."
      setMsgs((m) => [...m, { role: "bot", text: reply }])
      speakFor(reply)
    } catch (err) {
      setMsgs((m) => [...m, { role: "err", text: err instanceof Error ? err.message : "Something went wrong." }])
    } finally {
      setLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <div className={`mc ${open ? "mc--open" : ""}`}>
      {open && (
        <div className="mc__box" onKeyDown={(e) => e.key === "Escape" && setOpen(false)}>
          <div className="mc__list" ref={listRef}>
            {msgs.length === 0 && (
              <p className="mc__hint">Hi 👋 Ask me anything about my projects or experience.</p>
            )}
            {msgs.map((m, i) => (
              <p key={i} className={`mc__msg mc__msg--${m.role}`}>{m.text}</p>
            ))}
            {loading && (
              <p className="mc__msg mc__msg--bot mc__dots"><i /><i /><i /></p>
            )}
          </div>
          <form className="mc__form" onSubmit={send}>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Type your question…"
              aria-label="Message"
            />
          </form>
        </div>
      )}

      <button
        className="mc__avatar"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
      >
        <Mascot talking={loading || speaking} size={80} />
      </button>
    </div>
  )
}