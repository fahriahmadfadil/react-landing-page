import CardItemTestimonials from "../Other/CardItemTestimonials";
import SectionSubtitle from "../Other/SectionSubtitle";
import SectionTitle from "../Other/SectionTitle";
import ImageIndicator from "../../assets/images/indicator.png"

const Testimonials = (props) => {
    return (
        <div className="testimonials">
            <SectionSubtitle text={"TESTIMONIALS"} customClass="text-center"/>
            <SectionTitle text={"Let’s see what people says \n about Siphome"} customClass="text-center"/>
            <div className="item-testimonials">
                {
                props.dataTestimonials.map((item,key) => (
                    <CardItemTestimonials key={key} img={item.img} text={item.text} person={item.person} personPosition={item.personPosition}/>
                ))
                }
            </div>
            <img src={ImageIndicator} alt={"indicator"} className="icon-indicator-testimonials"/>
        </div>
    );
}

export default Testimonials;