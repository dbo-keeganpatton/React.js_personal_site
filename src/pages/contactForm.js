import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import "./ContactForm.css";
import { Link } from 'react-router-dom';


// Image Asset Imports 
import returnArrow from "../assets/return.svg"


const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const [disabled, setDisabled] = useState(false);
    const [alertInfo, setAlertInfo] = useState({
        display: false,
        message: '',
        type: '',
    });

    const toggleAlert = (message, type) => {
        setAlertInfo({ display: true, message, type });
        setTimeout(() => {
            setAlertInfo({ display: false, message: '', type: '' });
        }, 5000);
    };

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
            setDisabled(true);

            const templateParams = {
                name,
                email,
                subject,
                message,
            };

            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            toggleAlert('Form submission was successful!', 'success');
        } catch (e) {
            console.error(e);
            toggleAlert('Uh oh. Something went wrong.', 'danger');
        } finally {
            setDisabled(false);
            reset();
        }
    };

    

	return (
        <div className='body'>
			
			<Link to="/">
				<img src={returnArrow} alt="hello" className="return-arrow"/>
			</Link>

			<form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {alertInfo.display && (
                    <div className={`alert alert-${alertInfo.type} alert-dismissible`} role='alert'>
                        {alertInfo.message}
                    </div>
                )}

                <div className='row'>
                    <div className='col1'>
                        <input
                            type='text'
                            name='name'
                            {...register('name', {
                                required: { value: true, message: 'Please enter your name' },
                                maxLength: {
                                    value: 30,
                                    message: 'Please use 30 characters or less'
                                }
                            })}
                            placeholder='Name'
                            disabled={disabled}
                        />
                        {errors.name && <span>{errors.name.message}</span>}
                    </div>

                    <div className='col1_1'>
                        <input
                            type='email'
                            name='email'
                            {...register('email', {
                                required: true,
                                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                            })}
                            placeholder='Email address'
                            disabled={disabled}
                        />
                        {errors.email && <span className='errorMessage'>Please enter a valid email address</span>}
                    </div>
                </div>

                <div className='col2'>
                    <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                            required: { value: true, message: 'Please enter a subject' },
                            maxLength: {
                                value: 75,
                                message: 'Subject cannot exceed 75 characters'
                            }
                        })}
                        placeholder='Subject'
                        disabled={disabled}
                    />
                    {errors.subject && <span className='errorMessage'>{errors.subject.message}</span>}
                </div>

                <div className='col3'>
                    <textarea
                        rows={3}
                        name='message'
                        {...register('message', {
                            required: true
                        })}
                        placeholder='Message'
                        disabled={disabled}
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                </div>

                <button className='submit-btn' type='submit' disabled={disabled}>
                    Submit
                </button>
            </form>


        </div>
    );
};

export default ContactForm;

