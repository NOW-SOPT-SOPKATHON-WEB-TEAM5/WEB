import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import RecmmendWish from './pages/RecommendWish';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recommendwish" element={<RecmmendWish />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
