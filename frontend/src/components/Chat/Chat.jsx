function Chat() {
  return (
    <section className="chat">
      <header className="chat-header">
        <h1>Buenos días, Víctor.</h1>
        <p>¿En qué quieres avanzar hoy?</p>
      </header>

      <div className="chat-content">
        <p>Aún no tenemos conversaciones.</p>
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Escribe una tarea, idea o preocupación..."
        />

        <button>Enviar</button>
      </div>
    </section>
  )
}

export default Chat