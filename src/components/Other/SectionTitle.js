
const SectionTitle = (props) => {
    return (
        <div className={`section-title ${props.customClass}`}>
            {props.text}
        </div>
    );
}

export default SectionTitle;