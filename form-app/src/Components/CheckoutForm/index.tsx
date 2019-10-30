import React, {FormEvent, useState} from 'react';
import Field from './Field';

const CheckoutForm = () => {
    const [receiver, setReceiver] = useState<any>({
        name: '',
        email: '',
        city: '',
        country: '',
        address: '',
        subscribe: false
    });

    const CITIES = ['Varna', 'Plovdiv', 'Sofia'];
    const COUNTRIES = ['Bulgaria', 'USA', 'Ireland'];

    const submit = (event: FormEvent) => {
        event.preventDefault();
        console.log(receiver);
    };

    const change = (name, value) => {
        setReceiver({...receiver, [name]: value});
    };

    return <form onSubmit={submit}>
        <Field value={receiver.name} name='name' type='text' onChange={change}/>
        <Field value={receiver.email} name='email' type='email' onChange={change}/>
        <Field value={receiver.country} name='country' type='select' collection={COUNTRIES} onChange={change}/>
        <Field value={receiver.city} name='city' type='select' collection={CITIES} onChange={change}/>
        <Field value={receiver.address} name='address' type='text' onChange={change}/>
        <Field name='subscribe' type='confirm' onChange={change}/>
        <input type='submit'/>
    </form>;
};

export default CheckoutForm;