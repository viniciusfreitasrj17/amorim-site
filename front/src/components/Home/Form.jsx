import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Recaptcha from 'react-recaptcha-that-works';

const Form = ({ init, anim, onSubmit }) => {
  // useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [recipientID, setRecipientID] = useState(0);
  const [recip, setRecip] = useState('');
  const [message, setMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);

  ////////////////////////////////////////////////////////////////////////////

  // CheckBox
  const optionsList = [
    'Google',
    'Facebook',
    'Twitter',
    'Instagram',
    '...',
    'Outros',
  ];
  ////////////////////////////////////////////////////////////////////////////
  //ReCaptcha

  const [tok, setTok] = useState('');

  const onVerify = token => {
    setTok(token);
    console.log('success!', tok);
  }

  const onExpire = () => {
    console.warn('expired!');
  }


  ///////////////////////////////////////////////////////////////////////////
  // Focus And Putting recip
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [])
  
  useEffect(() => {
    setRecip(optionsList[recipientID]);

    setMessageArray(message.split('\n'));
  }, [recipientID, message])

  ////////////////////////////////////////////////////////////////////////////
  // Send Mail

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({
        name,
        email,
        tel,
        recip,
        messageArray,
    }).then(res => {
        console.log('sucesso', res);
    }).catch(err => {
        console.log('error', err);
    });

    setName('')
    setEmail('')
    setTel('')
    setMessage('')
    setRecipientID(0)
}

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
            ref={inputRef}
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
            {optionsList.map((opt, index) => (
              <option key={index} value={index}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div
          className='contact-container-recaptcha row'
        >
          <div 
            className={`form-group contact-form-group ${
              message ? 'col-md-7' : 'col-md-12'
            } col-12`}
          >
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
          
          {message && (
            <Recaptcha
              className="col-md-5 col-12"
              siteKey="<your-recaptcha-public-key>"
              onVerify={onVerify}
              onExpire={onExpire}
              required
            />
          )}


          <button
            type="submit"
            className="col-md-3 col-3 btn btn-primary contact-buttom"
            onClick={handleSubmit}
          >
            Submit
          </button>

        </div>
      </form>
    </motion.div>
  );
};

export default Form;