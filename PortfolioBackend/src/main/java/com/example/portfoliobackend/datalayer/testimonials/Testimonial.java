package com.example.portfoliobackend.datalayer.testimonials;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Entity
@Table(name="testimonials")
@Data
@Builder
@AllArgsConstructor
public class Testimonial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Embedded
    private TestimonialIdentifier testimonialIdentifier;
    private String name;
    private String designation;
    private String message;

    public Testimonial() {
        this.testimonialIdentifier=new TestimonialIdentifier();
    }

    public Testimonial(String name, String designation, String message) {
        this.testimonialIdentifier=new TestimonialIdentifier();
        this.name = name;
        this.designation = designation;
        this.message = message;
    }
}
