// src/components/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status


  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using Email.js
    emailjs
      .send('service_coguoai', 'template_3y097lp', {
        fullName,
        phoneNumber,
        selectedService,
      }, 'kB0NxybOxBmJ0bJQ0')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSubmitted(true); // Set the submission status to true
        // You can reset the form fields here
      })
      .catch((error) => {
        console.error('Email error:', error);
      });
  };
  const handleReset = () => {
    setFullName('');
    setPhoneNumber('');
    setSelectedService('');
    setIsSubmitted(false);
  };

    return (

        <div id="conform" className='p-5 text-center text-dark'>
            <section id="description" className="p-5 text-center text-dark">
                <h2 className="animated fadeInDown">🤩צרו קשר והתחילו לשחק</h2>
                <h3 className="animated text-white text-center fadeInUp delay-1s"><br></br>
                <h2>בונוסים💸</h2>
                <p>הפקדה ראשונה 100% בונוס </p>
                <p>הפקדה שניה 50% בונוס</p>
                <p>הפקדות קבועות 30% בונוס</p>
                <h2>משיכות / הפקדות בכל הדרכים אצלנו 💰💲💳🪙</h2>
                <p>ביט,פייבוקס,מזומן,קוד משיכה,העברה בנקאית מכל הבנקים ,העברה במטבעה דיגיטלי USDT</p>
                <h2>שעות משיכות / הפקדות</h2>
                <p>משיכות משעה 10:00 עד השעה 23:00
הפקדות משעה 10:00 עד השעה 1:00
 אין משיכות בשישי שבת 
משיכה מיידית עד (שעתיים )</p></h3>
            </section>
        {isSubmitted ? (
            <div>
            <p className="success-message">!תודה שנרשמת ניצור קשר בהקדם</p>
            <button type="button" className="submit-button" onClick={handleReset}>
                Reset
            </button>
            </div>
        ) : (
        <form onSubmit={handleSubmit}>
            <div class="field field_v2">
            <label class="ha-screen-reader" htmlFor="fullName">Full Name:</label>
            <input
                class="field__input"
                type="text"
                id="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                required
            />
            <span class="field__label-wrap" aria-hidden="true">
            <span class="field__label">שם מלא</span>
            </span>
            </div><br/>
            <div class="field field_v2">
            <label class="ha-screen-reader" htmlFor="phoneNumber">Phone Number:</label>
            <input
                class="field__input"
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                required
            />
            <span class="field__label-wrap" aria-hidden="true">
            <span class="field__label">מספר טלפון</span>
            </span>
            </div><br/><br/>
            <div id="ttt">
                <label className="radio-container">
                    <input
                    type="radio"
                    name="service"
                    value="הימורי ספורט"
                    checked={selectedService === 'הימורי ספורט'}
                    onChange={handleServiceChange}
                    />
                    <span className="checkmark"></span>
                    <span className="radio-label">הימורי ספורט</span>
                    
                </label><br/>
                <label className="radio-container">
                    <input
                    type="radio"
                    name="service"
                    value="קזינו לייב"
                    checked={selectedService === 'קזינו לייב'}
                    onChange={handleServiceChange}
                    />
                    <span className="checkmark"></span>
                    <span className="radio-label">קזינו לייב</span>
                    
                </label><br/>
                <label className="radio-container">
                    <input
                    type="radio"
                    name="service"
                    value="מכונות סלוטים"
                    checked={selectedService === 'מכונות סלוטים'}
                    onChange={handleServiceChange}
                    />
                    <span className="checkmark"></span>
                    <span className="radio-label">מכונות סלוטים</span>
                    
                </label><br/>
                <label className="radio-container">
                    <input
                    type="radio"
                    name="service"
                    value="שעשועונים"
                    checked={selectedService === 'שעשועונים'}
                    onChange={handleServiceChange}
                    />
                    <span className="checkmark"></span>
                    <span className="radio-label">שעשועונים</span>
                    
                </label>
            </div>
            <button type="submit" className={`submit-button ${isSubmitted ? 'disabled' : ''}`} disabled={isSubmitted}>
                {isSubmitted ? 'Submitted' : 'Submit'}
            </button>
        </form>
        )}
        </div>
    );
}

export default ContactForm;