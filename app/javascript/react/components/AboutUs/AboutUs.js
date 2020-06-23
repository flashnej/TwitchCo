import React from 'react';
// import './AboutUs.scss';
import { Button } from 'semantic-ui-react';

const AboutUs = () => {
	return (
		<div className='AboutUs'>
			<div className='title'>About Us</div>
			<div className='testimony-container'>
				<div className='testimony'>
					Not only did Rushmore connect us with hard-working
					talent, but they also helped provide their own training.
					Rushmore really understands our company and its needs.
				</div>
				<div className='attribution'>
					— Jan Esterlis, Rushmore Client
				</div>
			</div>
			<div className='text-block'>
				Your need for quality talent is our reason for being. This
				driving mission has been at our core from the onset. When we
				started in 2000, we were a team of forward-thinking
				entrepreneurs determined to find a better way to connect the
				best and brightest talent with companies looking for future
				leaders. We still firmly believe in this philosophy.
			</div>

			<div className='text-block'>
				Throughout the years, our passion, credibility and grit have
				been the foundation and prowess of Rushmore. Though our focus
				areas have continued to mindfully evolve, our unyielding
				commitment to relationships and our customers’ needs remains
				consistent and firmly rooted in our core values.
			</div>

			<div className='text-block'>
				Rushmore is proud to be part of the Eight Eleven family of
				brands. Though our industries and focus vary, each Eight Eleven
				division has been built with our customers' evolving needs in
				mind. Across each brand and division, our holistic commitment to
				these core values remains unwavering.
			</div>

			<div className='header'>
				<span className='orange'>BEYOND</span> THE EXPECTED.
			</div>

			<div className='contact-us-push'>
				ARE YOU READY TO FIND QUALITY TALENT TO MEET YOUR STAFFING
				NEEDS?
			</div>
			<Button href='/contact-us'>We can help!</Button>

			<div className='employee-testimony'>
				I’m proud to work for a company that gives back to the
				community. From our annual Day of Service to our quarterly Be
				Giving program, Rushmore is always thinking about others.
			</div>
			<div className='employee-attribution'>- Rushmore EMPLOYEE</div>
		</div>
	);
};

export default AboutUs;
