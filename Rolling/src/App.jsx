import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from './pages/LandingPage';
import RollingPaperListPage from './components/RollingPaperListPage/RollingPaperListPage';
import MessagePage from './pages/MessagePage';
import PostPage from './page/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/list" element={<RollingPaperListPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path='/post/:id' element={<MessagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
