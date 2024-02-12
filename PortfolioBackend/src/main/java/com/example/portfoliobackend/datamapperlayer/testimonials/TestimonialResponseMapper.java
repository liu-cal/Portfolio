package com.example.portfoliobackend.datamapperlayer.testimonials;

import com.example.portfoliobackend.datalayer.testimonials.Testimonial;
import com.example.portfoliobackend.presentationlayer.testimonials.TestimonialResponseModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TestimonialResponseMapper {
    @Mappings({
            @Mapping(expression = "java(testimonial.getTestimonialIdentifier().getTestimonialId())", target = "testimonialId"),
            @Mapping(expression = "java(testimonial.getName())", target = "name"),
            @Mapping(expression = "java(testimonial.getDesignation())", target="designation"),
            @Mapping(expression = "java(testimonial.getMessage())", target = "message")
    })
    TestimonialResponseModel entityToResponseModel(Testimonial testimonial);
    List<TestimonialResponseModel> entitiesToResponseModels(List<Testimonial> testimonials);
}
