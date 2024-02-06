import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const { ime, mail , message } = event.target;
    let isOk = true;
    if(ime.value === ""){
      alert('Prosim vpišite ime')
      isOk = false;
    }else if(mail.value === ""){
      alert('Prosim vpišite e-mail')
      isOk = false;
    }else if(message.value === ""){
      alert('Prosim vpišite sporočilo')
      isOk = false;
    }
    if(isOk){
      console.log(ime.value, mail.value, message.value);
      //TODO: prek api calla (https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs) zapisi na file in ga shrani
      
      ime.value = "";
      mail.value = "";
      message.value = "";
      alert('Sporočilo je bilo poslano')
    }
  }
  return (
    <div className='footer-container'>
        <section className='information'>
            <p>Te kaj zanima?</p>
            <form onSubmit={handleSubmit}>
              <input className='imput-boxes' name='ime' type='text' maxLength={15} placeholder='IME'></input>
              <input className='imput-boxes'name='mail' type='email' placeholder='E-MAIL'></input>
              <textarea className='imput-boxes main-box' name='message' placeholder='SPOROČILO' maxLength={300}></textarea>
              <input className='imput-boxes submit' type='submit' name='POŠLJ'></input>
            </form>
        </section>
        <ul className='socials'>
            <Link className='social-links firstLink' to="/">040 696 969</Link>
            <Link className='social-links' to="/">skavti.bovec1@gmail.com</Link>
            <Link className='social-links' to="/">Skavti Bovec 1</Link>
            <Link className='social-links' to="/">Skavti Bovec 1</Link>
            <div className='SkavtiLogo' ><a href='https://skavti.si/' target='_blank' rel="noreferrer"></a></div>
        </ul>
        
    </div>
  )
}

export default Footer