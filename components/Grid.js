import { MdChildFriendly } from 'react-icons/md'
import { MdBackpack } from 'react-icons/md'
import { MdSchool } from 'react-icons/md'
import { MdWork } from 'react-icons/md'
import { GiMedicines } from 'react-icons/gi'
import { BsFillPersonFill } from 'react-icons/bs'

const GridCell = ({ color, icon, number, userAge }) => {
  return (
    <div
      className={`tooltip ${number - 1 === userAge ? 'tooltip-warning' : ''}`}
      data-tip={
        number <= 6
          ? 'Раннее детство'
          : number >= 7 && number < 18 && number - 1 !== userAge
          ? 'Школа'
          : number >= 18 && number < 22 && number - 1 !== userAge
          ? 'Университет'
          : number >= 22 && number < 55 && number - 1 !== userAge
          ? 'Взрослая жизнь'
          : number >= 55 && number - 1 !== userAge
          ? 'Пенсия'
          : number - 1 === userAge
          ? 'Сейчас ты тут'
          : ''
      }
    >
      <div
        className={`relative flex h-10 items-center justify-center rounded-sm border-gray-800 text-2xl ${color}`}
      >
        <div className="absolute -top-2 left-0 text-[0.5rem] text-gray-500">
          {number}
        </div>
        {icon}
      </div>
    </div>
  )
}

const Grid = ({ number, currentYear }) => {
  const numberOfCells = [...Array(number).keys()]
  const userAge = currentYear - 1
  return (
    <main className="mx-auto w-full bg-white">
      {currentYear ? (
        <>
          <div className="m-0 mx-auto grid w-full grid-cols-10 gap-1 gap-y-1 p-0">
            {numberOfCells.map((cell) => {
              return (
                <>
                  <GridCell
                    key={cell}
                    number={cell + 1}
                    userAge={userAge}
                    color={
                      cell < 6
                        ? 'bg-green-100'
                        : cell >= 6 && cell < 17 && cell !== userAge
                        ? 'bg-green-200'
                        : cell >= 17 && cell < 21 && cell !== userAge
                        ? 'bg-green-300'
                        : cell >= 21 && cell < 54 && cell !== userAge
                        ? 'bg-green-400'
                        : cell === userAge
                        ? ''
                        : 'bg-green-500'
                    }
                    icon={
                      cell === 0 ? (
                        <MdChildFriendly />
                      ) : cell === 6 ? (
                        <MdBackpack />
                      ) : cell === 17 ? (
                        <MdSchool />
                      ) : cell === 21 ? (
                        <MdWork />
                      ) : cell === 54 ? (
                        <GiMedicines />
                      ) : cell === userAge ? (
                        <BsFillPersonFill />
                      ) : null
                    }
                  />
                </>
              )
            })}
          </div>
        </>
      ) : (
        <></>
      )}
    </main>
  )
}

export default Grid
