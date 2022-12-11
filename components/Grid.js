const GridCell = ({ color }) => {
  return (
    <div
      className={`h-2 max-w-[8px] rounded-full border-[0.5px] border-gray-800 ${color}`}
    ></div>
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

const Grid = ({ number, currentWeek }) => {
  const numberOfCells = [...Array(number).keys()]
  return (
    <main>
      {currentWeek ? (
        <>
          <Legend />
          <div className="-mx-7 grid grid-cols-52 gap-0.5 gap-y-1 md:m-0">
            {numberOfCells.map((cell) => {
              return (
                <GridCell
                  key={cell}
                  color={
                    cell < 364
                      ? ''
                      : cell >= 364 && cell < 936 && cell !== currentWeek
                      ? 'bg-amber-300'
                      : cell >= 936 && cell < 1144 && cell !== currentWeek
                      ? 'bg-green-300'
                      : cell >= 1144 && cell < 3380 && cell !== currentWeek
                      ? 'bg-blue-300'
                      : cell === currentWeek
                      ? 'bg-slate-900'
                      : 'bg-pink-300'
                  }
                />
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
