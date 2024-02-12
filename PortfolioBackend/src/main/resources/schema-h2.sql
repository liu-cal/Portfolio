CREATE TABLE testimonials (
    id int auto_increment primary key,
    testimonial_id VARCHAR(36) NOT NULL,
    name VARCHAR(255) NULL,
    designation VARCHAR(255) NULL,
    message VARCHAR(255) NULL,
    constraint testimonial_id unique (testimonial_id)
    );