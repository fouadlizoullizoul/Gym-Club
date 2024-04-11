import React, { useRef } from 'react'
import './Join.css'
import emailjs from  '@emailjs/browser'
function Join() {
    const form =useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_xpdxiox', 'template_dynjoms', form.current, {
            publicKey: 'KBuEZGB5ZbNs3MFF0',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (

    <div className='join' id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className='right-j'>
            <form onSubmit={sendEmail} ref={form} action="" className='container-email'>
                <input type="email" name='user-email' placeholder='Enter Your Email' />
                <button className='btn btn-join'>Join</button>
            </form>
        </div>
    </div>
  )
}

export default Join
