import React from 'react'
import { getRestaurantProducts } from '../services/RestaurantService';
import { useNavigate } from 'react-router-dom'

const ListRestaurantProductsComponent = () => {

   const navigator = useNavigate();

   function addReview() {
      navigator('/add-review')
   }


  return (
   
    <div>
      <button className='btn btn-primary mb-2 mx-5' onClick={addReview}>Add review</button>
      <h1>ListRestaurantProductsComponent</h1>
   </div>
  )
}

export default ListRestaurantProductsComponent