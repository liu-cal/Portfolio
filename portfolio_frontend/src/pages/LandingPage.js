import Footer from "../components/Footer"
import PageNavbar from "../components/PageNavbar"
import Profile from "../images/profile.jpg"
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from 'react-i18next';

function LandingPage() {
    const { t, i18n } = useTranslation();
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const options = useMemo(
        () => ({
            fullScreen: false,
            background: {
                color: {
                    value: "#FFFFFF",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#000000",
                },
                links: {
                    color: "#000000",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <div style={{ width: '100%' }}>
                <PageNavbar />
                <div className='landingpage-container'>
                    <div style={{ width: '50%' }}>
                        <Particles
                            id="tsparticles"
                            particlesLoaded={particlesLoaded}
                            options={options}
                        />
                    </div>
                    <div style={{ width: '50%', backgroundColor: '#BFA48D' }}>
                        <div style={{ width: '80%', margin: 'auto' }}>
                            <h2>Caleb Liu</h2>
                            <h3>
                                {t('Home.description')}
                            </h3>
                            <img src={Profile} width="50%" style={{ display: 'block', margin: 'auto', marginTop: '10%' }} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    return <></>;
}

export default LandingPage