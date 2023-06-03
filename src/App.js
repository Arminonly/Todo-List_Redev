import './App.css';
import { Routes, Route } from 'react-router-dom';
import Registry from './pages/Auth/Registry';
import ErrorPage from './pages/Auth/Components/ErrorPage';
import OkResult from './pages/Auth/Components/OkResult';
import Todo from './pages/Todos/Todo';
import Protected from './components/Protected';
import LoginPage from './pages/Login/LoginPage';

function App() {
  
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/registry" element={<Registry />} />
        <Route
          path="/todo"
          element={
            <Protected>
              <Todo />
            </Protected>
          }
        />

        <Route path="/err" element={<ErrorPage />} />
        <Route path="/ok" element={<OkResult />} />
      </Routes>
    </div>
  );
}

export default App;
