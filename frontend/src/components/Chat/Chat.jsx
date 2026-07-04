import { useState } from 'react'

function Chat() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  function handleSubmit(event) {
    event.preventDefault()

    if (!message.trim()) {
      return
    }

    const newMessage = {
      id: crypto.randomUUID(),
      text: message.trim(),
      createdAt: new Date().toISOString(),
    }

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
                {item.text}
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

        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}

export default Chat