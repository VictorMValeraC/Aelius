export function analyzeMessage(text) {
  const cleanText = text.trim()

  if (!cleanText) {
    return {
      originalText: '',
      tasks: [],
      ideas: [],
      emotions: [],
    }
  }

  const taskIndicators = [
    'tengo que',
    'debo',
    'necesito',
    'hay que',
    'recordar',
    'pendiente',
    'hacer',
  ]

  const sentences = cleanText
    .split(/[.!?\n]+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean)

  const tasks = sentences
    .filter((sentence) =>
      taskIndicators.some((indicator) =>
        sentence.toLowerCase().includes(indicator),
      ),
    )
    .map((sentence) => ({
      id: crypto.randomUUID(),
      title: sentence,
      status: 'pending',
      source: 'conversation',
    }))

  return {
    originalText: cleanText,
    tasks,
    ideas: [],
    emotions: [],
  }
}