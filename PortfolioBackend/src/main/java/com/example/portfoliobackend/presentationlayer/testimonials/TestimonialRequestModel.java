package com.example.portfoliobackend.presentationlayer.testimonials;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@Value
@AllArgsConstructor
@Builder
public class TestimonialRequestModel {
    private String name;
    private String designation;
    private String message;
}
