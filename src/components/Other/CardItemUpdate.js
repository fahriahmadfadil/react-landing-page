import ReadImage from "./ReadImage";

const CardItemUpdate = (props) => {
    return (
        <div className="card-update">
            <img src={ReadImage(props.icon)} alt={props.title} />
            <div className="card-update-content">
                <div className="content-body-title">
                    {props.title}
                </div>
                <div className="content-body-text">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default CardItemUpdate;