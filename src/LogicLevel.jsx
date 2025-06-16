import { useNavigate } from 'react-router-dom';

import logo from './assets/logo.png';

function LogicLevel () {
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
                            className="l1"
                            onClick={() => navigate('/LogicLevels/L1')}
                            >
                                1
                        </button>

                        <button 
                            className="l2"
                            onClick={() => navigate('/LogicLevels/L2')}
                            >
                                2
                        </button>
                        <button 
                            className="l3"
                            onClick={() => navigate('/LogicLevels/L3')}
                            >
                                3
                        </button>
                        <button 
                            className="l4"
                            onClick={() => navigate('/LogicLevels/L4')}
                            >
                                4
                        </button>
                        <p className="l5">5</p>
                        <p className="l6">6</p>
                        <p className="l7">7</p>
                        <p className="l8">8</p>
                        <p className="l9">9</p>
                        <p className="l10">10</p>
                        <p className="l11">11</p>
                        <p className="l12">12</p>
        
                        <button className="playButton">
                            Play
                        </button>
                    </div>
        </>
    )
}

export default LogicLevel;