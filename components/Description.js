const description = {
  title: 'Твоя жизнь на одной картинке',
  text: 'Укажи день рождения, пол, страну, в которой живёшь — и на всякий случай приготовься к экзистенциальному кризису.',
}

const Description = () => {
  return (
    <header className="mb-8 max-w-lg">
      <h1 className="mb-2 text-2xl font-bold">{description.title}</h1>
      <p>{description.text}</p>
    </header>
  )
}

export default Description
