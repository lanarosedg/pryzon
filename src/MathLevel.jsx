import logo from './assets/logo.png';

function MathLevel() {
    return (
        <>
            <div className="MathLevelContainer">
                <div className="logoContainer">
                    <img 
                        src={logo} 
                        alt="" 
                        className="logo" 
                    />
                </div>

                <p className="m1">1</p>
                <p className="m2">2</p>
                <p className="m3">3</p>
                <p className="m4">4</p>
                <p className="m5">5</p>
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