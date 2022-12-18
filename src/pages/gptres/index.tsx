//dependency imports
import { type } from 'os';
import React from 'react';

import IFoodType from '../../interfaces/IFoodType';
//components
import FoodCard from '../../components/FoodCard';

type Props = {}

const foodObject: IFoodType[] = [
    {
        name: 'Chicken Biryani',
        desc: "A special delicacy from India, very spicy and sure to get your tummy rumbling!",
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg' 
    }
]


function GptRes({}: Props) {
  return (
    <div>
        <FoodCard foods={foodObject}/>
    </div>
  )
}

export default GptRes;