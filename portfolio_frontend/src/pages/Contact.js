import Footer from "../components/Footer"
import PageNavbar from "../components/PageNavbar"
import Contact from "../images/contact.jpg"
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next';

function ContactPage() {
    const { t, i18n } = useTranslation();

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
            <PageNavbar />
            <div className='contactpage-container'>
                <div className='contactpage-image'>
                    <div className='contactpage-image-container'>
                        <img src={Contact} style={{ display: 'block', width: '100%' }} />
                    </div>
                    <div style={{ backgroundColor: '#F3EDE9' }}>
                    </div>
                </div>
                <div style={{ height: '40rem' }}>
                    <div style={{ width: '80%', margin: 'auto', marginTop: '13%' }}>
                        <h1>
                            {t('Contact.contact-title')}
                        </h1>
                        <h3>
                            {t('Contact.contact-subtitle')}
                        </h3>
                        <form onSubmit={sendEmail} className='contact-form'>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
                                <input
                                    id='first_name'
                                    style={{ width: '50%' }}
                                    placeholder={t('Contact.contact-fname')}
                                    name='first_name'
                                    className='contact-input'
                                />
                                <input
                                    id='last_name'
                                    style={{ width: '50%' }}
                                    placeholder={t('Contact.contact-lname')}
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
                            <input type="submit" value={t('Contact.contact-btn')} className='submit-btn' />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage