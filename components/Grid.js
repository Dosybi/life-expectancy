import { MdChildFriendly } from 'react-icons/md'
import { MdBackpack } from 'react-icons/md'
import { MdSchool } from 'react-icons/md'
import { MdWork } from 'react-icons/md'
import { GiMedicines } from 'react-icons/gi'
import { BsFillPersonFill } from 'react-icons/bs'

const GridCell = ({ color, icon }) => {
  return (
    <div
      className={`h-10 w-10 rounded-sm border-gray-800 ${color} flex items-center justify-center text-2xl`}
    >
      {icon}
    </div>
  )
}

const Legend = () => {
  return (
    <>
      <div className="text-xs">
        Одна строка — это один год, ячейка — неделя.
      </div>
      <div className="flex content-center">
        <div className="mt-1 h-2 w-2 rounded-full border-[0.5px] border-gray-800"></div>
        <div className="ml-2 text-xs">раннее детство</div>
      </div>
      <div className="flex content-center">
        <div className="mt-1 h-2 w-2 rounded-full border-[0.5px] border-gray-800 bg-amber-300"></div>
        <div className="ml-2 text-xs">школа</div>
      </div>
      <div className="flex content-center">
        <div className="mt-1 h-2 w-2 rounded-full border-[0.5px] border-gray-800 bg-green-300"></div>
        <div className="ml-2 text-xs">университет</div>
      </div>
      <div className="flex content-center">
        <div className="mt-1 h-2 w-2 rounded-full border-[0.5px] border-gray-800 bg-blue-300"></div>
        <div className="ml-2 text-xs">взрослая жизнь</div>
      </div>
      <div className="flex content-center">
        <div className="mt-1 h-2 w-2 rounded-full border-[0.5px] border-gray-800 bg-pink-300"></div>
        <div className="ml-2 text-xs">пенсия</div>
      </div>
      <div className="mb-4 flex content-center">
        <div className="mt-1 h-2 w-2 rounded-full border-[0.5px] border-gray-800 bg-slate-900"></div>
        <div className="ml-2 text-xs">текущая неделя</div>
      </div>
    </>
  )
}

const Grid = ({ number, currentYear }) => {
  const numberOfCells = [...Array(number).keys()]
  return (
    <main>
      {currentYear ? (
        <>
          {/* <Legend /> */}
          <div className="flex flex-wrap gap-0.5 gap-y-1 md:m-0">
            {numberOfCells.map((cell) => {
              return (
                <>
                  <GridCell
                    key={cell}
                    color={
                      cell < 7
                        ? 'bg-green-100'
                        : cell >= 7 && cell < 18 && cell !== currentYear
                        ? 'bg-green-200'
                        : cell >= 18 && cell < 22 && cell !== currentYear
                        ? 'bg-green-300'
                        : cell >= 22 && cell < 65 && cell !== currentYear
                        ? 'bg-green-400'
                        : cell === currentYear
                        ? ''
                        : 'bg-green-500'
                    }
                    icon={
                      cell === 0 ? (
                        <MdChildFriendly />
                      ) : cell === 7 ? (
                        <MdBackpack />
                      ) : cell === 18 ? (
                        <MdSchool />
                      ) : cell === 22 ? (
                        <MdWork />
                      ) : cell === 65 ? (
                        <GiMedicines />
                      ) : cell === currentYear ? (
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
