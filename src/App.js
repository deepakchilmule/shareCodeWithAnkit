import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import HotelsList from './pages/home/list/HotelsList';
import City from './components/city/City';
import PostList from './components/posts/PostList';
import CreatePost from './components/create post/CreatePost';
import Comments from './components/comments/Comments';
import Events from './components/events/Events';


function App() {
  return <BrowserRouter>
<Routes>
 <Route path='/' element={<Home />} />
 <Route  path='/hotels' element={<HotelsList /> } />
  <Route path='/hotels/:id' element={ <City /> } /> 
  <Route path='/posts' element={ <PostList /> } /> 
  <Route path='/makepost' element={ <CreatePost /> } />
  <Route path='/comments' element={ <Comments /> } />
  <Route path='/events' element={ <Events /> } />
</Routes>

  </BrowserRouter>
}

export default App;
