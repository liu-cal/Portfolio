package com.example.portfoliobackend.datalayer.testimonials;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TestimonialRepository extends JpaRepository<Testimonial, Integer> {
    Testimonial findByTestimonialIdentifier_TestimonialId(String quoteId);
    List<Testimonial> findAllByStatus(Status status);
}
