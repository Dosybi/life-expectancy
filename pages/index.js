import Head from 'next/head'
import { useState, useEffect } from 'react'
import moment from 'moment'

import Description from '../components/Description'
import Grid from '../components/Grid'
import Inputs from '../components/Inputs'
import GeneralInfo from '../components/GeneralInfo'

import { data } from '../data'

export default function Home() {
  const [numberOfYears, setNumberOfYears] = useState(0)
  const [currentYear, setCurrentYear] = useState()
  const [gender, setGender] = useState('male')
  const [birthday, setBirthday] = useState(moment().format('yyyy-MM-DD'))
  const [country, setCountry] = useState('Казахстан')
  const [generalInfo, setGeneralInfo] = useState({
    gender: 'male',
    age: 70,
  })

  const handleBirthdayChange = (date) => {
    setBirthday(date)
  }

  const handleCountryChange = (country) => {
    setCountry(country)
  }

  const handleGenderChange = (gender) => {
    setGender(gender)
  }

  useEffect(() => {
    setGeneralInfo({
      gender: gender,
      age: data.filter((entry) => entry.country === country)[0][gender],
    })
  }, [gender, country])

  useEffect(() => {
    setCurrentYear(moment(moment()._d).diff(birthday, 'years'))
    setNumberOfYears(Math.ceil(generalInfo.age))
  }, [gender, birthday, generalInfo, numberOfYears])

  return (
    <div className="mx-auto max-w-4xl p-8">
      <Head>
        <title>Твоя жизнь в неделях</title>
        <meta name="description" content="Твоя жизнь в неделях" />
      </Head>
      <Description />
      <Inputs
        handleBirthdayChange={handleBirthdayChange}
        handleCountryChange={handleCountryChange}
        handleGenderChange={handleGenderChange}
      />
      <GeneralInfo {...generalInfo} birthday={birthday} />
      <Grid number={numberOfYears} currentYear={currentYear} />
    </div>
  )
}
