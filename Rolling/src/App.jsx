import { ListPage } from './page/ListPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
