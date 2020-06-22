import React, {useState} from 'react';
import './JobSeekers.scss';
import { Button, Input } from 'semantic-ui-react';

const JobSeekers = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');
  const [flash, setFlash] = useState('');
  const [message, setMessage] = useState({message: "", class:""});

  let formData = new FormData();

  const handleSubmit = () => {
    if (firstName!=='' && lastName!=='' && email!=='' && resume.type === "application/pdf") {
      const droppackage = JSON.stringify({firstName: firstName, lastName: lastName, email: email});
      formData.append('resume', resume)
      formData.append('info', droppackage)
      fetch(`http://localhost:3000/api/v1/candidates`, {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(body => {
        console.log(body);
        if (body.status === 'ok') {
          setMessage({message: "Resume Uploaded Successfully", class: "happy-notice"})
          setFirstName('')
          setLastName('')
          setEmail('')
          document.getElementById("resumeField").value = "";
        } else {
          debugger
          setMessage({message: "Error on Upload", class: "sad-notice"})
        }
      })
    } else {
      setMessage({message: "Please fill out all forms and attach resume as a PDF", class: "sad-notice"})
    }
  }


      return (
        <div className='ContactUs'>
        <h1 className='title'>Contact Us</h1>
        <h2>Hello</h2>
        <div className={message.class}>
        {message.message}
        </div>
        <div className="inputs">
        <Input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='First Name' />
        <Input value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Last Name' />
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' />
        <Input type="file" id="resumeField" onChange={e => setResume(e.target.files[0])} />
        </div>
        <Button onClick={() => handleSubmit()}>Submit</Button>
        </div>
      );
    };

    export default JobSeekers;
