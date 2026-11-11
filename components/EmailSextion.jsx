"use client"
import React, {useState} from 'react';
import Swal from 'sweetalert2'




const EmailSextion = () => {
    const [status, setStatus] = useState('idle');
   async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');
        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
                        const response = await fetch("/api/send", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                                        body: JSON.stringify(Object.fromEntries(formData))
            });
            const result = await response.json();

                        if (!response.ok || !result.success) {
                throw new Error(result.message || "Unable to send your message.");
            }

            setStatus('success');
                        form.reset();
            Swal.fire({
                    title: "Sent!",
                    text: "The message has been sent successfully!",
                    icon: "success"
                });
        } catch (error) {
            setStatus('error');
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
I&apos;m always open to discussing new projects,
 creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through any of the following channels:

                <p className='pt-4 border-t dark:border-white border-cyan-900 mt-1'>+265 888 030 809</p>
                <p>+265 991 175 732</p>
            </p>
           
            

        </div>
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
                <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                        className="hidden"
                    />
                    <div className='mb-6'>
                        <label className='text-black dark:text-white block mb-2 text-sm font-medium' htmlFor="email" type='email'>Your Email</label>
                        <input
                        className='block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-slate-900 placeholder-slate-500 dark:border-[#33353F] dark:bg-[#18191E] dark:text-gray-100 dark:placeholder-[#9CA2A9]'
                        name='email' type='email' id='email' required maxLength={254} placeholder='Email here....'/>
                    </div>
                    <div className='mb-4'>
                        <label className='text-black dark:text-white block mb-2 text-sm font-medium' htmlFor="subject" type='text'>Subject</label>
                        <input
                        className='block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-slate-900 placeholder-slate-500 dark:border-[#33353F] dark:bg-[#18191E] dark:text-gray-100 dark:placeholder-[#9CA2A9]'
                        name='subject' type='text' id='subject' required maxLength={200} placeholder='Subject here....'/>
                    </div>

                    <div>
                        <label htmlFor="message"
                        className='text-black dark:text-white block mb-2 text-sm font-medium'
                        >Message</label>
                        <textarea 
                        name='message'
                        id='message'
                        required
                        maxLength={10000}
                        className='block w-full rounded-lg border border-slate-300 bg-white p-2.5 text-sm text-slate-900 placeholder-slate-500 dark:border-[#33353F] dark:bg-[#18191E] dark:text-gray-100 dark:placeholder-[#9CA2A9]'
                        placeholder="Talk to edister here......"
                        rows={9}
                        />
                    </div>
                    <div>
                                                <button type='submit' disabled={status === 'sending'} className='mt-4 w-full rounded-lg bg-orange-700 p-2.5 font-medium text-white hover:bg-orange-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-orange-700 dark:hover:bg-orange-600'>
                                                        {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                        </button>
                                                <p
                                                    role="status"
                                                    aria-live="polite"
                                                    className={`mt-3 text-sm ${status === 'error' ? 'text-red-400' : 'text-emerald-400'}`}
                                                >
                                                    {status === 'success' && 'Your message was sent successfully.'}
                                                    {status === 'error' && 'Something went wrong. Please try again or contact me directly.'}
                                                </p>
                        
                    </div>
                </form>
            </div>
        
    </section>
  )
}

export default EmailSextion