import Navbar from '../Navbar/Navigation';
import ButtonPrimary from '../Other/ButtonPrimary';
import ButtonDefault from '../Other/ButtonDefault';

const Main = () => {
    let url = "#";
    return (
        <div className="main">
            <Navbar />
            <div className="hero-content">
                <div className="hero-title">
                    Imagine your <br />
                    home smart enough <br />
                    <span>to take care</span> of itself. <br />
                </div>
                <div>
                    <p className="hero-paragraph">Turn your home into a smarthome today with a simple & affordable upgrade. Discover the upgrade that automates home maintenance.</p>
                </div>
                <div className="hero-action">
                    <ButtonPrimary link={url} text={"Get Started"}/>
                    <ButtonDefault link={url} text={"Learn More"}/>
                </div>
            </div>
        </div>
    );
}

export default Main;