import React from 'react';

export default function Contact() {
  return (
    <div className='p-3'>
      <h1>Contact Page</h1>
      <hr/>
      <form class="form message-form">
      <div class="form-group">
        <label for="name-message">Name:</label><br/>
        <input class="form-input" type="text" id="name-message" size="38"/>
      </div>
      <div class="form-group">
        <label for="email-message">Email:</label><br/>
        <input class="form-input" type="text" id="email-message" size="38"/>
      </div>
      <div class="form-group">
        <label for="text-message">Message:</label><br/>
        <textarea class="form-input" type="text" id="text-message" rows="5" cols="41" />
      </div>
      <div class="form-group">
        <button class="btn btn-primary" type="submit">send</button>
      </div>
    </form>
    </div>
  );
}
