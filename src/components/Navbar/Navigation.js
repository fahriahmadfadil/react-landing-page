import Logo from '../../assets/images/logo.png'

const Navigation = () => {
    let url = "#"
    return (
        <div className="navbar">
            <img src={Logo} alt="Logo" className="logo" />
            <ul className="left">
                <li><a href={url}>Home</a></li>
                <li><a href={url}>Features</a></li>
                <li><a href={url}>Services</a></li>
                <li><a href={url}>Contact</a></li>
                <li><a href={url}>FAQ</a></li>
            </ul>
            <ul className="right">
                <li><a href={url}>Sign In</a></li>
                <li><a href={url}>Get Started</a></li>
            </ul>
        </div>
    );
}

export default Navigation;