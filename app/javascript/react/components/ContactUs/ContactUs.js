import React, {useState} from 'react';
// import './ContactUs.scss';
import { Button, Input } from 'semantic-ui-react';

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [company, setCompany] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    const droppackage = {firstName, lastName, email, phone, location, company, title, message};
    console.log(droppackage);
  }

	return (
		<div className='ContactUs'>
			<h1 className='title'>Contact Us</h1>
			<h2>Hello</h2>
			<div className="inputs">
				<Input onChange={e => setFirstName(e.target.value)} placeholder='First Name' />
				<Input onChange={e => setLastName(e.target.value)} placeholder='Last Name' />
				<Input onChange={e => setEmail(e.target.value)} placeholder='Email' />
				<Input onChange={e => setPhone(e.target.value)} placeholder='Phone' />
				<Input onChange={e => setCompany(e.target.value)} placeholder='Company' />
				<Input onChange={e => setLocation(e.target.value)} placeholder='Location' />
				<Input onChange={e => setTitle(e.target.value)} placeholder='Title' />
				<Input onChange={e => setMessage(e.target.value)} placeholder='Message' />
			</div>
			<Button onClick={() => handleSubmit()}>Submit</Button>
		</div>
	);
};

export default ContactUs;
