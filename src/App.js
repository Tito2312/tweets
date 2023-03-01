import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Tweets } from './components/pages/Tweets/Tweets';
import { UseCustom } from './components/pages/UseCustom/UseCustom';
import { UseEffect } from './components/pages/UseEffect/UseEffect';
import { UseState } from './components/pages/UseState/UseState'




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/useState' element={<UseState/>}></Route>
        <Route path='/Use2' element={<UseCustom/>}></Route>
        <Route path='/UseEffect' element={<UseEffect/>}></Route>
        <Route path='/Tweets' element={<Tweets/>}></Route>
      </Routes>     
    </div>
  );
}

export default App;
