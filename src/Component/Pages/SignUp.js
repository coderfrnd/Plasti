import React ,{useState} from 'react'
import './Signup.css'


function SignUp() {
  const[formstate,setformstate]=useState({});
  // const config={
  //   Host : "smtp.elasticemail.com",
  //   Username : "username",
  //   Password : "password",
  //   To : 'them@website.com',
  //   From : "you@isp.com",
  //   Subject : "This is the subject",
  //   Body : "And this is the body"
  // }
  const changeHandler=(event)=>{
    setformstate({...formstate,[event.target.name]:event.target.value});

  };
  const submithandler =(event)=> {
    event.preventDefault();
    const config={
      Host : "smtp.gmail.com",
      Username : "sabonir245@djpich.com",
      Password : "password",
      To : 'noobmeme39@gmail.com',
      From : formstate.Email,
      Subject : "This is the subject",
      Body : '${formstate.name} connected to you',
    };
    if(window.Email){
      window.Email.send(config).then(()=> alert("email sent suceesfully"))
    };

  }


  return (
    <div className='container'>
      {/* <h1 className='sign-up'>SIGN UP</h1> */}
      <form className='form' onSubmit={submithandler}>
        {/* <marquee direction="right"><h3>GET IN TOUCH</h3></marquee> */}
        <h3>CONTACT-US</h3>
        <input type="text" name='name' placeholder='Your name' value={formstate.name || ''} onChange={changeHandler} required/>
        <input type="text" name='email' placeholder='Your Email' value={formstate.email || ''} onChange={changeHandler} required/>
        <input type="text" name='mob'  placeholder='Contact number' value={formstate.mob || ''} onChange={changeHandler}  required/>
        <textarea name="message" id="message" cols="30" rows="4" placeholder='How can i help you'></textarea>
        {/* <input type="text" id='message' placeholder='How can i help you'required/> */}
        <button  type='submit'>Submit</button>

      </form>
     
     

    </div>
    // <script></script>
  )
}

export default SignUp