import React from 'react';
import NavBar from '../Containers/NavBar';

const Home = props => {
	return (
		<div className='Home'>
			<div className='charlotte'/>
			<div className='superimposed-text'>
				<div className='text'>
					We fill temporary positions in many industries with a deep
					bench of ready-to-go Talent.
				</div>
			</div>
			<div className='info-section'>
				<div className='title'>
					The Agency With an Innovative Approach to Staffing
				</div>
				<div className='responsive'>
					<span className='header'>Responsive</span>
					We are always available to respond to your needs 24/7
				</div>
				<div className='service'>
					<span className='header'>Award Winning Service</span>
					Our dedication to our customers has been recognized by the
					local business community.
				</div>
				<div className="local-expertise">
					<span className='header'>Local Expertise</span>
					Unlike many national agencies, we focus on our local
					communities to provide you the best talent.
				</div>
			</div>
		</div>
	);
};

export default Home;
