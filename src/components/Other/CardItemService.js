import ReadImage from "./ReadImage";

const CardItemService = (props) => {
    return (
        <div className="card-service">
            <img src={ReadImage(props.icon)} alt={props.title}/>
            <div className="content-body-title">
                {props.title}
            </div>
        </div>
    );
}

export default CardItemService;