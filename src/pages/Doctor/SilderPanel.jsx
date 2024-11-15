
// import React, { useState } from 'react'
// import Modal from 'react-modal'


// const SilderPanel = () => {
//     const [Visable,setVisable] = useState(false);
//     const [Value, setValue] =useState({
//         name:"",
//         phone:"",
//         email:"",
//         day:"",
//         slot:""
//     });

//     console.log(Value);


    
    
//   return (
//     <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
//         <div className='flex items-center justify-between'>
//             <p className='text_para mt-0 font-semibold'>Ticket Price</p>
//             <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingcolor font-bold'>
//                 500Dollor
//             </span>
//         </div>

//         <div className='mt-[30px]'>
//             <p className='text_para mt-0 font-semibold text-headingcolor'>
//                 Availble Time slots:
//             </p>

//             <ul className="mt-3">
//                 <li className='flex items-center justify-between mb-2'>
//                     <p className='text-[15px] leading-6 text-textColor font-semibold'>
//                         Sunday
//                     </p>
//                     <p className='text-[15px] leading-6 text-textColor font-semibold'>
//                         4:30pm - 9:30pm 
//                     </p>
//                 </li>
//                 <li className='flex items-center justify-between mb-2'>
//                     <p className='text-[15px] leading-6 text-textColor font-semibold'>
//                         friday
//                     </p>
//                     <p className='text-[15px] leading-6 text-textColor font-semibold'>
//                         9:00am - 1:30pm 
//                     </p>
//                 </li>
//                 <li className='flex items-center justify-between mb-2'>
//                     <p className='text-[15px] leading-6 text-textColor font-semibold'>
//                         monday
//                     </p>
//                     <p className='text-[15px] leading-6 text-textColor font-semibold'>
//                         11:00am - 6:30pm 
//                     </p>
//                 </li>
//             </ul>
//         </div>
//         <button onClick={()=>setVisable(true)} className='btn px-2 w-full rounded-md'>Book Appointment</button>
//         <Modal isOpen={Visable} onRequestClose={()=>setVisable(false)}>
//             <div className='px-4 mx-auto max-w-screen-md'>
//                 <h1 className='heading text-center'>
//                     Book Your <span className='text-primarycolor'> Appointment</span>
//                 </h1>
//                 <form className='space-y-8' onSubmit={(e)=>{
//                     e.preventDefault();
//                     if(Value.name && Value.email && Value.day && Value.phone && Value.slot){
//                         fetch('http://192.168.0.128:8080/employee/register',{
//                             method:'POST',
//                             body:JSON.stringify({
//                                 id:1,
//                                 name:Value.name,
//                                 email:Value.email,
//                                 phone:Value.phone,
//                                 day:Value.day,
//                                 slot:Value.slot
//                             }),
//                             headers:{
//                                 "Content-type":"application/json",
//                             },
//                         }).then((response)=> response.json()).then((data)=>{
//                             console.log("success!");
//                             console.log(data);
//                         })
//                         .catch((err)=> console.log(err));
//                     }
//                 }}>
//                     <div>
//                         <label htmlFor="name" className='form_label' >
//                         Your name
//                         </label>
//                         <input 
//                         type="text" 
//                         id='name'
//                         placeholder='Enter your Name'
//                         className='form_input mt-1'
//                         value={Value.name} 
//                         onChange={(e)=>{
//                         setValue((currentValue)=>({
//                             ...currentValue,
//                             name:e.target.value
//                         }));
//                         }}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="phone" className='form_label'>
//                         Your Number
//                         </label>
//                         <input 
//                         type="text" 
//                         id='phone'
//                         placeholder='Enter your Mobile number'
//                         className='form_input mt-1'
//                         value={Value.phone} 
//                         onChange={(e)=>{
//                         setValue((currentValue)=>({
//                             ...currentValue,
//                             phone:e.target.value
//                         }));
//                         }}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="email" className='form_label'>
//                         Your Email
//                         </label>
//                         <input 
//                         type="email" 
//                         id='email'
//                         placeholder='example@gmail.com'
//                         className='form_input mt-1'
//                         value={Value.email} 
//                         onChange={(e)=>{
//                         setValue((currentValue)=>({
//                             ...currentValue,
//                             email:e.target.value
//                         }));
//                         }}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="day" className='form_label'>
//                         Select your day
//                         </label>
//                         <select id="day" className='form_input mt-1' 
//                         value={Value.day} 
//                         onChange={(e)=>{
//                         setValue((currentValue)=>({
//                             ...currentValue,
//                             day:e.target.value
//                         }));
//                         }}
//                         >
//                             <option value="">--Select--</option>
//                             <option value="Sunday">Sunday</option>
//                             <option value="Friday">Friday</option>
//                             <option value="Monday">Monday</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label htmlFor="slot" className='form_label'>
//                             Book your Slot
//                         </label>
//                         <select id="slot" className='form_input mt-1' 
//                         value={Value.slot} 
//                         onChange={(e)=>{
//                         setValue((currentValue)=>({
//                             ...currentValue,
//                             slot:e.target.value
//                         }));
//                         }}
//                         >
//                             <option value="">--Select--</option>
//                             <option value="token-1">Token-1</option>
//                             <option value="token-2">Token-2</option>
//                             <option value="token-3">Token-3</option>
//                             <option value="token-4">Token-4</option>
//                             <option value="token-5">Token-5</option>
//                             <option value="token-6">Token-6</option>
//                             <option value="token-7">Token-7</option>
//                             <option value="token-8">Token-8</option>
//                         </select>
//                     </div>
//                     <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
//                 </form>
//             </div>
            
