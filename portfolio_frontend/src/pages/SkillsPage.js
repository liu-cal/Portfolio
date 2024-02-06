import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Project from "../components/Project"
import CV_fr from "../images/Liu_Caleb_CV_fr.png"
import CV_en from "../images/Liu_Caleb_CV_en.png"
import CV_fr_pdf from "../documents/Liu_Caleb_CV_fr.pdf"
import CV_en_pdf from "../documents/Liu_Caleb_CV_en.pdf"
import VerticalLine from "../components/VerticalLine"

function SkillsPage() {
    return (
        <div>
            <Navbar />
            <div className='skillspage-container'>
                <div style={{ backgroundColor: '#F3EDE9', width: '30%', marginTop: '5%', marginLeft: '10%' }}>
                    <div style={{ margin: '10%' }}>
                        <h1>Projects & Qualifications</h1>
                    </div>
                </div>
                <div style={{ backgroundColor: '#FFFFFF', width: '50%', marginTop: '2%' }}>
                    <div style={{ marginTop: '10%', marginLeft: '4%', display: 'flex', flexDirection: 'row', gap: '4%', marginRight: '4%' }}>
                        <div style={{ fontSize: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <p className='project-title'>Weather Wizard</p>
                        </div>
                        <VerticalLine />
                        <div>
                            <p className='project-description'>
                                Backend/Frontend Web Application using Python, Raspberry PI, SQLite, ESP-32 Camera sensor,
                                and DHT-22 Temperature/Humidity sensor to verify if there's a correlation between the
                                weather's temperature and humidity and the average pixel color of sky images
                            </p>
                        </div>
                    </div>
                    <Project
                        name='Restaurant'
                        description="IOS Mobile Application using Swift, MVVM (Model-View-Viewmodel) design architecture to simulate an online food delivery service" />

                    <Project
                        name="Contact Manager"
                        description="Desktop Application using C#, WPF, and ADO.NET to simulate a contact list and its functionalities involving CRUD and others such as the ability to export the existing contacts in a CSV file" />
                    <div className='skills-cv' >
                        <a href={CV_fr_pdf}>
                            <img src={CV_fr} style={{ width: '10rem' }} />
                        </a>
                        <a href={CV_en_pdf}>
                            <img src={CV_en} style={{ width: '10rem' }} />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SkillsPage