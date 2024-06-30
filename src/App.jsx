import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListProductComponent from './components/ListProductComponent';
import ListRestaurantsComponent from './components/ListRestaurantsComponent';
import ListRestaurantProductsComponent from './components/ListRestaurantProductsComponent';
import ReviewComponent from './components/reviews/ReviewComponent.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import MyPosts from "./components/MyPosts/MyPosts.jsx";
import Post from "./components/MyPosts/Post/Post.jsx";



const App = (props) => {
  return (
    <>
      <BrowserRouter>
          <HeaderComponent />
            <Routes>

              {/* // http://localhost:9000 */}
              <Route path = '/'
							element = { <MyPosts
								profilePage={props.state.profilePage}
								newPostText={props.state.profilePage.newPostText}
								posts={props.state.profilePage.posts}
								dispatch={props.dispatch} /> }></Route>

              {/* // http://localhost:9000/product */}
              <Route path='/product' element = { <ListProductComponent /> }></Route>

              {/* // http://localhost:9000/restaurant */}
              <Route path='/restaurant' element = { <ListRestaurantsComponent /> }></Route>

              {/* // http://localhost:9000/restaurant/{id} */}
              <Route path='/restaurant/:id' element = { <ListRestaurantProductsComponent /> } />

              {/* // http://localhost:9000/add-review */}
              <Route path='/add-review'
							element = { <ReviewComponent
								reviews={props.state.reviews}
								newReviewComment={props.state.profilePage.newReviewComment}
								newReviewRating={props.state.profilePage.newReviewRating}
								restaurantId={props.state.profilePage.restaurantId}
								dispatch={props.dispatch} /> }></Route>

              <Route path='/login' element={ <LoginComponent /> } />
            </Routes>
          <FooterComponent />
        </BrowserRouter>
    </>
  );
}

export default App
