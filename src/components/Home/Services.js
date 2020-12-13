import CardItemService from "../Other/CardItemService";
import ImgHome from '../../assets/images/home.png';
import SectionTitle from "../Other/SectionTitle";
import SectionSubtitle from "../Other/SectionSubtitle";

const Services = (props) => {
    return (
        <div className="services">
            <SectionSubtitle text={"SERVICES"} customClass="text-center"/>
            <SectionTitle text={"Bring more systems into the network"} customClass="text-center"/>
            <p className="section-paragraph text-center">
                Find out just how far Siphome can lead your home into next-gen intelligence.
            </p>
            <img className="image-home" src={ImgHome}  alt={"Our Services"}/>
            <div className="item-services-group">
                {
                props.dataServices.map((item,key) => (
                    <CardItemService key={key} icon={item.icon} title={item.title}/>
                ))
                }
            </div>
        </div>
    );
}

export default Services;