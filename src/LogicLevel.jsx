import logo from './assets/logo.png';

function LogicLevel () {
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
        
                        <p className="l1">1</p>
                        <p className="l2">2</p>
                        <p className="l3">3</p>
                        <p className="l4">4</p>
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