import UpdateImage from '../../assets/images/update_img.png'
import CardItemUpdate from '../Other/CardItemUpdate';
import SectionSubtitle from '../Other/SectionSubtitle';
import SectionTitle from '../Other/SectionTitle';

const Update = (props) => {
    return (
        <div className="update">
            <div className="update-content-left">
                <div className="box-title-update">
                    <SectionSubtitle text={"UPDATE"}/>
                    <SectionTitle text={"It starts with an upgrade"}/>
                </div>
                <img src={UpdateImage} alt={"It starts with an upgrade"}/>
            </div>
            <div className="update-content-right">
                {
                props.dataUpdate.map((item,key) => (
                   <CardItemUpdate key={key} icon={item.icon} title={item.title} text={item.text}/>
                ))
                }
            </div>
        </div>
    );
}

export default Update;