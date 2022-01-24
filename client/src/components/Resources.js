import React from 'react';
import Navbar from './Navbar';

import axios from 'axios';

const Resources = () => {
  const handleClick = () => {
    const form = document.getElementById('register-form');
    const { name, email, contact, equip, qty, city, locality } = form;
    console.log(
      name.value,
      email.value,
      contact.value,
      equip.value,
      qty.value,
      city.value,
      locality.value
    );

    axios.post('http://localhost:3000/api/v1/hospitals', {
      name: name.value,
      email: email.value,
      contact: contact.value,
      equip: equip.value,
      qty: qty.value,
      city: city.value,
      locality: locality.value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container2 mt-5">
        {' '}
        <h1 class="pt-5"> RESOURCE DATABASE</h1>
      </div>

      <section className="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">REGISTRATION-RESOURCES</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact no.">
                    <i class="zmdi zmdi-phone material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="contact"
                    id="contact"
                    autoComplete="off"
                    placeholder="Your Contact Number"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="medical equipment">
                    <i class="zmdi zmdi-hospital material-icons-name"></i>
                  </label>
                  <select
                    name="equip"
                    id="equip"
                    autoComplete="off"
                    placeholder="Medical Equipment"
                  >
                    <option>blood</option>
                    <option>oxygen cylinders</option>
                    <option>beds</option>
                  </select>

                  <label htmlFor="Quantity">
                    <i class="zmdi zmdi-circle material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="qty"
                    id="Quantity"
                    autoComplete="off"
                    placeholder="Quantity"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">
                    <i class="zmdi zmdi-pin drop material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="off"
                    placeholder="Your City"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="locality">
                    <i class="zmdi zmdi-pin drop material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="locality"
                    id="locality"
                    autoComplete="off"
                    placeholder="Your Locality"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="button"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="SUBMIT"
                    onClick={handleClick}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resources;
