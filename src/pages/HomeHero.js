import React from 'react';

function HomeHero() {
  return(
    <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-36 xl:py-20">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Вартість володіння
          <br className="xl:hidden"/>
          <span className="text-blue-600"> новим авто</span>
        </h1>
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Розрахуйте вартість володіння автомобілем
        </p>
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Система розраховує додаткові витрати, які ви, можливо, не врахували при розгляді вашої наступної покупки автомобіля. 
        </p>
        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Ці додаткові витрати включають: податки та збори, страхові внески, витрати на паливо, технічне обслуговування, ремонт та інше. Перегляньте витрати на володіння будь-яким авто.</p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <a href="#manufacturers" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-3 md:text-lg md:px-8">
              Перелік авто
            </a>
          </div>
          {/* <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Live demo
            </a>
          </div> */}
        </div>
      </div>
    </main>
  )
}

export default HomeHero;