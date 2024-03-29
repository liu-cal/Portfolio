package com.example.portfoliobackend.businesslayer.testimonials;

import com.example.portfoliobackend.presentationlayer.testimonials.TestimonialRequestModel;
import com.example.portfoliobackend.presentationlayer.testimonials.TestimonialResponseModel;

import java.util.List;

public interface TestimonialService {
    List<TestimonialResponseModel> getAssessedTestimonials();
    TestimonialResponseModel addTestimonial(TestimonialRequestModel testimonialRequestModel);
    TestimonialResponseModel acceptTestimonial(String testimonialId);
}
