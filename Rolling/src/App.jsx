import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Common/Header';
import LandingPage from './components/LandingPage/LandingPage';
import RollingPaperListPage from './components/RollingPaperListPage/RollingPaperListPage';
import MessagePage from './components/MessagePage/MessagePage';
import PostPage from './components/PostPage/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<RollingPaperListPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/:id" element={<MessagePage />} />
        <Route path="/post/:id/edit" element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
