import {Routes, Route} from 'react-router-dom'
import { DetailArticle } from './pages/DetailArticle';
import { Main } from './pages/Main';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='details' element={<DetailArticle/>}/>
    </Routes>
  );
}
