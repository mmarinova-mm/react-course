import React from "react";
import Input from "./Input";

interface IFieldProps {
    value?: any,
    name: string,
    type: string,
    onChange: (name: string, value: any) => void,
    collection?: any
}

export default function Field(props: IFieldProps) {
    const change = (event: any) => {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        props.onChange(target.name, value);
    };

    return <Input {...props} onChange={change}/>
}