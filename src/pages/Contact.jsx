// import { name } from '@cloudinary/url-gen/actions/namedTransformation';
// import React from 'react'

// const Contact = () => {

//   const [value, setValue] = useState({
//     email: "",
//     message: "",
//     subject: ""
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setValue({
//       email: "",
//       message: "",
//       subject: ""
//     })
//   }
//   return (
//     <section>
//       <div className='px-4 mx-auto max-w-screen-md'>
//         <h2 className='heading text-center'>Contact Us</h2>
//         <p className='mb-8 lg:mb-16 font-light text-center text_para'>
//           Got a technical issue? want to send feedback about a beta feature?
//           Let us knoW!
//         </p>
//         <form action="#" className='space-y-8' onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="email" className='form_label'>
//               Your Email
//             </label>
//             <input
//               type="email"
//               id='email'
//               placeholder='example@gmail.com'
//               className='form_input mt-1'
//               value={value.email}
//               onChange={(e) => {
//                 setValue((currentValue) => ({
//                   ...currentValue,
//                   email: e.target.value
//                 }));
//               }}
//             />
//           </div>
//           <div>
//             <label htmlFor="subject" className='form_label'>
//               Subject
//             </label>
//             <input
//               type="text"
//               id='subject'
//               placeholder='let us know how we can help you'
//               className='form_input mt-1'
//               value={value.subject}
//               onChange={(e) => {
//                 setValue((currentValue) => ({
//                   ...currentValue,
//                   subject: e.target.value
//                 }));
//               }}
//             />
//           </div>
//           <div className='sm:col-span-2'>
//             <label htmlFor="message" className='form_label'>
//               Your Message
//             </label>
//             <textarea
//               rows='6'
//               type="text"
//               id='message'
//               placeholder='leave a comment....'
//               className='form_input mt-1'
//               value={value.message}
//               onChange={(e) => {
//                 setValue((currentValue) => ({
//                   ...currentValue,
//                   message: e.target.value
//                 }));
//               }}
//             />
//           </div>
//           <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
//         </form>
//       </div>
//     </section>
//   )
// }

// export default Contact

import React, { useState } from 'react'; // Add useState import

const Contact = () => {

  const [value, setValue] = useState({
    email: "",
    message: "",  // Fix: Proper field name for message
    subject: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setValue({
      email: "",
      message: "",
      subject: ""
    })
    if(value.email && value.message && value.subject){
      fetch('http://192.168.0.123:8080/contact/register',{
        method:'POST',
        body: JSON.stringify({
          email: value.email,
          message: value.message,
          subject: value.subject
        }),
        headers:{
          "Content-type": "application/json",
        },
        
      })
      .then((response) => {
        if (!response.ok) {
            console.error("Response Error:", response);
        }
        return response.text();
        }).then((text) => {
            if (text) {
                return JSON.parse(text); 
            } else {
                console.log('Empty response');
                return {}; 
            }
        })  
        .then((data) => {
            console.log("Success:", data);
        })
        .catch((err) => console.error("Error:", err));
    }else{
      console.error("Validation Error: Missing required fields.");
    }
  }

  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text_para'>
          Got a technical issue? want to send feedback about a beta feature?
          Let us know!
        </p>
        <form action="#" className='space-y-8' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className='form_label'>
              Your Email
            </label>
            <input
              type="email"
              id='email'
              placeholder='example@gmail.com'
              className='form_input mt-1'
              value={value.email}
              onChange={(e) => {
                setValue((currentValue) => ({
                  ...currentValue,
                  email: e.target.value
                }));
              }}
            />
          </div>
          <div>
            <label htmlFor="subject" className='form_label'>
              Subject
            </label>
            <input
              type="text"
              id='subject'
              placeholder='Let us know how we can help you'
              className='form_input mt-1'
              value={value.subject}
              onChange={(e) => {
                setValue((currentValue) => ({
                  ...currentValue,
                  subject: e.target.value
                }));
              }}
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="message" className='form_label'>
              Your Message
            </label>
            <textarea
              rows='6'
              type="text"
              id='message'
              placeholder='Leave a comment...'
              className='form_input mt-1'
              value={value.message}  
              onChange={(e) => {
                setValue((currentValue) => ({
                  ...currentValue,
                  message: e.target.value  // Fix: Corrected to message instead of mess
                }));
              }}
            />
          </div>
          <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
