import React from 'react';
import s from './Contact.module.scss';
import {Field,reduxForm, reset} from 'redux-form';
import {TextArea} from "../Form/Form";
import {TestName, TestPhone} from "../helper";

const Contact=()=> {
    const onSubmit = (formData)=>{
        console.log(formData);
    }
        return (
            <div className={s.Background}>
                <h1 className={s.Title}>Связаться со мной</h1>
                <hr></hr>
                <p className={s.Annotation}>You can contact me any way that is
                    convenient for you. I am available 24/7 via fax, email or telephone.
                    You can also use a quick contact form located on this page to ask a question
                    about my services and projects I work on. I would be happy to answer your questions or offer any help.</p>
<ContactReduxForm  onSubmit={onSubmit}/>
            </div>
        );
    }
const ContactForm=(props)=> {
const {handleSubmit}=props;

    return (
        <form className={s.Form} onSubmit={handleSubmit}>
            <Field className={s.Name} name={"name"} placeholder={"Name"} validate={TestName} component={TextArea} />
            <Field className={s.Date} name={'date'} placeholder={'00.00.00'}  component={TextArea} />
            <Field className={s.Phone} name={'phone'} placeholder={'+7 (_ _ _) _ _ _ _ _ _ _'}  validate={TestPhone} component={TextArea} />
            <Field className={s.Mes} name={'message'} placeholder={'Additional information...'}  component={TextArea} />
            <button >SEND MESSAGE</button>
        </form>
    );
}
const afterSubmit = (result, dispatch) =>
    dispatch(reset('add'));
const ContactReduxForm=reduxForm(
    {
        form: 'add',
        onSubmitSuccess: afterSubmit
    }
)(ContactForm)


export default Contact;
