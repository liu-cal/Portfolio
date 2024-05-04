import Footer from "../components/Footer"
import PageNavbar from "../components/PageNavbar"
import Project from "../components/Project"
import CV_fr from "../images/Liu_Caleb_CV_fr.png"
import CV_en from "../images/Liu_Caleb_CV_en.png"
import CV_fr_pdf from "../documents/Liu_Caleb_CV_fr.pdf"
import CV_en_pdf from "../documents/Liu_Caleb_CV_en.pdf"
import VerticalLine from "../components/VerticalLine"
import Hackathon from "../components/Hackaton"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function SkillsPage() {
    return (
        <div>
            <PageNavbar />
            <div className='skillspage-container'>
                <div className='skillspage-qualifications'>
                    <div className='qualifications-title'>
                        <div style={{ margin: '10%' }}>
                            <h1>Projects & Qualifications</h1>
                        </div>
                    </div>
                    <div className='qualifications-content'>
                        <div style={{ marginBottom: '10%' }}></div>
                        <Project
                            name='Weather Wizard'
                            description="Backend/Frontend Web Application using Python, Raspberry PI, SQLite, ESP-32 Camera sensor, and DHT-22 Temperature/Humidity sensor to verify if there's a correlation between the weather's temperature and humidity and the average pixel color of sky images" />


                        {/* <div style={{ marginTop: '10%', marginLeft: '4%', display: 'flex', flexDirection: 'row', gap: '4%', marginRight: '4%', width: '100%' }}>
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
                        </div> */}
                        <Project
                            name='Restaurant'
                            description="IOS Mobile Application using Swift, MVVM (Model-View-Viewmodel) design architecture to simulate an online food delivery service" />

                        <Project
                            name="Contact Manager"
                            description="Desktop Application using C#, WPF, and ADO.NET to simulate a contact list and its functionalities involving CRUD and others such as the ability to export the existing contacts in a CSV file" />

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '5%', marginLeft: '4%', marginRight: '4%' }}>
                            <h2 style={{ textAlign: 'center' }}>Hackathon Experience</h2>
                            <div className='hackathon-container'>
                                <Hackathon year="2021" name="BrébeufHX" description="Won first place with my team by creating an informative ReactJS website on UNICEF children rights" />
                                <Hackathon year="2022" name="BrébeufHX" description="Won second place with my team by creating a ReactJS website that contains news and articles related to UNICEF and that allows the ability to rate them" />
                                <Hackathon year="2022" name="Collegiate Penetration Testing Competition (CPTC)" description="Network global competition simulation of white hat documenting and hacking into a system" />
                            </div>
                        </div>

                        <div></div>

                        <div className='skills-cv' >
                            <a href={CV_fr_pdf}>
                                <img src={CV_fr} style={{ width: '100%' }} />
                            </a>
                            <a href={CV_en_pdf}>
                                <img src={CV_en} style={{ width: '100%' }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '5%' }}>
                    <div className="flex pl-[5%] lg:justify-center lg:pl-0 py-3">
                        <h2 style={{ textAlign: 'center', color: '#FFFFFF' }}>Work Experience</h2>
                        <VerticalTimeline
                            lineColor={"white"}
                        >
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'white', color: 'black', border: "solid 2px black" }}
                                contentArrowStyle={{ borderRight: '7px solid  black' }}
                                date="2021 - present"
                                iconStyle={{
                                    background: 'black', color: '#fff'
                                }}
                            >
                                <h3 className="vertical-timeline-element-title">Tutor</h3>
                                <h4 className="vertical-timeline-element-subtitle">Longueuil, CA</h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'white', color: 'black', border: "solid 2px black" }}
                                contentArrowStyle={{ borderRight: '7px solid  black' }}
                                date="February 2024 - May 2024"
                                iconStyle={{
                                    background: 'black', color: '#fff'
                                }}
                            >
                                <h3 className="vertical-timeline-element-title">Software Developer Intern</h3>
                                <h4 className="vertical-timeline-element-subtitle">Longueuil, CA</h4>
                                <p>
                                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default SkillsPage