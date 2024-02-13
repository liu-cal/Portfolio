function Testimonial({ name, designation, message }) {
    return (
        <div className="testimonial">
            <h2>{name}</h2>
            <h3>{designation}</h3>
            <p>“{message}”</p>
        </div>
    );
}

export default Testimonial;