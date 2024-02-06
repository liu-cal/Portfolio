import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Contact from "../images/contact.jpg"

function ContactPage() {
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
                        <form className='contact-form'>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
                                <input
                                    style={{ width: '50%' }}
                                    placeholder='First Name'
                                    className='contact-input'
                                />
                                <input
                                    style={{ width: '50%' }}
                                    placeholder='Last Name'
                                    className='contact-input'
                                />
                            </div>
                            <input
                                placeholder='Email'
                                className='contact-input'
                            />


                            <input
                                placeholder='Message'
                                className='contact-input'
                                style={{ paddingBottom: '20%' }}
                            />
                            <button style={{ backgroundColor: '#61615F', color: '#FFFFFF', width: '20%', paddingTop: '1%', paddingBottom: '1%', marginLeft: '7%', marginTop: '1.5%' }}>submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ContactPage