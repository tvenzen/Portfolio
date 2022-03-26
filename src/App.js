import logo from './logo.svg';
import './App.css';
import React, { useState, Component } from 'react'
import ReactDom from 'react-dom'
import casualPic from './/casualpic.JPG'
import react from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"
import { faFileAlt } from "@fortawesome/free-solid-svg-icons"
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <div class="bg-image"></div>
         
      {/*<MyIntro /> */}
      <MyNav />

      {/* <MyNavbar />
      
      <MyProfile /> */}
      
      
      </div> 
  );
}


class MyIntro extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="intro">
      <nav>
        <h1> Tyler Venzen  </h1>
        <h1> tyleravenzen@gmail.com </h1>
        <h1> 914-406-3083 </h1>
        <h1> White Plains, NY, 10603</h1>
      </nav>
      </div>
    )
  }
}


/*
class MyNavbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="navbar"> 
        <nav>   
                <a href="https://www.linkedin.com/in/tyler-venzen-8ab78119b/"> Home </a>
                <a href="https://www.linkedin.com/in/tyler-venzen-8ab78119b/"> Projects and Skils </a>
                <a href="https://www.linkedin.com/in/tyler-venzen-8ab78119b/" > About Me </a>
                <a href="https://www.linkedin.com/in/tyler-venzen-8ab78119b/" > Projects and Skils </a>
                <a href="https://www.linkedin.com/in/tyler-venzen-8ab78119b/" > Contact Me </a> 
                <HomeButton onClick={handleHomeClick}/>
                <AboutButton onClick={handleAboutClick}/>
                <SkillsButton onClick={handleSkillClick}/>
                <ContactButton onClick={handleSkillClick}/>
                <a href="https://www.hackerrank.com/tyleravenzen"> HackerRank Profile </a>
                <a href="https://github.com/tvenzen" > Github Portfolio </a>
                <a href="https://www.linkedin.com/in/tyler-venzen-8ab78119b/" > LinkedIn Profile </a>
                <a href="..//Tyler_Venzen_Resume.pdf"> Resume </a>
                
        </nav>
      </div> 
    )
  }
}  */

class MyProfile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id="profile"> 

        
        <div class="sideBySide">
          <img class="myPic" src={casualPic} alt="A photo of me" width="350" height="400"/>
          <p> 
            Welcome,
            <br />
            <br />
            I am a graduate of the University of Albany (SUNY)
            
            I may have started to learn Computer Science in college by my fascination in technology started when I was very young. I was always interested
            in learning how computers were able to do what they did. When I found out what computer science was as a concept, I knew it was what I wanted to persue.
            Now, my passion for computer science is to continue learning how things work, while creating software as a work of art, and as something that people could use.
            </p>
        </div>
        
              
        
        <div class="sideBySide"> 
            
        </div>
        
      </div>
    )
  }
}

class MyTalents extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="lists">
        
    <FontAwesomeIcon icon="fas fa-code" />

    <h2> Languages and Frameworks </h2>

      <div class="rowFlex">
        <p class="languageTag"> Java  </p>
        <p class="languageTag"> Python </p>
        <p class="languageTag"> HTML/CSS </p>
        <p class="languageTag"> JavaScript </p>
        <p class="languageTag"> Node.js</p>
        <p class="languageTag"> React.js</p>
        <p class="languageTag"> Angular </p>
        <p class="languageTag"> Git/GitHub</p>    
      </div>

      <h2>Project Showcase</h2><ul>
          
          
          <li> <span> <h3 class="projectTitle">This Website</h3> <p class="contentBox"> <FontAwesomeIcon icon={faQuoteLeft} /> This is the second iteration of my personal website designed for displaying a bit more about who I am and to go a little more in-depth about what i've done.
            The first iteration was done using plain HTML and CSS.This time however, I decided that I wanted to remake it while using React so that I can become more experienced in it.<FontAwesomeIcon icon={faQuoteRight} /> </p></span>
            <span class="tagHolder"> <p class="languageTag">React.js</p> </span>
          </li>

          <li> <span> <h3 class="projectTitle">React Calculator</h3> <p class="contentBox"> <FontAwesomeIcon icon={faQuoteLeft} /> This project was a form of practice so that I can understand React on a small scale, before moving on to a bigger website such as this one. It's a calculator
            that is able to do basic operations. Users are able to manipulate the calculator using the buttons on the page. It is also responsive.
            The GitHub link to it can be found <a href="https://github.com/tvenzen/react-calculator"> here</a>.<FontAwesomeIcon icon={faQuoteRight} /> </p>
            </span>
            <span class="tagHolder"> <p class="languageTag"> ReactJS </p> </span>
          </li>

          <li> <span> <h3 class="projectTitle"> Banking Application</h3> <p class="contentBox"> <FontAwesomeIcon icon={faQuoteLeft} />  This was a project that I came up with to become more accostomed to python. It is a mock bank application that uses a command-line interface to create or 
            delete user accounts, check balances, and even transaction history. All data handled by the app is saved onto a local database file using Python's sqlite3 library. To plan and organize its creation, I drew everything out on Microsoft Whiteboard and saved as an SVG for reference.
            The GitHub link to it can be found <a href="https://github.com/tvenzen/Personal-Bank">here</a>.<FontAwesomeIcon icon={faQuoteRight} /> </p>
            </span>
            <span class="tagHolder"> <p class="languageTag"> Python </p> <p class="languageTag"> SQLite </p> </span>
          </li>

          <li> <span> <h3 class="projectTitle">LocaNotes - Backend</h3>  <p class="contentBox"> <FontAwesomeIcon icon={faQuoteLeft} /> This was a project for school in my Software Engineering class. The assignment was to
            get together into random groups, conceive something to build, and then spend the rest of the semester building it. For my group, someone had the idea to
            build a social media app that would allow you to take notes, and organize them based on location. It was then later expanded upon to allow to to tack the notes
            onto a global map for all to see. I was part of the backend team with two others to design the database for the app. My team and I started by plotting an Entity Relationship Diagram and then designing the
            database to be compatible with MongoDB. The routing of the application for GET, POST, and Delete methods of the app was handled with Express.js interacting with PostMan. For our roadmap to completion, we built it using the Agile process
            and completing each user story as we got to them.The GitHub link can be found <a href="https://github.com/LocaNotes">here</a>.<FontAwesomeIcon icon={faQuoteRight} /> </p>
          </span>
            <span class="tagHolder"> <p class="languageTag">Node.js</p> <p class="languageTag"> Express.js </p> <p class="languageTag">MongoDB</p> </span>
          </li>

          <li> <span> <h3 class="projectTitle">Multimodal Calculator</h3> <p class="contentBox"> <FontAwesomeIcon icon={faQuoteLeft} /> This was a project in school for my Human-Computer Interaction class. The challenge was to design a calculator with a Graphical User Interface to do simple math, but the trick
            was that it had have Text-to-Speech and Speech-to-Text capability. It had to be able to take in user speech as input to do math, and also have typed equations spoken back to the user. This was one of my toughest challenges as I had
            never worked on something to that scale. So, with my partner, we found a working Speech SDK by Microsoft Azure, and went to work. My role was to create the logic behind
            how a person could speak into it in a certain way that the program would be able to extract the information it needed. Through the tireless hours of coding and testing, we finally got the project to work.
            The GitHub link to it can be found <a href="https://github.com/tvenzen/Multimodal-Calculator">here</a>.<FontAwesomeIcon icon={faQuoteRight} /> </p>
          </span>
            <span class="tagHolder"> <p class="languageTag"> Java </p> <p class="languageTag"> Java AWT </p> <p class="languageTag"> Javax Swing </p> </span>
          </li>

          <li> <span> <h3 class="projectTitle">PAC Book</h3>  <p class="contentBox"> <FontAwesomeIcon icon={faQuoteLeft} /> This was project in school for my Human-Computer Interaction class. The challenge was to design a pseudo-book application with a Graphical User Interface that buttons to turn the pages. The main
            purpose of this assignment was to have us think and become experienced with the Presentation-Abstraction-Control design pattern after having just gotten accostomed to the Model-View-Controller design pattern. The tricky part was
            was thinking of PAC and a much more elaborate version of MVC.The GitHub link to it can be found <a href="https://github.com/tvenzen/PAC-Book">here</a>.<FontAwesomeIcon icon={faQuoteRight} /></p>
          </span>
            <span class="tagHolder"> <p class="languageTag">Java</p>  </span>
          </li>

          <li> <span> <h3 class="projectTitle">See02 Site</h3> <p class="contentBox"> This was a side project that I collaborated with two others to make. The motivation was to bring awareness to the amount of CO2 emitted by cars. The GitHub link to it can 
          be found <a href="https://github.com/tvenzen/See02-Site">here</a>. </p>  </span>
          <span class="tagHolder"> <p class='languageTag'> HTML</p> <p class="languageTag"> CSS </p> <p class="languageTag"> JavaScript</p> </span></li>
        </ul>

       </div> 
    )
  } 
}

class MyAbout extends react.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
    <h1>About Me</h1>
    )
  }
}

function MyContact(){
  const [message, setMessage] = useState("");

    return (
    <>
    <h1> Contact Me</h1>
    <div class="contactForm">
    

      <form>
        <label for='fname'> First name: </label>
        <input name="fname" placeholder="John" required/> 
        <hr/> 

        <label for='lname'> Last name: </label>
        <input name="lname" placeholder="Doe" required/>  
        <hr/>

        <label for='email'> Email: </label>
        <input name="email" placeholder='jdoe@example.com' required/> 
        <hr/>

        <label for='subject'> Subject: </label>
        <input name='subject' placeholder='Enter here...' required/>
        <hr />

        <label for='message'> Message: </label>
        <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} required/>
        <hr id="textAreaUnderline"/>

        <button id="submitButton"  class="siteButton" type='submit'> Send </button>

      </form>
    </div>

    
    </>
    )
}







function MyNav(props){
  const [selectedPage, setSelectedPage] = useState("home")

  return (
    <><div id="navbar">
      <nav>
        <button class="siteButton" onClick={() => setSelectedPage('home')}> Home </button>
        {/*<button class="siteButton" onClick={() => setSelectedPage('about')}> About Me </button>*/}
        <button class="siteButton" onClick={() => setSelectedPage('talents')}> My Talents </button>
        {/* <button class="siteButton" onClick={() => setSelectedPage('contact')}> Contact Me </button> */}
        {/* <a href="https://www.hackerrank.com/tyleravenzen"> HackerRank Profile </a> */}
        <a href="https://github.com/tvenzen"> Github Portfolio </a>
        <a href="https://www.linkedin.com/in/tyler-venzen-8ab78119b/"> LinkedIn Profile </a>
        <a href="..//Tyler_Venzen_Resume.pdf"> Resume </a>
      </nav>
    </div>
    
    <PageHandler pageType={selectedPage} /></>
  );

}


function PageHandler(props){
  let pageType = props.pageType

  if (pageType == 'home'){
    return( <MyProfile />);
  }
  /*else if (pageType == 'about'){
    return(<MyAbout />)
  }*/
  else if (pageType == "talents"){
    return(<MyTalents />)
  }
 /* else if (pageType == 'contact'){
    return(<ContactForm />)
  }*/
  else {
    alert("Error rendering page: Please try again")
    pageType = 'home'
  }

  /*
  switch (pageType){
    case 'home':
      return (<MyIntro />)
      break;
    case 'about':
      return (<MyAbout />)
      break;
    case 'talents':
      return (<MyTalents />)
      break;
    case 'contact':
      return(<MyContact />)
      break;
    default:
      alert("Error rendering page: Please try again")
  } */

}

export default App; 
