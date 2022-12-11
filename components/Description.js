const description = {
  title: 'Твоя жизнь в неделях',
  text: 'Укажи день рождения, пол, страну, в которой живёшь — и приготовься к экзистенциальному кризису.',
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
