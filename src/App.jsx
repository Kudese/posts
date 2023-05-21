
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Tweets from './pages/Twets';



function App() {
  return (
    <BrowserRouter basename='posts' >
    <Routes>
      <Route index element={<Tweets/>}/>
      <Route path='twets' element={<Tweets/>} >
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
