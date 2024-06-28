import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductComponent from './components/ListProductComponent';
import ListRestaurantsComponent from './components/ListRestaurantsComponent';
import ListRestaurantProductsComponent from './components/ListRestaurantProductsComponent';
import ReviewComponent from './components/ReviewComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
// const express = require('express');
// const cors = require('cors');
// const app = express();
//
// const corsOptions = {
//    origin: 'http://localhost:9000',
//    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//    allowedHeaders: ['Content-Type'],
//    credentials: true
// };
//
// app.use(cors(corsOptions));
//
// // Handle preflight requests
// app.options('*', cors(corsOptions));
//
// app.use(express.json());
//
// app.get('/product', (req, res) => {
//    res.json({ message: 'Hello, this is your product endpoint!' });
// });
//
// app.listen(8889, () => {
//    console.log('Server is running on port 8889');
// });

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
