import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function BlogPage() {
    return (
        <div>
            <Navbar />
            <div className='blogpage-container'>
                <div style={{ width: '47%', backgroundColor: '#D5D5D5', height: '36rem', marginTop: '2%' }}>

                </div>
                <div style={{ width: '47%', height: '40rem' }}>
                    <div style={{ width: '80%', margin: 'auto', marginTop: '10%' }}>
                        <h1 style={{ marginTop: '0%' }}>Testimonial</h1>
                        <h3>Feel free to share your thoughts about me!</h3>
                        <form className='blog-form'>
                            <input
                                placeholder='Name'
                                className='blog-input'
                            />
                            <input
                                placeholder='Designation'
                                className='blog-input'
                            />
                            <input
                                placeholder='Message'
                                className='blog-input'
                                style={{ paddingBottom: '20%' }}
                            />
                            <button style={{ backgroundColor: '#61615F', color: '#FFFFFF', width: '20%', paddingTop: '1%', paddingBottom: '1%', marginLeft: '7%', marginTop: '1.5%' }}>submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BlogPage