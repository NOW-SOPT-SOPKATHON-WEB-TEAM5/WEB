import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import ResultPage from './components/ResultWish/ResultWish';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
