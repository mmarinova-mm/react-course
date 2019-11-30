import React from 'react';
import globalStyles from '../../../../assets/global-styles/bootstrap.module.css';

const CONTROLS = {
    text: (props: any) => <input type='text' {...props} />,
    email: (props: any) => <input type='email' {...props} />,
    select: ({collection, ...props}: {collection: any, props: any}) => <select  {...props}>
        <option value="">Select one</option>
        {collection.map((option: string) => (<option key={option} value={option}>{option}</option>))}
    </select>,
    confirm: (type: any, ...props: any) => <input type="checkbox" value="true" {...props} />
};

interface IInputProps {
    value?: any,
    name: string,
    type: string,
    onChange: (name: string, value: any) => void,
    collection?: any
}

export default function Input(props: IInputProps) {
    // @ts-ignore
    const Control = CONTROLS[props.type];

    return <div className={props.type === 'confirm' ? '' : globalStyles['form-group']}>
        <label htmlFor={props.name} className={globalStyles['text-capitalize']}>{props.name}:</label>
        <Control className={props.type === 'confirm' ? '' : globalStyles['form-control']} {...props}/>
    </div>;
}