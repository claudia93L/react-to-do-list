import './App.css';
import Homepage from './pages/Homepage';
import store from './store/store';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import TodoList from './pages/TodoList';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/todolist' element={<TodoList></TodoList>}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
