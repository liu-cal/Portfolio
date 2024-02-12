package com.example.portfoliobackend.presentationlayer.testimonials;

import com.example.portfoliobackend.businesslayer.testimonials.TestimonialService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;

@RestController
@RequestMapping(path="api/v1/portfolio/testimonials")
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000", "https://caleb-portfolio.social"}, allowCredentials = "true")
public class TestimonialController {
    private final TestimonialService testimonialService;

    @GetMapping
    public ResponseEntity<List<TestimonialResponseModel>> getTestimonials(){
        return ResponseEntity.ok(testimonialService.getTestimonials());
    }

    @PostMapping
    public ResponseEntity<TestimonialResponseModel> addTestimonial(@RequestBody TestimonialRequestModel testimonialRequestModel){
        return ResponseEntity.status(CREATED).body(testimonialService.addTestimonial(testimonialRequestModel));
    }
}
