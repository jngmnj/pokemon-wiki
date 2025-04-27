import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import Detail from './pages/Detail';
import Error from './pages/Error';
import Home from './pages/Home';
import Search from './pages/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
