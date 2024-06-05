// IMPORTS 
import './App.css';
import * as React from 'react';
import linkedinIcon from './icons/linkedin.png';
import githubIcon from './icons/github.png';
import slackIcon from './icons/slack.png';
import gmailIcon from './icons/gmail.png';
import xIcon from './icons/x.png';
import holopinIcon from './icons/holopin.png';
import handwaveIcon from './icons/wave.png';
import helloWorld from './icons/august.jpg';

import { styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import HeaderNavBar from './components/HeaderNavBar';
import SkillGrid from './components/SkillsGrid';
import ProjectSlideCarousel from './components/Carousel'

<script src='js/index.js' defer></script>

// ===================================================================
const BorderedAvatar = styled(Avatar)`
  border: 1rem solid #00CCCC;`;

const openResume = () => {
  window.open(process.env.PUBLIC_URL + '/vitatran-resume.pdf');
}

const openRef = () => {
  window.open(process.env.PUBLIC_URL + '/vitatran-references.pdf');
}
// ===================================================================

function App() {
  return (
    <div className="App">
      
      <header className="App-header" id='backToTop'>
        <HeaderNavBar />
      </header>

      <main>

        <section className='Banner'>
          <div className='Intro'>
            <h2>HELLO WORLD! MY NAME IS</h2> 
            <h1>Vita Tran   <img src={handwaveIcon} alt='waving hand'/></h1>

            <p>I am a 24 year old student completing my diploma in Software Development at Northern Alberta Institute of Technology in Edmonton, Alberta! With my ever growing passion for a field that is constantly evolving, I am excited to grow my knowledge and work with others who are just as fascinated to create impactful differences and build innovative projects that will allow the tech industry flourish.</p>
            
            
            <button className='ResumeBtn' onClick={openResume} variant="outlined">View My Resume</button>
            <button className='ReferencesBtn' onClick={openRef} variant="outlined">References</button>
          </div> 


          <BorderedAvatar className= 'DisplayPicture' alt='Vita Tran' sx={{ width: 400, height: 400 }}src={require('./dp.jpg')}/>


          <div className='SocialMedia'>
              <a href="https://www.linkedin.com/in/vitatran99/">
                <img src={linkedinIcon} alt='linkedin icon'/>
              </a>

              <a href="https://github.com/vita-tran">
                <img src={githubIcon} alt='github icon'/>
              </a>
              
              <a href="mailto:vitatran1999@gmail.com">
                <img src={gmailIcon} alt='gmail icon'/>
              </a>
                          
              <a href="https://x.com/i/flow/login?redirect_after_login=%2Fgitconfig_vita">
                <img src={xIcon} alt='x icon'/>
              </a>
                          
              <a href="https://www.holopin.io/@vitatrn#">
                <img src={holopinIcon} alt='holopin icon'/>
              </a>

              <a href="https://devedmonton.slack.com/team/U041X5DQSHJ">
                <img src={slackIcon} alt='slack icon'/>
              </a>
            </div>
        </section>


        <section className='Skills' id='skills'>
          <div>
            <h2>My Skills</h2>
            <p>Starting from 2018, I've had the opportunity to experiment in the following markup, frontend, & backend languages that has allowed me to work on a diverse range of projects!</p>
          </div>
          <SkillGrid/>
        </section>

        <section className='About' id='about'>
          <div><h2>Little More About My Coding Adventures!</h2><img src={helloWorld} alt='code tattoos'/></div>     

          <div><p>When I wrote and executed my first line of code <strong>print("Hello World!")</strong> into Wing IDE back in 2018, it sparked something I couldn't describe. It was my first glimpse into the world of code. Though I had limited knowledge, I could sense how strong it could evolutionize the future of technology. As I explored other languages, I discovered frontend web development. I see well-designed applications the same as I see making good first impressions. Building applications that are easy to use and navigate became something I wanted to pursue further.</p></div>     

        </section> 

        <section className='personal-projects' id='projects'>
          <h2>Personal Projects</h2>

          <p>In the past year of studying JavaScript and learning a variety of complex but intriguing new frameworks, I've been experimenting by playing around with creating faux websites and practiced techniques such as <strong>creating menus, animations, data filtering through user inputs, and many others.</strong> I've been able to evolve my skills further and that only pushes me to pursue this career path.</p>

            <ProjectSlideCarousel />
        </section>

        <section className='bottom'>
          <div>
            <h3>Thank you for making it this far!</h3>
            <button><a href='#backToTop'>Let's Go Back Up!</a></button>
          </div>
        </section>

        </main>

    </div>
  );
}

export default App;
