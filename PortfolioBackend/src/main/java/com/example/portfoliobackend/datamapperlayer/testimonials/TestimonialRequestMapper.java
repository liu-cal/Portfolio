package com.example.portfoliobackend.datamapperlayer.testimonials;

import com.example.portfoliobackend.datalayer.testimonials.Testimonial;
import com.example.portfoliobackend.presentationlayer.testimonials.TestimonialRequestModel;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface TestimonialRequestMapper {
    @Mappings({
            @Mapping(target = "id", ignore = true),
            @Mapping(target = "testimonialIdentifier", ignore = true),
            @Mapping(target = "status", ignore = true)
    })
    Testimonial requestModelToEntity(TestimonialRequestModel testimonialRequestModel);
}
