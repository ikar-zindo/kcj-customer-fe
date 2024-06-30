import React, {useEffect, useState} from 'react';
import { listProducts } from '../../services/ProductService';

const ListProductComponent = (props) => {

   const [products, setProducts] = useState([]);

   useEffect(() => {
      listProducts().then((response) => {
         setProducts(response.data);
      }).catch(error => 
         console.error(error)
      )
   }, []);

   return (
   <main>
      <div className="album py-5">
         <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-4">

               {products.map((product) => (
                  <div key={product.id} className="col">
                     <div className="card shadow-sm bg-body-secondary">
                        <div className="card-body">
                           <div className="d-flex gap-2">
                              <div className="fixed-size-div">
                                 <img
                                    width="100px"
                                    height="100px"
                                    className="fixed-size-div"
                                    src={`src/assets/products/${product.imageUrl}`}
                                    alt={product.name}
                                 />
                              </div>
                              <div>
                                 <h3 className="text-shojumaru-regular text-primary">{product.name}</h3>
                                 
                                 <p>{product.description}</p>
                              </div>
                           </div>
                           <div className="d-flex justify-content-between align-items-center">
                              <div className="btn-group">
                                 <form
                                    th:action="'/cart/' + |${product.restaurantDto.id}| + '/' + |${product.id}| + '/add'"
                                    th:method="PUT">
                                    <button
                                       type="submit"
                                       className="mt-2 btn btn-success text-shojumaru-regular btn-add-to-cart">
                                       <svg xmlns="http://www.w3.org/2000/svg"
                                          width="16"
                                          height="16"
                                          fill="currentColor"
                                          className="bi bi-cart-plus"
                                          viewBox="0 0 16 16">
                                          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"></path>
                                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path>
                                       </svg>
                                       Add to cart
                                    </button>
                                 </form>
                              </div>

                              <div className="text-end">
                                 <p className="m-0 text-my-light text-shojumaru-regular">Price: {product.price.toFixed(2)} €</p>

                                 <p className="text-shojumaru-regular m-0 text-success">«{product.restaurant.name}»</p>

                                 <p className="m-0 text-secondary">{product.restaurant.address}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}

            </div>
         </div>
      </div>
   </main>
   );
}

export default ListProductComponent