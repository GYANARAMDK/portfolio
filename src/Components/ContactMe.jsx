import  { forwardRef, useState } from 'react'

const  ContactMe= forwardRef((props,ref)=> {
    const [formdata,setformdata]=useState({name:'',email:'',message:''})
    const togglechange= (e)=>{
          const { name,value }= e.target;
          setformdata(prev=>({...prev,[name]:value})) 
          console.log(JSON.stringify(formdata))
    }
    const onsubmithandle= async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formdata),
            });
      
            if (response.ok) {
              alert('Email sent successfully!');
            } else {
              alert('Failed to send email');
            }
          } catch (error) {
            console.log(error)
            alert('An error occurred');
          }
    }
  return (
    <div ref={ref}>
        <div className="rounded flex items-center justify-center m-3 border border-[#808080]  p-3 ">
            <h1 className="text-2xl font-bold">
                Get In Touch 
            </h1>
        </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 border border-[#808080] p-3 m-4 rounded '>
          <div className='flex flex-col gap-8  items-center  justify-center '>
                      <h1 className='text-xl font-semibold '>Contact Informotion </h1>
                      <h1 className='text-md '>gyanaramdhaka@gmail.com</h1>
                      <h1 className="text-md">+91 8290970712</h1>
                      <h1 className='text-md'>Rajasthan, India</h1>
          </div>
          <div className='flex flex-col gap-16 pl- items-start justify-start w-full '>
                   <div className='text-2xl font-bold border border-[#808080] p-2 rounded '>Please Submit Form </div>
                   <input type="text" placeholder='enter your name 'className='border border-[#808080] w-full p-2 rounded  
                   ' value={formdata.name} onChange={togglechange} name='name' required />
                   <input type="email" placeholder='enter your email 'className='border border-[#808080] w-full p-2 rounded  '
                   value={formdata.email} onChange={togglechange} name='email' required />
                   <textarea type="text" placeholder='message 'className='border border-[#808080] w-full p-2 rounded  '
                   value={formdata.message} onChange={togglechange} name='message' required />
                   <button  onClick={onsubmithandle} className='border border-[#808080] rounded w-full p-2 rounded hover:bg-blue-700'> send message </button>
          </div>
      </div>
    </div>
  )
});
ContactMe.displayName='ContactMe';
export default ContactMe;
