package com.example.portfoliobackend.datalayer.testimonials;

import jakarta.persistence.Embeddable;
import lombok.Getter;

import java.util.UUID;

@Embeddable
public class TestimonialIdentifier {
    @Getter
    private String testimonialId;

    public TestimonialIdentifier() {
        this.testimonialId = UUID.randomUUID().toString();
    }
}
