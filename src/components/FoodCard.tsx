import React from 'react'

import IFoodType from '../interfaces/IFoodType';

type Props = {}

const FoodCard = (foods: IFoodType) => {
  return (
    <div className="max-h-32">
        <a href="#" className="flex bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100">
            <img className="object-cover rounded-t-lg h-28 w-24 rounded-none rounded-l-lg" src={foods?.image} alt="" />
            <div className="flex flex-col mb-2 px-4 leading-normal">
                <h5 className="text-xl font-bold tracking-tight text-gray-900">{foods?.name}</h5>
                <p className="font-normal text-gray-700">{foods?.desc}</p>
            </div>
        </a>
    </div>
  )
}

export default FoodCard