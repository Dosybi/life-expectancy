import moment from 'moment'

const GeneralInfo = ({ gender, age, birthday }) => {
  return (
    <div className="mb-8 max-w-lg">
      {gender && age && birthday !== moment().format('yyyy-MM-DD') && (
        <p>{`Средняя продолжительность жизни ${
          gender === 'male' ? 'мужчин' : 'женщин'
        } в твоей стране — ${Math.ceil(age)} лет`}</p>
      )}
    </div>
  )
}

export default GeneralInfo
