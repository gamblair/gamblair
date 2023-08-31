import React, { useState, useEffect } from 'react';
// import { BrowserRouter as router, Route, Link, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'jquery/dist/jquery.js';
import './App.css';
import Popup from './popup';
import GenericImageCarousel from './imagecarousel';



function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupTimer = setTimeout(() => {
      setShowPopup(true);
    }, 7500);

    return () => clearTimeout(popupTimer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const winsImages = [
    { url: 'Conv1.png' },
    { url: 'Conv2.png' },
    { url: 'Conv3.png' },
    { url: 'Conv4.png' },
    { url: 'Conv5.png' },
    { url: 'Conv6.png' },
    { url: 'Conv7.png' },
    { url: 'Conv8.png' },
    { url: 'Conv9.png' },
    { url: 'Conv10.png' },
    { url: 'Conv11.png' },
    { url: 'Conv12.png' },
    { url: 'Conv13.png' },
    { url: 'Conv14.png' },
    { url: 'Conv15.png' },
  ];

  const RCImages = [
    { url: '1.jpg' },
    { url: '2.jpg' },
    { url: '3.jpg' },
    { url: '4.jpg' },
    { url: '5.jpg' },
    { url: '6.jpg' },
    { url: '7.jpg' },
    { url: '8.jpg' },
    { url: '9.jpg' },
    { url: '10.jpg' },
    { url: '11.jpg' },
  ];

  const revImages = [
    { url: 'rev1.jpg' },
    { url: 'rev2.jpg' },
    { url: 'rev3.jpg' },
    { url: 'rev4.jpg' },
    { url: 'rev5.jpg' },
  ];

  const bankImages = [
    { url: 'bank1.jpeg' },
    { url: 'bank2.jpeg' },
    { url: 'bank3.jpeg' },
    { url: 'bank4.jpeg' },
  ];


  return (
    <div className="App">

      {/* <img src="logo.png" class="mylogo" width="80px"  /> */}
      <header className="banner bg-dark text-white p-5 text-center ">
        <img src="logo.png" alt="GamblAir"  className='logo mylogo'/> 
      </header>
      <div className="main-loader"></div>
      <section id="description" className="p-5 text-center text-dark">
        <h2 className="animated fadeInDown">GamblAir™🎰</h2>
        <h3 className="animated text-white text-center fadeInUp delay-1s"><br></br>
        <p>חברת תיירות ההימורים הכי חזקה בארץ</p>
        <p>מציעה לכם להצטרף ולהרוויח</p>
        <p>מחכים לכם בכך החתחומים החל מ:</p>
        <p>⚽️כדורגל</p>
        <p>🏀כדורסל</p>
        <p>🎾טניס</p>
        <p>⚾️בייסבול</p>
        <p>🏈פוטבול אמריקאי</p>
        <p>🎲קזינו</p>
        <p>🎰סלוטים</p>
        <p>🔥היחסים הכי טובים בארץ בבטים🔥</p>
        <p>💥100% בונוס מינוף בכל הפקדה 💥</p>
        <h2>🙏🏼מחכים לראות אתכם אצלנו</h2></h3>
       
      </section>

      <section id="photos" className="p-5 text-dark text-center">
        <h2 className="animated fadeInDown">❤️‍🔥ביקורות מלקוחות❤️‍🔥</h2>
        <div className='slider'>
          <GenericImageCarousel images={revImages} />
        </div>
      </section>

      <section id="videos" className="p-5 text-center text-dark">
        <h2 className="animated fadeInDown"> 💸הבנק הכי חזק בארץ🤑</h2>
        <div className='slider'>
          <GenericImageCarousel images={bankImages} />
        </div>
      </section>

      <section id="photos" className="p-5 text-dark text-center">
        <h2 className="animated fadeInDown">🔥זכיות של לקוחות🔥</h2>
        <div className='slider'>
            <GenericImageCarousel images={winsImages} />
        </div>
      </section>

      <section id="videos" className="p-5 text-center text-dark">
        <h2 className="animated fadeInDown"> ✈️מסביב לעולם🌍</h2>
        <div className='slider'>
          <GenericImageCarousel images={RCImages} />
        </div>
      </section>

      <a className="mypopup2 btn btn-dark btn-lg animated fadeInUp delay-2s" href="https://www.facebook.com/gambleair">לפייסבוק שלנו</a>
      <a className="mypopup1 btn btn-dark btn-lg animated fadeInUp delay-2s" href="https://wa.me/+972526417693?text=I'm%20interested%20in%20your%20casino%20services">צרו קשר</a>

      <footer className="bg-dark text-white text-center p-3">
        <p>© 2023 All rights reserved To GamblAir™</p>
      </footer>
      {showPopup && <Popup onClose={closePopup} />}
    </div>
  );
}

export default App;



// var slides = ['2.JPG','3.JPG','4.JPG', '5.JPG', '6.JPG', '7.JPG', '8.JPG','1.JPG'];
// var revslides = ['Conv2.png','Conv3.png','Conv4.png', 'Conv5.png', 'Conv6.png', 'Conv7.png', 'Conv8.png','Conv9.png','Conv10.png','Conv11.png', 'Conv12.png', 'Conv13.png', 'Conv14.png', 'Conv15.png','Conv1.png'];

// var Start=0;
// var revStart=0;


// function slider(){
//   var aimg = document.getElementById('imgdiv');

//   if(Start<slides.length){
//       Start=Start+1;
//   }
//   else{
//       Start=1;
//   }
//   aimg.innerHTML = '<img class="iimg" alt="casino" src=/'+(slides[Start-1]).toString()+'>';
 
// }

// setInterval(slider,2000);


// // review slider func: display reviews images.


// function revslider(){
//   var aimg = document.getElementById('revdiv');

//   if(revStart<revslides.length){
//       revStart=revStart+1;
//   }
//   else{
//       revStart=1;
//   }
//   aimg.innerHTML = '<img class="iimg" alt="reviews" src=/'+(revslides[revStart-1]).toString()+'>';
 
// }


// setInterval(revslider,3333);

