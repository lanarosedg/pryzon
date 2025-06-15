import logo from '../assets/logo.png';
import m1ProblemImg from '../assets/MathLevels/m1.png';


function M1() {
    return (
        <>
        <div className="M1Container">
            <div className="logoContainer">
                <img 
                    src={logo} 
                    alt="" 
                    className="logo" 
                />
            </div>
            <div className="m1ProblemContainer">
                <img 
                    src={m1ProblemImg} 
                    alt="" 
                    className="m1ProblemImg" 
                />
            </div>
            <div className="answerInputContainer">
                <input 
                    type="text" 
                    className="answerInput" 
                />
                <button className="answerButton">
                    Submit
                </button>
            </div>
        </div>
        </>
    )
}

export default M1;