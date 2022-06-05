import './App.css';
import CreateItem from './components/CreateItem';
import EditItem from './components/EditItem';
import ShowItems from './components/ShowItems';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowItems />} />
          <Route path='/create' element={<CreateItem />} />
          <Route path='/edit/:id' element={<EditItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
