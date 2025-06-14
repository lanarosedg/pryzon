import logic from './assets/logic.png';
import math from './assets/math.png';
import logo from './assets/logo.png';

function Category() {
    return (
        <>
            <div className="Category">
                <div className="logoContainer">
                    <img src={logo} alt="" className="logo" />
                </div>
                <p className="pickCategory">Pick a Category</p>
                <div className="logicContainer">
                    <img src={logic} alt="" className="logic" />
                </div>
                <div className="mathContainer">
                    <img src={math} alt="" className="math" />
                </div>
            </div>
        </>
    )
}

export default Category;