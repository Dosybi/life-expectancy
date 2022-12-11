import moment from 'moment'
import { useState } from 'react'

import { data } from '../data'

const Inputs = ({
  handleBirthdayChange,
  handleCountryChange,
  handleGenderChange,
}) => {
  const [toggledGender, setToggledGender] = useState('male')

  return (
    <div className="mb-8 max-w-lg gap-2 rounded-xl bg-gray-100 p-8">
      <div className="mb-4 flex flex-col">
        <input
          className="mb-4 h-8 w-2/3 cursor-pointer rounded-lg border p-4"
          type="date"
          defaultValue={moment().format('yyyy-MM-DD')}
          onChange={(e) => {
            handleBirthdayChange(e.target.value)
          }}
        ></input>
        <select
          className="h-8 w-2/3 cursor-pointer rounded-lg border"
          name="countries"
          defaultValue={'Казахстан'}
          onChange={(e) => {
            handleCountryChange(e.target.value)
          }}
        >
          {data.map((country) => {
            return (
              <option value={country.country} key={country.country}>
                {country.country}
              </option>
            )
          })}
        </select>
      </div>
      <div className="flex gap-2">
        <button
          className={`h-8 w-12 rounded-lg text-white ${
            toggledGender === 'male' ? 'bg-blue-500' : 'bg-gray-400'
          }`}
          name="male"
          onClick={() => {
            handleGenderChange('male')
            setToggledGender('male')
          }}
        >
          М
        </button>
        <button
          className={`h-8 w-12 rounded-lg text-white ${
            toggledGender === 'female' ? 'bg-blue-500' : 'bg-gray-400'
          }`}
          name="female"
          onClick={() => {
            handleGenderChange('female')
            setToggledGender('female')
          }}
        >
          Ж
        </button>
      </div>
    </div>
  )
}

export default Inputs
