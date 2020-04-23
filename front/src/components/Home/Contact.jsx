import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const [recipientID, setRecipientID] = useState(1);
  
  const optionsList = [
    { id: 1, name: 'Google' },
    { id: 2, name: 'Facebook' },
    { id: 3, name: 'Twitter' },
    { id: 4, name: 'Instagram' },
    { id: 5, name: '...' },
    { id: 6, name: 'Outros' },
  ];


  return (
    <section className='container contact-container vh-100' id='contact'>
      <form className='col-md-8 contact-form'>

        <h1 className='contact-title'>Entre em Contato Conosco</h1>

        <div className="form-group">
          <label className='contact-label' for="example-text-input">Nome *</label>
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

        <div className="form-group">
          <label className='contact-label' for="exampleInputEmail1">E-mail *</label>
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

        <div className="form-group">
          <label  className="contact-label" for="example-tel-input">Telefone</label>
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

        <div className="form-group">
          <label className='contact-label' for="exampleSelect1">Como nos encontrou?</label>
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

        <div className="form-group">
          <label className='contact-label' for="exampleTextarea">Mensagem *</label>
          <textarea 
            className="form-control" 
            value={message} 
            id="exampleTextarea" 
            name='message'
            rows="3" 
            onChange={e => setMessage(e.target.value)} 
            placeholder="Coloque sua Mensagem..."
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </section>
  );
};

export default Contact;
