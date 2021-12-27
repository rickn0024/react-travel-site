import { useState } from 'react';

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const submitContact = e => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <form onSubmit={submitContact}>
      <div className="group">
        <h3 className="page__contact__heading">Contact form</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name=""
          className="group__control"
          placeholder="Your name"
          value={state.name}
          onChange={e => setState({ ...state, name: e.target.value })}
        />
      </div>
      <div className="group">
        <input
          type="email"
          name=""
          className="group__control"
          placeholder="Your email"
          value={state.email}
          onChange={e => setState({ ...state, email: e.target.value })}
        />
      </div>
      <div className="group">
        <textarea
          className="group__textarea"
          cols="12"
          rows="8"
          placeholder="Leave a message"
          defaultValue={state.message}
          onChange={e => setState({ ...state, message: e.target.value })}
        ></textarea>
      </div>
      <div className="group">
        <input type="submit" value="send email &rarr;" className="btn-dark" />
      </div>
    </form>
  );
};
export default ContactForm;
