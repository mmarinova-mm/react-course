import React from "react";

const CONTROLS = {
    text: (props: any) => <input type='text' {...props} />,
    email: (props: any) => <input type='email' {...props} />,
    select: ({collection, ...props}) => <select  {...props}>
        <option value="">Select one</option>
        {collection.map((option: string) => (<option key={option} value={option}>{option}</option>))}
    </select>,
    confirm: ({type, ...props}) => <input type="checkbox" value="true" {...props} />
};

interface IInputProps {
    value?: any,
    name: string,
    type: string,
    onChange: (name: string, value: any) => void,
    collection?: any
}

export default function Input(props: IInputProps) {
    const Control = CONTROLS[props.type || 'text'];

    return <div>
        <label htmlFor={props.name}>{props.name}:</label>
        <Control {...props}/>
    </div>;
}