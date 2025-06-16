import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Category from './Category'
import LogicLevel from './LogicLevel';
import MathLevel from './MathLevel';

import M1 from './MathLevels/M1';
import M2 from './MathLevels/M2';
import M3 from './MathLevels/M3';
import M4 from './MathLevels/M4';
import M5 from './MathLevels/M5';
import M6 from './MathLevels/M6';
import M7 from './MathLevels/M7';
import M8 from './MathLevels/M8';
import M9 from './MathLevels/M9';
import M10 from './MathLevels/M10';
import M11 from './MathLevels/M11';
import M12 from './MathLevels/M12';

import L1 from './LogicLevels/L1';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/LogicLevel" element={<LogicLevel />} />
          <Route path="/MathLevel" element={<MathLevel />} />

          {/* Math Levels */}
          <Route path="/MathLevels/M1" element={<M1 />} />
          <Route path="/MathLevels/M2" element={<M2 />} />
          <Route path="/MathLevels/M3" element={<M3 />} />
          <Route path="/MathLevels/M4" element={<M4 />} />
          <Route path="/MathLevels/M5" element={<M5 />} />
          <Route path="/MathLevels/M6" element={<M6 />} />
          <Route path="/MathLevels/M7" element={<M7 />} />
          <Route path="/MathLevels/M8" element={<M8 />} />
          <Route path="/MathLevels/M9" element={<M9 />} />
          <Route path="/MathLevels/M10" element={<M10 />} />
          <Route path="/MathLevels/M11" element={<M11 />} />
          <Route path="/MathLevels/M12" element={<M12 />} />
          
          {/* Logic Levels */}

          <Route path="/LogicLevels" element={<LogicLevel />} />

          <Route path="/LogicLevels/L1" element={<L1 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
