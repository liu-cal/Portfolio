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
import { useTranslation } from 'react-i18next';

function SkillsPage() {
    const { t, i18n } = useTranslation();

    return (
        <div>
            <PageNavbar />
            <div className='skillspage-container'>
                <div className='skillspage-qualifications'>
                    <div className='qualifications-title'>
                        <div style={{ margin: '10%' }}>
                            <h1>
                                {t('Skills.skills-title')}
                            </h1>
                        </div>
                    </div>
                    <div className='qualifications-content'>
                        <div style={{ marginBottom: '10%' }}></div>
                        <Project
                            name='Weather Wizard' />

                        <Project
                            name='Restaurant' />

                        <Project
                            name="Contact Manager" />

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '5%', marginLeft: '4%', marginRight: '4%' }}>
                            <h2 style={{ textAlign: 'center' }}>
                                {t('Skills.hackathon-title')}
                            </h2>
                            <div className='hackathon-container'>
                                <Hackathon year="2021" name="BrébeufHX" description="hackathon1" />
                                <Hackathon year="2022" name="BrébeufHX" description="hackathon2" />
                                <Hackathon year="2022" name="Collegiate Penetration Testing Competition (CPTC)" description="hackathon3" />
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
                        <h2 style={{ textAlign: 'center', color: '#FFFFFF' }}>
                            {t('Skills.work-experience-title')}
                        </h2>
                        <VerticalTimeline
                            lineColor={"white"}
                        >
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'white', color: 'black', border: "solid 2px black" }}
                                contentArrowStyle={{ borderRight: '7px solid  black' }}
                                date={t('Skills.work1-duration')}
                                iconStyle={{
                                    background: 'black', color: '#fff'
                                }}
                            >
                                <h3 className="vertical-timeline-element-title">Web Developer Intern - East West Quebec</h3>
                                <h4 className="vertical-timeline-element-subtitle">Longueuil, CA</h4>
                                <p>
                                    {t('Skills.work1-story')}
                                </p>
                                <p>
                                    Full-stack, C#, Blazor Syncfusion, Web API, MVC, EPPlus, Sql Server Management Studio 19
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: 'white', color: 'black', border: "solid 2px black" }}
                                contentArrowStyle={{ borderRight: '7px solid  black' }}
                                date={t('Skills.work2-duration')}
                                iconStyle={{
                                    background: 'black', color: '#fff'
                                }}
                            >
                                <h3 className="vertical-timeline-element-title">Tutor</h3>
                                <h4 className="vertical-timeline-element-subtitle">Longueuil, CA</h4>
                                <p>
                                    {t('Skills.work2-story')}
                                </p>
                                <p>
                                    {t('Skills.work2-description')}
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