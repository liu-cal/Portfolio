package com.example.portfoliobackend.businesslayer.testimonials;

import com.example.portfoliobackend.datalayer.testimonials.Status;
import com.example.portfoliobackend.datalayer.testimonials.Testimonial;
import com.example.portfoliobackend.datalayer.testimonials.TestimonialIdentifier;
import com.example.portfoliobackend.datalayer.testimonials.TestimonialRepository;
import com.example.portfoliobackend.datamapperlayer.testimonials.TestimonialRequestMapper;
import com.example.portfoliobackend.datamapperlayer.testimonials.TestimonialResponseMapper;
import com.example.portfoliobackend.presentationlayer.testimonials.TestimonialRequestModel;
import com.example.portfoliobackend.presentationlayer.testimonials.TestimonialResponseModel;
import com.example.portfoliobackend.util.EmailUtil;
import com.example.portfoliobackend.util.exceptions.TestimonialNotFoundException;
import com.mysql.cj.exceptions.UnableToConnectException;
import lombok.Generated;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import lombok.extern.slf4j.Slf4j;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TestimonialServiceImpl implements TestimonialService{
    private final TemplateEngine templateEngine;
    private final TestimonialRepository testimonialRepository;
    private final EmailUtil emailUtil;
    private final TestimonialRequestMapper testimonialRequestMapper;
    private final TestimonialResponseMapper testimonialResponseMapper;

    @Generated
    public String generateTestimonialConfirmationEmailContentString(String testimonialId) {
        try {
            Context context = new Context();
            context.setVariable("testimonialId", testimonialId != null ? testimonialId : "");

            return templateEngine.process("testimonialConfirmation", context);
        } catch (Exception e) {
            throw new UnableToConnectException("Unable to send email");
        }
    }

    @Override
    public List<TestimonialResponseModel> getAssessedTestimonials() {
        return testimonialResponseMapper.entitiesToResponseModels(testimonialRepository.findAllByStatus(Status.APPROVED));
    }

    @Override
    public TestimonialResponseModel addTestimonial(TestimonialRequestModel testimonialRequestModel) {
        Testimonial newTestimonial = testimonialRequestMapper.requestModelToEntity(testimonialRequestModel);
        newTestimonial.setTestimonialIdentifier(new TestimonialIdentifier());
        newTestimonial.setStatus(Status.ASSESSED);

        Testimonial saved=testimonialRepository.save(newTestimonial);
//        emailUtil.SslEmail("Testimonial Creation Confirmation", generateTestimonialConfirmationEmailContentString(newTestimonial.getTestimonialIdentifier().getTestimonialId()));
        return testimonialResponseMapper.entityToResponseModel(saved);
    }

    @Override
    public TestimonialResponseModel acceptTestimonial(String testimonialId) {
        Testimonial existingTestimonial=testimonialRepository.findByTestimonialIdentifier_TestimonialId(testimonialId);
        if(existingTestimonial==null){
            throw new TestimonialNotFoundException("testimonialId not found: "+testimonialId);
        }

        existingTestimonial.setStatus(Status.APPROVED);

        return testimonialResponseMapper.entityToResponseModel(testimonialRepository.save(existingTestimonial));
    }
}
