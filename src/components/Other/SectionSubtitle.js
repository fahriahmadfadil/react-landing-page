
const SectionSubtitle = (props) => {
    return (
        <div className={`section-subtitle ${props.customClass}`}>
            {props.text}
        </div>
    );
}

export default SectionSubtitle;