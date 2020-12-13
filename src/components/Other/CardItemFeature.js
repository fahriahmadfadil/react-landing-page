import ReadImage from "./ReadImage";

const CardItemFeature = (props) => {

  return (
    <div className="card-feature">
      <img src={ReadImage(props.img)} alt={props.titleText}/>
      <div className="content-body-title">{props.titleText}</div>
      <div className="content-body-tex">
        {props.bodyText}
      </div>
    </div>
  );
}

export default CardItemFeature;