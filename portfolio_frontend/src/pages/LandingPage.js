import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function LandingPage() {
    return (
        <div>
            <Navbar />
            <div className='landingpage-container'>
                <div style={{ width: '50%' }}></div>
                <div style={{ width: '50%', backgroundColor: '#BFA48D' }}>
                    <div style={{ width: '80%', margin: 'auto' }}>
                        <h2 style={{ fontSize: '3rem', textTransform: 'uppercase', letterSpacing: '0.4em' }}>Caleb Liu</h2>
                        <h3>asdasd</h3>
                        <h4>See More</h4>
                        <img />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage