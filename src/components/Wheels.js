import React from 'react';

function Wheels(props) {
  return (
    <div className="bg-gray-100  rounded p-2">
      <h4 className="font-semibold text-lg mb-1">Колеса</h4>

      <div className="flex flex-row items-center justify-start">
        <input
          type="radio"
          id="tyresNo"
          className="border border-gray-500 px-2 py-1 mr-1 cursor-pointer"
          name="tyres"
          value="tyresNo"
          defaultChecked
          onChange={props.calculateWheels}
        />
        <label
          className="cursor-pointer leading-tight sm:leading-normal hover:bg-gray-200"
          htmlFor="tyresNo"
        >
          Не учитывать
        </label>
      </div>
      <div className="flex flex-row items-center justify-start">
        <input
          type="radio"
          id="tyres"
          className="border border-gray-500 px-2 py-1 mr-1 cursor-pointer"
          name="tyres"
          value="tyres"
          onChange={props.calculateWheels}
        />
        <label
          className="cursor-pointer leading-tight sm:leading-normal hover:bg-gray-200"
          htmlFor="tyres"
        >
          Комплект сезонных Шин
        </label>
      </div>
      <div className="flex flex-row items-center justify-start">
        <input
          type="radio"
          id="tyresPlus"
          className="border border-gray-500 px-2 py-1 mr-1 cursor-pointer"
          name="tyres"
          value="tyresPlus"
          onChange={props.calculateWheels}
        />
        <label
          className="cursor-pointer leading-tight sm:leading-normal hover:bg-gray-200"
          htmlFor="tyresPlus"
        >
          Комплект шин с дисками и датчиками
        </label>
      </div>

      <div className="text-xs py-1">
        <div className="flex flex-row items-start">
          <div className="px-1">
            <div className="w-4 h-4 rounded-full px-1 text-center bg-blue-300 text-white font-bold">
              i
            </div>
          </div>
          <div className="px-1 text-gray-600">
            {props.wheels === "tyresNo" && ` никаких затрат `}
            {props.wheels === "tyres" &&
              ` покупка комплекта сезонных шин в первый год и ежегодно (2 раза в год) затраты на шиномонтаж, балансировку снятие/установка`}
            {props.wheels === "tyresPlus" &&
              ` покупка комплекта сезонных шин, дисков, датчиков давления в первый год и ежегодно (2 раза в год) затраты на снятие/установку колес`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheels