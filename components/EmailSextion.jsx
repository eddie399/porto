"use client"
import React, {useState} from 'react';
import github from '../public/github.svg';
import sapp from '../public/sapp.svg';
import Linked from '../public/Link.svg';

import Link from 'next/link';
import Image from 'next/image';
import Swal from 'sweetalert2'




const EmailSextion = () => {
    //const [emailSubmitted, setEmailSubmitted] =useState(false)
   // const handleSubmit = async (e) => {
      //  e.preventDefault();
       // const data = {
      //      email: e.target.email.value,
       //     subject: e.target.subject.value,
     //       message: e.target.message.value,

      //  }
      //  const JSONdata = JSON.stringify(data);
      //  const endpoint = '/api/send';
    
      //  const options = {
        //    method: 'POST',
        //    headers: {
       //         "Content-Type": "application/json",
     //       },
    //        body: JSONdata,
    //    }
     //   const response = await fetch(endpoint, options);
     //   const resData = await response.json();

     //   if (resData.status === 200){
     //       console.log('sent successfully');
    //        setEmailSubmitted(true);
      //  }
   // };
   async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ce593529-ddd4-450d-8bbb-a64a40ed641a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        Swal.fire({
            title: "Sent!",
            text: "The message has been sent successfully!",
            icon: "success"
          });
    }
   }
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4' id="contact">
        
        <div>
            <h5 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className='text-xl font-bold text-cyan-900 dark:text-white my-2'>Let&apos;s Connect</h5>
            <p 
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="1000"

            className='text-cyan-900 dark:text-[#ADB7BE] mb-4 max-w-md'>
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always open.
                Whether its a question or you just wanna say hi,<span className='text-green-400'> i&apos;ll do my best to get back to you.</span>
            </p>
           
        </div>
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label className='text-black dark:text-white block mb-2 text-sm font-medium' htmlFor="email" type='email'>Your Email</label>
                        <input
                        className='bg-cyan-900 bg-opacity-95 dark:bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg text-sm block w-full p-2.5'
                        name='email' type='email' id='email' required placeholder='Email here....'/>
                    </div>
                    <div className='mb-4'>
                        <label className='text-black dark:text-white block mb-2 text-sm font-medium' htmlFor="subject" type='text'>Subject</label>
                        <input
                        className='bg-cyan-900 bg-opacity-95 dark:bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg text-sm block w-full p-2.5'
                        name='subject' type='text' id='subject' required placeholder='Subject here....'/>
                    </div>

                    <div>
                        <label htmlFor="message"
                        className='text-black dark:text-white block mb-2 text-sm font-medium'
                        >Message</label>
                        <textarea 
                        name='message'
                        id='message'
                        className='bg-cyan-900 bg-opacity-95 dark:bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 rounded-lg text-sm block w-full p-2.5'
                        placeholder="Talk to edister here......"
                        rows={9}
                        />
                    </div>
                    <div>
                        <button type='submit' className='bg-cyan-400 dark:bg-orange-700 mt-4 hover:bg-slate-400 text-white rounded-lg font-medium p-2.5 w-full'>
                            SEND MESSAGE
                        </button>
                        
                    </div>
                </form>
            </div>
        
    </section>
  )
}

export default EmailSextion