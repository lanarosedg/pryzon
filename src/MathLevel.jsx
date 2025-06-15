import { useNavigate } from 'react-router-dom';

import logo from './assets/logo.png';

function MathLevel() {
    const navigate = useNavigate();
    return (
        <>
            <div className="LevelContainer">
                <div className="logoContainer">
                    <img 
                        src={logo} 
                        alt="" 
                        className="logo" 
                    />
                </div>

                <button 
                    className="m1"
                    onClick={() => navigate('/MathLevels/M1')}
                    >
                        1
                </button>

                <button 
                    className="m2"
                    onClick={() => navigate('/MathLevels/M2')}
                    >
                        2
                    </button>
                <button 
                    className="m3"
                    onClick={() => navigate('/MathLevels/M3')}
                    >
                        3
                </button>
                <button 
                    className="m4"
                    onClick={() => navigate('/MathLevels/M4')}
                    >
                        4
                </button>
                <button 
                    className="m5"
                    onClick={() => navigate('/MathLevels/M5')}
                    >
                        5
                </button>
                <p className="m6">6</p>
                <p className="m7">7</p>
                <p className="m8">8</p>
                <p className="m9">9</p>
                <p className="m10">10</p>
                <p className="m11">11</p>
                <p className="m12">12</p>


                <button className="playButton">
                    Play
                </button>
            </div>
        </>
    )
}

export default MathLevel;