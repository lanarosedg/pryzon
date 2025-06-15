import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Category from './Category'
import LogicLevel from './LogicLevel';
import MathLevel from './MathLevel';

import M1 from './MathLevels/M1';
import M2 from './MathLevels/M2';
import M3 from './MathLevels/M3';

import L1 from './LogicLevels/L1';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/LogicLevel" element={<LogicLevel />} />
          <Route path="/MathLevel" element={<MathLevel />} />
          <Route path="/MathLevels/M1" element={<M1 />} />
          <Route path="/MathLevels/M2" element={<M2 />} />
          <Route path="/MathLevels/M3" element={<M3 />} />
          <Route path="/LogicLevels/L1" element={<L1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
