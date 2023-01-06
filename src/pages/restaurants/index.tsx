import React from 'react'
import GptCard from '../../components/GptCard';

import IFoodType from '../../interfaces/IFoodType';

type Props = {}

const FoodObject: IFoodType[] = [
    {
        name: 'Chicken Biryani',
        desc: "A special delicacy from India, very spicy and sure to get your tummy rumbling!",
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg' 
    },
    {
        name: 'Afghan Pilaf',
        desc: "Pilaf is a yummy chicken rice dish from Afghanistan!",
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Afghan_Palo.jpg' 
    },
    {
        name: 'Chilli Chicken',
        desc: "A special dish that's bound to fill your stomach and leave you satisfied!",
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Chicken_Chili_HR2.jpg' 
    },
    {
        name: 'Chilli Chicken',
        desc: "A special dish that's bound to fill your stomach and leave you satisfied!",
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Chicken_Chili_HR2.jpg' 
    }
]

const Restaurants = (props: Props) => {
  return (
    <div className='flex min-h-screen flex-col items-center gap-5 bg-[#EFEFEF]'>
    <h1 className="text-4xl font-extrabold tracking-tight text-gray-800">
      Choose <span className="text-[#E72D01]">Your</span> Food
    </h1>
    <div className='m-3 grid grid-cols-2 md:grid-cols-4 gap-5'>
        {FoodObject.map((food:IFoodType, index:number) => {
            return(
                <div className='mb-3'>
                    <GptCard {...food} />
                </div>
            )
        })}
    </div>
    <div className="flex flex-row">
        <div className='flex items-center mx-1'>
            <text className="font-bold text-red-600">Not satisfied?</text>
        </div>
      <button className="w-36 rounded-3xl bg-[#E72D01] py-2 px-4 font-bold text-white max-sm:w-28">
        Try Again 
      </button>
    </div>
</div>
  )
}

export default Restaurants