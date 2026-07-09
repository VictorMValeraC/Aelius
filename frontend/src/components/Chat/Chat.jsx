import { useState } from 'react'
import { analyzeMessage } from '../../services/cognitiveEngine'

function Chat() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    if (!message.trim()) {
      return
    }

    const analysis = analyzeMessage(message)

const newMessage = {
  id: crypto.randomUUID(),
  text: message.trim(),
  createdAt: new Date().toISOString(),
  analysis,
}

setMessages([...messages, newMessage])
setMessage('')

    setMessages([...messages, newMessage])
    setMessage('')
  }

  return (
    <section className="chat">
      <header className="chat-header">
        <h1>Buenos días, Víctor.</h1>
        <p>¿En qué quieres avanzar hoy?</p>
      </header>

      <div className="chat-content">
        {messages.length === 0 ? (
          <p>Aún no tenemos conversaciones.</p>
        ) : (
          <ul className="message-list">
            {messages.map((item) => (
              <li key={item.id} className="message-item">
                <p>{item.text}</p>

{item.analysis.tasks.length > 0 && (
  <div className="analysis-card">
    <strong>Aelius encontró posibles tareas:</strong>

    <ul>
      {item.analysis.tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  </div>
)}
              </li>
            ))}
          </ul>
        )}
      </div>

      <form className="chat-input" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe una tarea, idea o preocupación..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />

        <button type="submit">Compartir</button>
      </form>
    </section>
  )
}

export default Chat