//         </Modal>
//     </div>
//   )
// }

// export default SilderPanel


import React, { useState } from 'react';
import Modal from 'react-modal';

const SilderPanel = () => {
    const [Visable, setVisable] = useState(false);
    const [Value, setValue] = useState({
        name: "",
        phone: "",
        email: "",
        day: "",
        slot: ""
    });

    console.log(Value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue({
            name: "",
            phone: "",
            email: "",
            day: "",
            slot: ""
        })
        if (Value.name && Value.email && Value.day && Value.phone && Value.slot) {
            fetch('http://192.168.1.12:8080/employee/register', {
                method: 'POST',
                body: JSON.stringify({
                    id: 1,  // Check if 'id' is necessary; remove if not required
                    name: Value.name,
                    email: Value.email,
                    phone: Value.phone,
                    day: Value.day,
                    slot: Value.slot
                }),
                headers: {
                    "Content-type": "application/json",
                },
            })
            .then((response) => {
                if (!response.ok) {
                    // Log the entire response object if the request fails
                    console.error("Response Error:", response);
                }
                return response.text();
            }).then((text) => {
                if (text) {
                    return JSON.parse(text); // Manually parse JSON if not empty
                } else {
                    console.log('Empty response');
                    return {}; // Return an empty object or handle accordingly
                }
            })  
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((err) => console.error("Error:", err));
        } else {
            console.error("Validation Error: Missing required fields.");
        }
    };

    return (
        <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
            <div className='flex items-center justify-between'>
                <p className='text_para mt-0 font-semibold'>Ticket Price</p>
                <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingcolor font-bold'>
                    500Dollor
                </span>
            </div>

            <div className='mt-[30px]'>
                <p className='text_para mt-0 font-semibold text-headingcolor'>
                    Available Time slots:
                </p>

                <ul className="mt-3">
                    <li className='flex items-center justify-between mb-2'>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>
                            Sunday
                        </p>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>
                            4:30pm - 9:30pm 
                        </p>
                    </li>
                    <li className='flex items-center justify-between mb-2'>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>
                            Friday
                        </p>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>
                            9:00am - 1:30pm 
                        </p>
                    </li>
                    <li className='flex items-center justify-between mb-2'>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>
                            Monday
                        </p>
                        <p className='text-[15px] leading-6 text-textColor font-semibold'>
                            11:00am - 6:30pm 
                        </p>
                    </li>
                </ul>
            </div>
            <button onClick={() => setVisable(true)} className='btn px-2 w-full rounded-md'>Book Appointment</button>
            <Modal isOpen={Visable} onRequestClose={() => setVisable(false)}>
                <div className='px-4 mx-auto max-w-screen-md'>
                    <div className='flex'>
                        <h1 className='heading'>
                            Book Your <span className='text-primarycolor'> Appointment</span>
                        </h1>
                        <button className='btn'onClick={()=>setVisable(false)}>Close</button>
                    </div>
                    <form className='space-y-8' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className='form_label'>
                                Your name
                            </label>
                            <input 
                                type="text" 
                                id='name'
                                placeholder='Enter your Name'
                                className='form_input mt-1'
                                value={Value.name} 
                                onChange={(e) => {
                                    setValue((currentValue) => ({
                                        ...currentValue,
                                        name: e.target.value
                                    }));
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className='form_label'>
                                Your Number
                            </label>
                            <input 
                                type="text" 
                                id='phone'
                                placeholder='Enter your Mobile number'
                                className='form_input mt-1'
                                value={Value.phone} 
                                onChange={(e) => {
                                    setValue((currentValue) => ({
                                        ...currentValue,
                                        phone: e.target.value
                                    }));
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className='form_label'>
                                Your Email
                            </label>
                            <input 
                                type="email" 
                                id='email'
                                placeholder='example@gmail.com'
                                className='form_input mt-1'
                                value={Value.email} 
                                onChange={(e) => {
                                    setValue((currentValue) => ({
                                        ...currentValue,
                                        email: e.target.value
                                    }));
                                }}
                            />
                        </div>
                        <div>
                            <label htmlFor="day" className='form_label'>
                                Select your day
                            </label>
                            <select 
                                id="day" 
                                className='form_input mt-1' 
                                value={Value.day} 
                                onChange={(e) => {
                                    setValue((currentValue) => ({
                                        ...currentValue,
                                        day: e.target.value
                                    }));
                                }}
                            >
                                <option value="">--Select--</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Friday">Friday</option>
                                <option value="Monday">Monday</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="slot" className='form_label'>
                                Book your Slot
                            </label>
                            <select 
                                id="slot" 
                                className='form_input mt-1' 
                                value={Value.slot} 
                                onChange={(e) => {
                                    setValue((currentValue) => ({
                                        ...currentValue,
                                        slot: e.target.value
                                    }));
                                }}
                            >
                                <option value="">--Select--</option>
                                <option value="token-1">Token-1</option>
                                <option value="token-2">Token-2</option>
                                <option value="token-3">Token-3</option>
                                <option value="token-4">Token-4</option>
                                <option value="token-5">Token-5</option>
                                <option value="token-6">Token-6</option>
                                <option value="token-7">Token-7</option>
                                <option value="token-8">Token-8</option>
                            </select>
                        </div>
                        <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default SilderPanel;
