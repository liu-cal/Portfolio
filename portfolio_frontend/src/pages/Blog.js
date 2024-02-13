import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { toast } from 'react-toastify'
import axios from "axios"
import { useState, useEffect } from "react"
import Testimonial from '../components/Testimonial';

function BlogPage() {
    const [testimonials, setTestimonials] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const testimonialsPerPage = 2;
    const indexOfLastTestimonial = currentPage * testimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
    const currentTestimonials = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onNext = () => {
        const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);
        setCurrentPage((prevPage) => prevPage < totalPages ? prevPage + 1 : prevPage);
    };

    const onPrevious = () => {
        setCurrentPage((prevPage) => prevPage > 1 ? prevPage - 1 : prevPage);
    };

    const userLightModeOrDarkMode = () => {
        let mediaQueryObj = window.matchMedia('(prefers-color-scheme: dark)');
        if (mediaQueryObj.matches)
            return 'dark';
        else
            return 'light'

    }

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/portfolio/testimonials');

            console.log(response)
            const mappedTestimonials = response.data.map((testimonial) => ({
                testimonialId: testimonial.testimonialId,
                name: testimonial.name,
                designation: testimonial.designation,
                message: testimonial.message
            }));

            setTestimonials(mappedTestimonials)

        } catch (error) {
            toast.error('Error Loading Data', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: userLightModeOrDarkMode(),
            })
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        let testimonialName = document.getElementById('name').value
        let testimonialDesignation = document.getElementById('designation').value
        let testimonialMessage = document.getElementById('message').value

        if (testimonialName === "" || testimonialDesignation === "" || testimonialMessage === "") {
            toast.error('One of the fields is empty !', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })

            return
        }

        const testimonialForm = {
            name: testimonialName,
            designation: testimonialDesignation,
            message: testimonialMessage
        }

        try {
            // Make a POST request using Axios
            const response = await axios.post(
                `http://localhost:8080/api/v1/portfolio/testimonials`,
                testimonialForm,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            console.log('Response:', response.data)

            toast.success('Testimonial sent successfully !', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
        } catch (error) {
            console.error('Error:', error)
            toast.error('Error something happened', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            })
        }
    }

    return (
        <div>
            <Navbar />
            <div className='blogpage-container'>
                <div style={{ width: '47%', backgroundColor: '#D5D5D5', height: '36rem', marginTop: '2%' }}>
                    {currentTestimonials.map((testimonial) => (
                        <Testimonial
                            key={testimonial.testimonialId}
                            name={testimonial.name}
                            designation={testimonial.designation}
                            message={testimonial.message}
                        />
                    ))}
                    <div className="pagination">
                        {testimonials.length > testimonialsPerPage && (
                            <ul>
                                {/* Left navigation arrow */}
                                <li
                                    className={currentPage === 1 ? 'disabled' : ''}
                                    onClick={onPrevious}
                                >
                                    <span>←</span>
                                </li>
                                {/* Page numbers */}
                                {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, index) => (
                                    <li
                                        key={index}
                                        onClick={() => paginate(index + 1)}
                                        className={currentPage === index + 1 ? 'active' : ''}
                                    >
                                        {index + 1}
                                    </li>
                                ))}
                                {/* Right navigation arrow */}
                                <li
                                    className={currentPage === Math.ceil(testimonials.length / testimonialsPerPage) ? 'disabled' : ''}
                                    onClick={onNext}
                                >
                                    <span>→</span>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div style={{ width: '47%', height: '40rem' }}>
                    <div style={{ width: '80%', margin: 'auto', marginTop: '10%' }}>
                        <h1 style={{ marginTop: '0%' }}>Testimonial</h1>
                        <h3>Feel free to share your thoughts about me!</h3>
                        <form className='blog-form' onSubmit={handleSubmit}>
                            <input
                                placeholder='Name'
                                className='blog-input'
                                id="name"
                            />
                            <input
                                placeholder='Designation'
                                className='blog-input'
                                id="designation"
                            />
                            <textarea
                                placeholder='Message'
                                className='blog-input'
                                style={{ paddingBottom: '20%' }}
                                id="message"
                            />
                            <button type="submit" style={{ backgroundColor: '#61615F', color: '#FFFFFF', width: '20%', paddingTop: '1%', paddingBottom: '1%', marginLeft: '7%', marginTop: '1.5%' }}>submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage