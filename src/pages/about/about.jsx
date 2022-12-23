import "./about.css";
import React from 'react';
import logo from './logo.jpg'; 
import Header from "../../components/header/Header";

console.log(logo); 
export default function About() {
  
  return (
      <>
      <Header/>
      <div className="img">
          <img src={logo}/> 
          <p>
          All team members - missing Tu (Gather 99% of the team's web-making effort)
        </p>
      </div>
    
    
    
      <body className="page">
      <div className="content">
      <div className="row">
      <div className="col">
          <h1 className="h1">ABOUT MTPlog</h1>
      </div>
</div>
<div className="row">
<div className="col">
<p className="h5"><p>Our Mission</p><p />MTPlog is a website as well as a blog or forum for people to share wonderful moments, everyday happenings in life: maybe happy, maybe sad or maybe just a meal food, a new item or anything you want to post on the Internet for all to know and share.</p>
<p className="h5">We are committed to making the creation of posts, statuses and images as easy as possible that are accessible and usable by most users.</p>
<p className="h5">In addition to legal policies, we also guarantee absolute confidentiality of personal information including user passwords.</p>
<p />
<p className="h5"><p>Our Story</p><p />We started with MTPlog in 2021, but due to the impact of COVID-19 we had to suspend the project for a long time.</p>
<p className="h5">In the middle of 2022, we have upgraded and developed this Blog extremely powerful and fast. Up to now, we have completed this project.</p>
<p />
<p className="h5"><p>Our Team</p><p />Our team currently consists of 5 members: </p>
<p className="h5">CEO(Chief Executive Officer): Chanfuc - Project Founder </p>
<p className="h5">CTO(Chief Technology Officer): Manhahihi & Wolf - Co-Founder</p>
<p className="h5">COO(Chief Operations Officer): Minhtawng & Tu9 - Co-Founder </p>
<p />
<p className="h5"><p>Our Contact</p><p />You can contact us by following the instructions on <a href="/contact">our Contact page</a>. We'll do our best to reply in the shortest time possible.</p>
<p className="h51">From MTPlog with love</p>
<p />
</div>

      </div>
      
      </div>
      </body> 
      </>
  );
}
