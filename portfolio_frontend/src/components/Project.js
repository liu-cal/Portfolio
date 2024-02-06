import CV_fr from "../images/Liu_Caleb_CV_fr.png"
import CV_en from "../images/Liu_Caleb_CV_en.png"
import CV_fr_pdf from "../documents/Liu_Caleb_CV_fr.pdf"
import CV_en_pdf from "../documents/Liu_Caleb_CV_en.pdf"
import VerticalLine from "../components/VerticalLine"

const Project = ({ name, description }) => {
    return (
        <div style={{ marginTop: '5%', marginLeft: '4%', display: 'flex', flexDirection: 'row', gap: '4%', marginRight: '4%' }}>
            <div style={{ fontSize: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <p className='project-title'>{name}</p>
            </div>
            <VerticalLine />
            <div>
                <p className='project-description'>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Project;