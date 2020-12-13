import ReadImage from "./ReadImage";
import IconQuote from "../../assets/images/icon-quote.png"

const CardItemTestimonials = (props) =>{
    let customClass;
    if(props.person === "Ryan Oliver"){
        customClass = `card-testimonial-left`;
    }else{
        customClass = `card-testimonial-right`;
    }

    return(
        <div className={`card-testimonial ${customClass}`}>
            <img className="image-testi" src={ReadImage(props.img)} alt={props.person}/>
            <div className="paragraph-testi">
                {props.text}
            </div>
            <div className="box-testi-person">
                <div className="person-testi">{props.person}</div>
                <div className="person-position-testi">{props.personPosition}</div>
            </div>
            <img className="icon-quote-testi" src={IconQuote} alt={"gambar testi kutip"}/>
        </div>
    );
}

export default CardItemTestimonials;