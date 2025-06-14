import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Category from './Category'
import LogicLevel from './LogicLevel';
import MathLevel from './MathLevel';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/LogicLevel" element={<LogicLevel />} />
          <Route path="/MathLevel" element={<MathLevel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
