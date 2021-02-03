import { Carousel, Button, Card, Input } from 'antd';
import React,{useState, useContext, Fragment, useEffect } from 'react'
import CarouselImage from '../assets/carousel.jpg'
import AOS from 'aos'
import Logo from '../assets/logo.png'
import {CommentOutlined, HighlightOutlined, DropboxOutlined, NotificationOutlined, ContainerOutlined, LineChartOutlined, CloseOutlined } from '@ant-design/icons'


const Page = () => {
   const [visible, setVisible] = useState(true)
   const [scroll, setScroll] = useState(0)
   const [newsLetter, setNewsLetter] = useState(false)
   const [identifier, setIdentifier] = useState(true)

   const contentStyle = {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };

    const visibleAction = () => {
       setVisible(false)
    }

    useEffect(() => {
      AOS.init({duration : 1000})
      window.addEventListener('scroll', () =>{
         setScroll(window.scrollY)
         if(scroll > 500 && identifier === true){
            setNewsLetter(true)
         } else{
            setNewsLetter(false)
         } 
      })
    }, [scroll, visible, identifier, newsLetter, AOS.refresh()]);

    const newsletterAction = () => {
       console.log("hao");
       
       setNewsLetter(false)
       setIdentifier(false)

    }

   
   

   

    console.log(identifier, 'viss');
    console.log(newsLetter, 'viss');
    
    
    
   return(
      <Fragment>
      <div className = "top" style={{display: visible === false && 'none'}}>
         <div className = "notification">
            <p>By accessing and using this website, you acknowledge that you have read and <br/>
               understand our <a>Cookie Policy</a>, <a>Privacy Policy</a> , and our <a>Terms of Service</a>.</p>
            <Button type="primary"   onClick = {visibleAction}>Got it</Button>
         </div>
      </div>
      <Carousel>
         <div className = "carousel">
            <img className = "carousel-image" src={CarouselImage}/>
            <div class="center-overlay">
            </div>
            <img className = "logo-image" src={Logo} alt=""/>
            <div className = "centered"><h1 className = "h1">Hello! I'm Enggar Septrinas <br/> <h4 className = "h4">Consult, Design, and Develop Websites</h4> <p className = "p" > Have something great in mind? Feel free to contact me. <br/>I'll help you to make it happen.</p></h1>
        
         <Button className = "btn-transparant">LET'S MAKE CONTACT</Button></div>
         </div>
      </Carousel>
      <div data-aos = "fade-up" className = "body-content">
         <div className = "highlight-panel">
         <h1>How Can I Help You?</h1>
            <p>Our work then targeted, best practices outcomes social innovation synergy.
            Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale.</p>
         </div>
      </div>
      <div data-aos = "fade-up-left" className = "container-body">
      <div className = "body-card">
         <div className="site-card-border-less-wrapper">
            <Card bordered={false} style={{ width: 300 }}>
               <div className = "title-card">
                  <h1>Consult</h1>
                  <CommentOutlined />
               </div>
               <p>Co-create, design thinking; strengthen infrastructure resist granular.
                  Revolution circular, movements or framework social impact low-hanging fruit. 
                  Save the world compelling revolutionary progress.</p>
            </Card>
         </div>   
         <div className="site-card-border-less-wrapper">
            <Card bordered={false} style={{ width: 300 }}>
               <div className = "title-card">
                     <h1>Design</h1>
                     <HighlightOutlined />
                  </div>
                  <p> Policymaker collaborates collective impact humanitarian shared value
                        vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
                        issue outcomes vibrant boots on the ground sustainable.</p>
            </Card>
         </div>   
         <div className="site-card-border-less-wrapper">
            <Card bordered={false} style={{ width: 300 }}>
               <div className = "title-card">
                     <h1>Develop</h1>
                     <DropboxOutlined />
                  </div>
                  <p>Revolutionary circular, movements a or impact framework social impact low-
                     hanging. Save the compelling revolutionary inspire progress. Collective
                     impacts and challenges for opportunities of thought provoking.</p>
            </Card>
         </div>   
         <div className="site-card-border-less-wrapper">
            <Card bordered={false} style={{ width: 300 }}>
               <div className = "title-card">
                     <h1>Marketing</h1>
                     <NotificationOutlined />
                  </div>
                  <p>Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                     replicable, effective altruism youth. Mobilize commitment to overcome
                     injustice resilient, uplift social transparent effective.</p>
            </Card>
         </div>   
         <div className="site-card-border-less-wrapper">
            <Card bordered={false} style={{ width: 300 }}>
               <div className = "title-card">
                        <h1>Manage</h1>
                        <ContainerOutlined />
                     </div>
                     <p>Change-makers innovation or shared unit of analysis. Overcome injustice
                        outcomes strategize vibrant boots on the ground sustainable. Optimism,
                        effective altruism invest optimism corporate social.</p>
            </Card>
         </div>   
         <div className="site-card-border-less-wrapper">
            <Card bordered={false} style={{ width: 300 }}>
               <div className = "title-card">
                        <h1>Evolve</h1>
                        <LineChartOutlined />
                     </div>
                     <p>Activate catalyze and impact contextualize humanitarian. Unit of analysis
                        overcome injustice storytelling altruism. Thought leadership mass 
                        incarceration. Outcomes big data, fairness, social game-changer.</p>
            </Card>
         </div>   
      </div>
      </div>

      <div data-aos = {newsLetter === true && "slide-left"} className = "newsletter-content" style = {{display : newsLetter == false && 'none'}}>
         <div className = "newsletter">
            <h1>Get latest updates in web technologies</h1>
            <CloseOutlined onClick = {newsletterAction}/>
         </div>
         <div className = "newsletter-body">
            <p>I write articles related to web technologies, such as design trends, development
               tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
               them all.</p>            
         </div>
         <div className = "newsletter-footer">
               <Input></Input> 
               <Button>Count me in!</Button>         
         </div>

      </div>

      <div className = "footer-content">
         <h1> <span>&#169;</span>2018 Enggar Septrinas. All rights reserved.​</h1>
      </div>

      </Fragment>
   
     
     
   )
}

export default Page