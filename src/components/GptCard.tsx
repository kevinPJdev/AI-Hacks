import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa';

import IFoodType from '../interfaces/IFoodType'

const GptCard = (foods: IFoodType) => {
  return (
    <div className="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow-md mt-16">
        <div className="h-20">
          <img className="relative -top-16 rounded-full h-32 w-32 border border-gray-200 shadow-md" src={foods.image} alt="" />
        </div>
        <div className="mb-2 px-3">
          <h5 className="text-xl text-center font-bold tracking-tight text-gray-900">{foods.name}</h5>
        </div>
        <div className="flex mb-2 w-full mr-auto justify-end pr-2">
          <div>
            <FaArrowCircleRight color='red' size={25}/>
          </div>
        </div>
    </div>
  )
}

export default GptCard