import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from "react-google-recaptcha";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const DELAY = 1500;

const Form = ({ init, anim }) => {
  // useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const [recipientID, setRecipientID] = useState(1);

  ////////////////////////////////////////////////////////////////////////////

  // ReCaptcha
  const [callback, setCallback] = useState('not fired');
  const [value, setValue] = useState('[empty]');
  const [load, setLoad] = useState(false);
  const [expired, setExpired] = useState('false');

  useEffect(() => {
    setTimeout(() => {
      setLoad(true);
    }, DELAY)
   }, [])
   
  const handleChange = value => {
    console.log("Captcha value:", value);
    setValue(value);
    // if value is null recaptcha expired
    if (value === null) setExpired('true');
  };

  const asyncScriptOnLoad = () => {
    setCallback("called!");
  };

  // console.log({
  //   'callback': callback,
  //   'value': value,
  //   'expired': expired
  // })


  ////////////////////////////////////////////////////////////////////////////

  // CheckBox
  const optionsList = [
    { id: 1, name: 'Google' },
    { id: 2, name: 'Facebook' },
    { id: 3, name: 'Twitter' },
    { id: 4, name: 'Instagram' },
    { id: 5, name: '...' },
    { id: 6, name: 'Outros' },
  ];
  ////////////////////////////////////////////////////////////////////////////


  return (
    <motion.div
      initial={{ scale: init, opacity: init }}
      animate={{
        opacity: anim,
        scale: anim,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        opacity: { duration: .5 }
      }}
    > 
      <form className='col-11 col-md-8 col-xl-9 contact-form'>

        <h1 className='contact-title'>Entre em Contato Conosco</h1>

        <div className="form-group contact-form-group">
          <label 
            className='contact-label' 
            htmlFor="example-text-input"
          >Nome *</label>
          <input
            className="form-control"
            type="text"
            value={name}
            id="name"
            name='name'
            placeholder="Coloque seu Nome"
            required
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group contact-form-group">
          <label 
            className='contact-label' 
            htmlFor="exampleInputEmail1"
          >E-mail *</label>
          <input
            className="form-control"
            type="email"
            value={email}
            id="exampleInputEmail1"
            name='email'
            aria-describedby="emailHelp"
            placeholder="Coloque seu e-mail"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <small
            id="emailHelp"
            className="form-text 
              text-muted"
          >
            We'll never share your email with anyone else.
            </small>
        </div>

        <div className="form-group contact-form-group">
          <label 
            className="contact-label" 
            htmlFor="example-tel-input"
          >Telefone</label>
          <input
            className="form-control"
            type="tel"
            value={tel}
            id="example-tel-input"
            name='tel'
            placeholder="(00) 00000-0000"
            onChange={e => setTel(e.target.value)}
          />
        </div>

        <div className="form-group contact-form-group">
          <label 
            className='contact-label' 
            htmlFor="exampleSelect1"
          >Como nos encontrou?</label>
          <select
            className="form-control"
            value={recipientID}
            id="exampleSelect1"
            name='options'
            onChange={e => setRecipientID(Number(e.target.value))}
          >
            {optionsList.map(opt => (
              <option key={opt.id} value={opt.id}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group contact-form-group">
          <label 
            className='contact-label' 
            htmlFor="exampleTextarea"
          >Mensagem *</label>
          <textarea
            className="form-control"
            value={message}
            id="exampleTextarea"
            name='message'
            rows="2"
            onChange={e => setMessage(e.target.value)}
            placeholder="Coloque sua Mensagem..."
            required
          ></textarea>
        </div>
        
        <div 
          className='row'
          style={{ 
            display: 'flex',
            alignItems: 'center',
            padding: '.2rem 5rem' //remove in Mobile
          }}
        >
          {load && (
            <ReCAPTCHA
              style={{ display: "inline-block" }}
              className='col-md-8 col-12'
              theme="dark"
              sitekey={TEST_SITE_KEY}
              onChange={handleChange}
              asyncScriptOnLoad={asyncScriptOnLoad}
            />
          )}
        
          <button 
            style={{marginTop: '1rem'}} // add margin: 0 auto; in Mobile
            type="submit" 
            className="col-md-3 col-3 btn btn-primary"
          >
            Submit
          </button>
        </div>

      </form>
    </motion.div>
  );
};

export default Form;