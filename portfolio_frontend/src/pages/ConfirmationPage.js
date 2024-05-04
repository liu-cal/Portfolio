import Footer from "../components/Footer"
import PageNavbar from "../components/PageNavbar"
import { useLocation } from 'react-router-dom';
import axios from "axios"
import { toast } from 'react-toastify'

function ConfirmationPage() {
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let testimonialId = params.get('testimonialId') || '';

    const approveTestimonial = async () => {
        try {
            const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';

            await axios.put(`${backendUrl}/api/v1/portfolio/testimonials/${testimonialId}`)

            toast.success("Testimonial was approved", {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });

        } catch (error) {
            toast.error("Testimonial could not be approved", {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    }

    return (
        <div>
            <PageNavbar />
            <div>
                <button onClick={() => { approveTestimonial() }}>Approve</button>
            </div>
            <Footer />
        </div>
    )
}

export default ConfirmationPage