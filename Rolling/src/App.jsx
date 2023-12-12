import { ListPage } from './page/ListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostPage } from './page/PostPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/list">
          <Route index element={<ListPage />} />
        </Route>
        <Route path="/post">
          <Route index element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
