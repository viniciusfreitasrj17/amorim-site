import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Recaptcha from 'react-recaptcha-that-works';
import { RiEmotionHappyLine, RiEmotionUnhappyLine } from 'react-icons/ri';

const Form = ({ init, anim, onSubmit }) => {
  // useState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [recipientID, setRecipientID] = useState(0);
  const [recip, setRecip] = useState('');
  const [message, setMessage] = useState('');
  const [messageArray, setMessageArray] = useState([]);
  const [sucessSend, setSucessSend] = useState(false);

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
        setSucessSend(true);
    }).catch(err => {
        setSucessSend(false);
    });

    setName('');
    setEmail('');
    setTel('');
    setMessage('');
    setRecipientID(0);
  }

  ////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    const $btn = document.querySelectorAll('.contact-buttom')[0]

    if(message) {
      $btn.setAttribute('data-toggle', 'modal')
      $btn.setAttribute('data-target', '#exampleModal')
    } else {
      $btn.removeAttribute('data-toggle')
      $btn.removeAttribute('data-target')
    }
  }, [message])

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
      <form className='col-11 col-md-8 col-xl-9 contact-form' onSubmit={handleSubmit}>

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
          >
            Submit
          </button>
        </div>

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style={{justifyContent: 'center', alignContent: 'center'}}>
                <h5 className="modal-title" id="exampleModalLabel">Mensagem</h5>
              </div>
              {
              sucessSend ? (
                  <div className="modal-body" style={{margin: '0 auto'}}>
                    <p style={{textAlign: 'center', fontSize: '20px'}}>
                      <RiEmotionHappyLine style={{color: '#28f70b', fontSize: '3rem', margin: '.5rem'}} /> 
                      Mensagem enviada com sucesso!
                    </p>

                    <p style={{textAlign: 'center', fontSize: '20px'}}>Obrigado.</p>
                  </div>
                ) : (
                  <div className="modal-body" style={{margin: '0 auto'}}>
                    <p style={{textAlign: 'center', fontSize: '20px'}}>
                      <RiEmotionUnhappyLine style={{color: '#f00', fontSize: '3rem', margin: '.5rem'}} /> 
                      Mensagem não foi enviada :(
                    </p>

                    <p style={{textAlign: 'center', fontSize: '20px'}}>Tente enviar mais tarde.</p>
                  </div>
                )
              }
              <div className="modal-footer" style={{justifyContent: 'center', alignContent: 'center'}}>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

      </form>
    </motion.div>
  );
};

export default Form;