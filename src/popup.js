import React from 'react';

function Popup({ onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2 className="animated fadeInDown">GamblAir™🎰</h2>
        <h2 className="animated fadeInDown">!בהזדמנות חד פעמית</h2>
        <p>‼️לרגל פתיחת קבוצת הוואסאפ החדשה שלנו</p>
        <p>!הצטרפות לקבוצה ללא תנאי הפקדה</p>
        <p>בקבוצה מוגרלים עשרות פרסים מטורפים</p>
        <p>🤑!חופשות הימורים עלינו הכל כלול</p>
        <p>⚽🏀כרטיסים למשחקים הכי שווים</p>
        <p>🎮קונסולות וטלפונים</p>
        <h2>!הצטרפו לפני שיהיה מאוחר</h2>
        <a className=" btn btn-dark btn-lg animated fadeInUp" style={{color: "white"}} href="https://wa.me/+972526417693?text=I'm%20interested%20in%20your%20casino%20services">צרו קשר</a>
        <button className="btn close-button btn-lg" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
