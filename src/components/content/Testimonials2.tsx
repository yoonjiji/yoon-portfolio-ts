import React from 'react';
import Testimonial2 from './Testimonial2';

const Testimonials2: React.FC = () => {
    const testimonialList = [
            {
                "img": "images/testimonials/people1.webp",
                "alt": "people1",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
                "name": "James Kim",
                "company": "Google"
            },
            {
                "img": "images/testimonials/people2.webp",
                "alt": "people1",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
                "name": "James Kim",
                "company": "Google"
            },
            {
                "img": "images/testimonials/people3.webp",
                "alt": "people1",
                "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis similique, unde nam totam quam, nisi odio error amet provident iste modi eos dicta, eum suscipit rem illum inventore sapiente blanditiis?",
                "name": "James Kim",
                "company": "Google"
            },
        ];
        return (
            <ul className="testimonials">
                {testimonialList && testimonialList.map((testimonial) => 
                    <li className="testimonial">
                        <Testimonial2 
                            img = {testimonial.img}
                            alt = {testimonial.alt}
                            description ={testimonial.description}
                            name = {testimonial.name}
                            company = {testimonial.company}
                            />
                    </li>            
                )}
            </ul>
        );
}

export default Testimonials2;