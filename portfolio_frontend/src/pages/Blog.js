import Footer from "../components/Footer"
import PageNavbar from "../components/PageNavbar"
import { toast } from 'react-toastify'
import axios from "axios"
import { useState, useEffect } from "react"
import Testimonial from '../components/Testimonial';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

function BlogPage() {
    const { t, i18n } = useTranslation();
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
            const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';

            const response = await axios.get(`${backendUrl}/api/v1/portfolio/testimonials`);

            const mappedTestimonials = response.data.map((testimonial) => ({
                testimonialId: testimonial.testimonialId,
                name: testimonial.name,
                designation: testimonial.designation,
                message: testimonial.message,
                status: testimonial.status
            }));

            setTestimonials(mappedTestimonials)

        } catch (error) {
            toast.error(t('toast-loading-error'), {
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
            toast.error(t('toast-validation-error'), {
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

        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080';

        try {
            // Make a POST request using Axios
            const response = await axios.post(
                `${backendUrl}/api/v1/portfolio/testimonials`,
                testimonialForm,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )

            const { message, testimonialId, name, designation } = response.data;

            emailjs.send('service_94r0tcu', 'template_puvtcsf', {
                message: message,
                testimonial_id: testimonialId,
                name: name,
                designation: designation
            }, '3mpcJXT0ps68PAu6q')
                .then((result) => {
                }, (error) => {
                });

            toast.success(t('toast-success'), {
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
            toast.error(t('toast-post-error'), {
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
            <PageNavbar />
            <div className='blogpage-container'>
                <div className='blogpage-list'>
                    {currentTestimonials.map((testimonial) => (
                        testimonial.status === "APPROVED" &&
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
                <div className='blogpage-form'>
                    <div style={{ width: '80%', margin: 'auto', marginTop: '10%' }}>
                        <h1 style={{ marginTop: '0%' }}>
                            {t('Blog.blog-title')}
                        </h1>
                        <h3>
                            {t('Blog.blog-subtitle')}
                        </h3>
                        <form className='blog-form' onSubmit={handleSubmit}>
                            <input
                                placeholder={t('Blog.blog-name')}
                                className='blog-input'
                                id="name"
                            />
                            <input
                                placeholder={t('Blog.blog-designation')}
                                className='blog-input'
                                id="designation"
                            />
                            <textarea
                                placeholder='Message'
                                className='blog-input'
                                style={{ paddingBottom: '20%' }}
                                id="message"
                            />
                            <button type="submit" className='submit-btn'>
                                {t('Blog.blog-btn')}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage