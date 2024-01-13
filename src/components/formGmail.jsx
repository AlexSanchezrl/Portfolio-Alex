import { useState } from "react";
import { BsCursorFill } from "react-icons/bs";

function FormGmail() {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');


  let button = (              
  <button className='flex items-center mx-auto rounded-md p-2 text-xl my-6 font-bold text-white bg-red-500 hover:bg-[#003049]'>Submit <BsCursorFill className='ml-2' /></button>
  )

  if(nombre === '' || email === '' || description === ''){
     button = (
      <button type="button" disabled className='flex items-center mx-auto rounded-md p-2 text-xl my-6 font-bold text-white bg-red-500 opacity-60' >Submit <BsCursorFill className='ml-2' /></button>

    )
  }
  return (
    <div>

      <h1 className=' text-4xl text-center p-2 font-bold text-white'>Contact me 🤖</h1>
        <form action='https://formsubmit.co/alexander.snchz07@gmail.com' method="POST"  className='flex flex-col p-2'>

            <label className='label-form'>Type your name</label>
            <input type='text'  className=' bg-orange-400 text-white text-lg  p-2 m-1 outline-none placeholder:text-gray-300' 
            placeholder='Type your name...'
            name='name'
            required
            onChange={(e) => setNombre(e.target.value)}/>
            <label className='label-form'>Description</label>
            <textarea className=' bg-orange-400 text-white text-lg p-2  m-1 outline-none placeholder:text-gray-300' 
            placeholder='Describe what do you want to tell me...'
            rows="10" 
            cols="50"
            onResize="vertical"
            name='description'required
            onChange={(e) => setDescription(e.target.value)}></textarea>
            <label className='label-form'>Type your email</label>
            <input type='email' className=' bg-orange-400 text-white text-lg p-2 m-1 outline-none placeholder:text-gray-300' 
            placeholder='Type your email...'
            name='email' required 
            onChange={(e) => setEmail(e.target.value)}/>
            <input type="hidden" name="_subject" value="Nuevo correo de contactenos!"></input>
            <input type="hidden" name="_autoresponse" value="Muchas gracias por su mensaje, pronto lo revisaremos!"></input>
            {button}
        </form>
    </div>
  )
}

export default FormGmail