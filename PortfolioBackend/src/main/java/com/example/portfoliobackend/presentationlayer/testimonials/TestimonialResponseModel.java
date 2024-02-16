package com.example.portfoliobackend.presentationlayer.testimonials;

import com.example.portfoliobackend.datalayer.testimonials.Status;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Value;

@Value
@AllArgsConstructor
@Builder
public class TestimonialResponseModel {
    private String testimonialId;
    private String name;
    private String designation;
    private String message;
    private Status status;
}
