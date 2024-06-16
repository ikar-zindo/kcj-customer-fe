import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductComponent from './components/ListProductComponent';
import ListRestaurantsComponent from './components/ListRestaurantsComponent';
import ListRestaurantProductsComponent from './components/ListRestaurantProductsComponent';
import ReviewComponent from './components/ReviewComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';


function App() {

  return (
    <>
      <BrowserRouter>
          <HeaderComponent />
            <Routes>

              {/* // http://localhost:9000 */}
              <Route path='/' element = { <ListProductComponent /> }></Route>

              {/* // http://localhost:9000/product */}
              <Route path='/product' element = { <ListProductComponent /> }></Route>

              {/* // http://localhost:9000/restaurant */}
              <Route path='/restaurant' element = { <ListRestaurantsComponent /> }></Route>

              {/* // http://localhost:9000/restaurant/{id} */}
              <Route path='/restaurant/:id' element = { <ListRestaurantProductsComponent /> } />

              {/* // http://localhost:9000/add-review */}
              <Route path='/add-review' element = { <ReviewComponent /> }></Route>

              <Route path='/login' element={ <LoginComponent /> } />
            </Routes>
          <FooterComponent />
        </BrowserRouter>
    </>
  );
}

export default App
