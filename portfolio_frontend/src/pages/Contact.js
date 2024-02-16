import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Contact from "../images/contact.jpg"
import { useState } from 'react'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify'

function ContactPage() {
    function sendEmail(e) {
        e.preventDefault();

        let firstName = document.getElementById('first_name').value
        let lastName = document.getElementById('last_name').value
        let email = document.getElementById('email').value
        let msg = document.getElementById('message').value

        if (firstName === "" || lastName === "" || email === "" || msg === "") {
            toast.error('One of the fields is empty !', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
            return
        }

        emailjs.sendForm('service_94r0tcu', 'template_8zdznk4', e.target, '3mpcJXT0ps68PAu6q')
            .then((result) => {
                console.log(result.text);

                toast.success('Email sent successfully !', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                })
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <Navbar />
            <div className='contactpage-container'>
                <div style={{ width: '65%', backgroundColor: '#D9C9BB' }}>
                    <div style={{ backgroundColor: '#BFA48D', height: '80%', marginLeft: '8%', marginRight: '15%', marginTop: '7%', display: 'flex', justifyContent: 'center' }}>
                        <img src={Contact} style={{ display: 'block', width: '100%' }} />
                    </div>
                    <div style={{ backgroundColor: '#F3EDE9' }}>
                    </div>
                </div>
                <div style={{ height: '40rem' }}>
                    <div style={{ width: '80%', margin: 'auto', marginTop: '13%' }}>
                        <h1>Contact Me</h1>
                        <h3>Feel free to reach out to me directly for any inquiries or assistance.</h3>
                        <form onSubmit={sendEmail} className='contact-form'>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
                                <input
                                    id='first_name'
                                    style={{ width: '50%' }}
                                    placeholder='First Name'
                                    name='first_name'
                                    className='contact-input'
                                />
                                <input
                                    id='last_name'
                                    style={{ width: '50%' }}
                                    placeholder='Last Name'
                                    name='last_name'
                                    className='contact-input'
                                />
                            </div>

                            <input
                                id='email'
                                placeholder='Email'
                                name='email'
                                className='contact-input'
                            />

                            <input
                                id='message'
                                placeholder='Message'
                                name='message'
                                className='contact-input'
                                style={{ paddingBottom: '20%' }}
                            />
                            <input type="submit" value="submit" style={{ backgroundColor: '#61615F', color: '#FFFFFF', width: '20%', paddingTop: '1%', paddingBottom: '1%', marginLeft: '7%', marginTop: '1.5%' }} />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage