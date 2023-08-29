import React from 'react';
// import { BrowserRouter as router, Route, Link, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'jquery/dist/jquery.js';
import './App.css';



function App() {
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

          - מגוון רחב של אופציות הימורי ספורט אונליין לישראלים, שירות הפקדות ומשיכות מיידיות זמין 24/7.
          <br></br>
          🔥היחסים הכי טובים בארץ בהבטחה🔥
          <br></br>

          💥30% בונוס מינוף בכל הפקדה 💥
          <br></br>
          כדורגל ⚽️
          <br></br>

          כדורסל 🏀
          <br></br>

          טניס 🎾
          <br></br>

          בייסבול ⚾️
          <br></br>

          פוטבול אמריקאי 🏈
          <br></br>

          ❗️❗️❗️מבצע הצטרפות לזמן מוגבל 
          <br></br>

          הצטרפו אלינו עכשיו וקבלו 500₪ 
          במתנה מאיתנו 🎁
          <br></br>

           🙏🏼מחכים לראות אתכם אצלנו </h3>
      </section>
      <section id="photos" className="p-5 text-dark text-center">
        <h2 className="animated fadeInDown">🔥ביקורות מלקוחות</h2>
        <div className='slider'>
            <div id='revdiv'>
              <img className='iimg' alt="reviews" src={process.env.PUBLIC_URL + "/Conv1.png"}/> 
            </div>
        </div>
      </section>
      <section id="videos" className="p-5 text-center text-dark">
        <h2 className="animated fadeInDown">תמונות מסביב לעולם</h2>
        <div className='slider'>
            <div id='imgdiv'>
              <img className='iimg' alt="casino" src={process.env.PUBLIC_URL + "/1.jpg"}/> 
            </div>
        </div>
      </section>

      <a className="mypopup2 btn btn-dark btn-lg animated fadeInUp delay-2s" href="https://www.facebook.com/gambleair">לפייסבוק שלנו</a>
      <a className="mypopup1 btn btn-dark btn-lg animated fadeInUp delay-2s" href="https://wa.me/+972526417693?text=I'm%20interested%20in%20your%20casino%20services">צרו קשר</a>

      <footer className="bg-dark text-white text-center p-3">
        <p>© 2023 All rights reserved To GamblAir™</p>
      </footer>
    </div>
  );
}

export default App;



var slides = ['2.JPG','3.JPG','4.JPG', '5.JPG', '6.JPG', '7.JPG', '8.JPG','1.JPG'];
var revslides = ['Conv2.png','Conv3.png','Conv4.png', 'Conv5.png', 'Conv6.png', 'Conv7.png', 'Conv8.png','Conv9.png','Conv10.png','Conv11.png', 'Conv12.png', 'Conv13.png', 'Conv14.png', 'Conv15.png','Conv1.png'];

var Start=0;
var revStart=0;


function slider(){
  var aimg = document.getElementById('imgdiv');

  if(Start<slides.length){
      Start=Start+1;
  }
  else{
      Start=1;
  }
  aimg.innerHTML = '<img class="iimg" alt="casino" src=/'+(slides[Start-1]).toString()+'>';
 
}

setInterval(slider,2000);


// review slider func: display reviews images.


function revslider(){
  var aimg = document.getElementById('revdiv');

  if(revStart<revslides.length){
      revStart=revStart+1;
  }
  else{
      revStart=1;
  }
  aimg.innerHTML = '<img class="iimg" alt="reviews" src=/'+(revslides[revStart-1]).toString()+'>';
 
}


setInterval(revslider,3333);

