import React, {FormEvent, useState} from "react";
import {Field, Formik} from "formik";

const initialValues = {
    name: '',
    email: '',
    city: '',
    country: '',
    address: '',
    subscribe: false
};

export default function FormikForm() {
    const CITIES = ['Varna', 'Plovdiv', 'Sofia'];
    const COUNTRIES = ['Bulgaria', 'USA', 'Ireland'];

    function submit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // console.log(values);
    }

    function validate(values) {
        let errors = {};
        if (!values.name) {
            errors['name'] = 'Name is required';
        }
        if (!values.email) {
            errors['email'] = 'Email is required';
        }

        return errors;
    }

    return <Formik onSubmit={submit} initialValues={initialValues} validate={validate}>
        {form => (
            <form onSubmit={form.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field name="name" validate={validate}/>
                    {/*{form.errors.name && form.touched.name && <div>{form.errors.name}</div>}*/}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email"/>
                    {form.errors.email && form.touched.email && <div>{form.errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="country">Country</label>
                    <Field name="country" component="select" placeholder="Select one">
                        <option value="">Select one</option>
                        {COUNTRIES.map((country) => (
                            <option value={country}>{country}</option>
                        ))}
                    </Field>
                    {form.errors.email && form.touched.email && <div>{form.errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <Field name="city" component="select" placeholder="Select one">
                        <option value="">Select one</option>
                        {CITIES.map((city) => (
                            <option value={city}>{city}</option>
                        ))}
                    </Field>
                    {form.errors.email && form.touched.email && <div>{form.errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="subscribe">City</label>
                    <Field name="subscribe" type="checkbox" />
                </div>
                <button type="submit">Submit</button>
            </form>
        )}
    </Formik>;
}
