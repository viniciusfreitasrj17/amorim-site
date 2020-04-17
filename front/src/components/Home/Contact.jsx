import React from 'react';

const Contact = () => {
  return (
    <section className='container contact-section'>
      <form className='col-md-8 contact-form'>

        <h1 className='contact-title'>Entre em Contato Conosco</h1>

        <div className="form-group">
          <label className='contact-label' for="example-text-input">Nome</label>
          <input className="form-control" type="text" value="Artisanal kale" id="example-text-input" />
        </div>

        <div className="form-group">
          <label className='contact-label' for="exampleInputEmail1">E-mail</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>

        <div className="form-group">
          <label  className="contact-label" for="example-tel-input">Telefone</label>
          <input className="form-control" type="tel" value="(00)00000-0000 " id="example-tel-input" />
        </div>

        <div className="form-group">
          <label className='contact-label' for="exampleSelect1">Como nos encontrou</label>
          <select className="form-control" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div className="form-group">
          <label className='contact-label' for="exampleTextarea">Mensagem</label>
          <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </section>
  );
};

export default Contact;
