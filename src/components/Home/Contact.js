import SectionSubtitle from "../Other/SectionSubtitle";
import SectionTitle from "../Other/SectionTitle";
import ImgContact from "../../assets/images/contact.svg";
import FormField from "../Other/FormField";
import ButtonPrimary from "../Other/ButtonPrimary";

const Contact = () =>{
    return (
        <div className="contact">
            <div className="contact-left">
                <SectionSubtitle text={"Contact"}/>
                <SectionTitle text={"Skip logging in, \nget what you need \nwith a few key details"}/>
                <img className="imgContact" src={ImgContact} alt={"Contact Us"}/>
            </div>
            <div className="contact-right">
                <FormField label={"Your Name (Required)"} type={"text"} placeholder={"Enter Name"}/>
                <FormField label={"Email (Required)"} type={"email"} placeholder={"Enter Email"}/>
                <FormField label={"Subject (Required)"} type={"text"} placeholder={"Enter Subject"}/>
                <FormField label={"Select (Job)"} type={"select"}/>
                <FormField label={"Company Name (Required)"} type={"text"} placeholder={"Enter Company Name"}/>
                <FormField label={"Message"} type={"textarea"} placeholder={"Enter Message"}/>
                <div className="mg-top-30">
                    <ButtonPrimary link={"#"} text={"Send Now"}/>
                </div>
            </div>
        </div>
    );
}

export default Contact;