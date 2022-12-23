import "./contact.css";
import React from 'react';
import logo2 from './logo2.JPG'; 
import logo3 from './logo3.JPG'; 
import logo4 from './logo4.JPG'; 
import logo5 from './logo5.JPG'; 
import Header from "../../components/header/Header";

console.log(logo2); 
console.log(logo3); 
console.log(logo4);
console.log(logo5);

export default function About() {

    return(
        <>
        <Header/>
        <div className="head">
       <p> CONTACT US </p>
        </div>
        <section class="content">
<div className="container">
<div className="row">
<div className="col">
<h1 className="h11"> We are here to help you!</h1>
</div>
</div>
<div className="row">
<div className="col">
<p className="h55">You can contact our Support Team by E-mail: <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTGnQKSvDgJvgmsMdGrMrzDVJjBRXtJFCXKHdnNRxnNPSnZZWMkSjlpqNwWHzNjcSVPmBV" target='blank' className="text-primary font-weight-bold"><span className="__cf_email__" data-cfemail="442b22222d2721042236212134362d3225273d342b282d273d6a272b29">MTPlog@gmail.com&#160;</span></a></p>
<p className="h55">If you haven't received the download link to your Privacy Policy or any other yet, please check your Spam/Junk folder before contacting us.</p>
<p className="h55">Please note that we only provide customer support through email or official social network at the moment.</p>
<p className="h55">In addition, you can also contact us directly(24/24) through popular social networking platforms such as Facebook, Twitter, Linkedin... Moreover, we are also happy to welcome you to our programming team. Here is the leader's Github: <a href="https://github.com/Chanfuc812" target='blank' className="text-primary font-weight-bold"> https://bit.ly/3MRz2YB</a></p>
<p className="h55">Best Regard,</p>
<p className="h55">MTPlog ❤ ️ </p>
<br />
<br />
</div>
<div className="col">
<p><img src={logo3} className="img-fluid" /></p>
</div>
</div>
</div>
</section>
      <div className="h66">
      Official Fanpages
      </div>
        <div className="img2">
          <img src={logo2}/> 
          <p>
          *Our Official Facebook Fanpage
        </p>
        <img src={logo4}/> 
          <p>
          *Our Official Linkedin Fanpage
        </p>
        <img src={logo5}/> 
          <p>
          *GitHub
        </p>
      </div>
      
        </>
    );
}