import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import QuestionCard from './pages/QuestionCard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/question" element={<QuestionCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
