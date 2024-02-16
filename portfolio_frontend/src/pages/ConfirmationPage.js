import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useLocation } from 'react-router-dom';
import axios from "axios"
import { toast } from 'react-toastify'

function ConfirmationPage() {
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let testimonialId = params.get('testimonialId') || '';

    const approveTestimonial = async () => {
        try {
            await axios.put(`http://localhost:8080/api/v1/portfolio/testimonials/${testimonialId}`)

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
            <Navbar />
            <div>
                <button onClick={() => { approveTestimonial() }}>Approve</button>
            </div>
            <Footer />
        </div>
    )
}

export default ConfirmationPage