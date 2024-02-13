import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Profile from "../images/profile.jpg"
// import Particles from 'react-particles-js';

function LandingPage() {
    // const particlesOptions = {
    //     particles: {
    //         number: {
    //             value: 80,
    //             density: {
    //                 enable: true,
    //                 value_area: 800
    //             }
    //         }
    //     }
    // };

    return (
        <div>
            <Navbar />
            <div className='landingpage-container'>
                <div style={{ width: '50%' }}>
                    {/* <Particles params={particlesOptions} /> */}
                </div>
                <div style={{ width: '50%', backgroundColor: '#BFA48D' }}>
                    <div style={{ width: '80%', margin: 'auto' }}>
                        <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', letterSpacing: '0.4em' }}>Caleb Liu</h2>
                        <h3>Student in Computer Science & Technology</h3>
                        <img src={Profile} width="50%" style={{ display: 'block', margin: 'auto', marginTop: '10%' }} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage