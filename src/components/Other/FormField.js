const FormField = (props) => {
    let InputItem = InputText(props);
    if(props.type === "text") {
        InputItem = InputText(props);
    }else if (props.type === "textarea"){
        InputItem = InputTextArea(props);
    }else if(props.type === "select"){
        InputItem = InputSelect(props);
    }else if(props.type === "email"){
        InputItem = InputEmail(props);
    }

    return (
        <div className="form-field">
            <label>{props.label}</label>
            {InputItem}            
        </div>
    );
}

const InputText = (props) =>{
    return (
        <input type="text" placeholder={props.placeholder}/>
    );
}

const InputEmail = (props) =>{
    return (
        <input type="email" placeholder={props.placeholder}/>
    );
}

const InputSelect = (props) =>{
    return (
        <select>
            <option>Please Select</option>
        </select>
    );
}

const InputTextArea = (props) =>{
    return (
        <textarea placeholder={props.placeholder}></textarea>
    );
}

export default FormField;