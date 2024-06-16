import React, { useState } from 'react'

const ReviewComponent = () => {

   const [restaurantId, setRestaurantId] = useState('')
   const [customerId, setCustomerId] = useState('')
   const [rating, setRating] = useState('')
   const [comment, setComment] = useState('')

   function saveReview(e) {
      e.preventDefault();

      const review = {restaurantId, customerId, comment, rating}
      console.log(review)
   }

   return (
      <div className='container'>
         <div className='row'>
            <div className='card col-6 offset-3 offset-3'>
               <h2 className='text-center'>Add review</h2>

               <div className='cart-body'>

                  <form>
                     <div className='form-group mb-2'>
                        <label className='form-label'>RestaurantID:</label>
                        <input 
                           type="text"
                           placeholder='Enter RestaurantID'
                           name='restaurantId'
                           value={restaurantId}
                           className='form-control'
                           onChange={(e) => setRestaurantId(e.target.value)}
                        >                        
                        </input>
                     </div>

                     <div className='form-group mb-2'>
                        <label className='form-label'>CustomerID:</label>
                        <input 
                           type="text"
                           placeholder='Enter CustomerID'
                           name='customerId'
                           value={customerId}
                           className='form-control'
                           onChange={(e) => setCustomerId(e.target.value)}
                        >                        
                        </input>
                     </div>

                     <div className='form-group mb-2'>
                        <label className='form-label'>Rating:</label>
                        <input 
                           type="text"
                           placeholder='Enter Rating'
                           name='rating'
                           value={rating}
                           className='form-control'
                           onChange={(e) => setRating(e.target.value)}
                        >                        
                        </input>
                     </div>

                     <div className='form-group mb-2'>
                        <label className='form-label'>Comment:</label>
                        <input 
                           type="text"
                           placeholder='Enter Comment'
                           name='comment'
                           value={comment}
                           className='form-control'
                           onChange={(e) => setComment(e.target.value)}
                        >                        
                        </input>
                     </div>

                     <button className='btn btn-success mb-2' onClick={saveReview}>Add comment</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
  )
}

export default ReviewComponent