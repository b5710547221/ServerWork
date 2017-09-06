import React from 'react'
import Link from 'next/link'
//import {image} from './pics/cartIcon.png'
//import {images} from './pics/mag.png'



export default class extends React.Component{
    render(){

        return(
<div>
    
    <meta content="text/html; charset=UTF-8" http-equiv="content-type"/>
    <title> index </title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css"/>
    <link rel="stylesheet" href="http://npmcdn.com/tachyons-skins@4.0.0/css/tachyons-skins.min.css" />
    
    
<div className="vh-75 cover bg-left bg-center-l bg-light-green" >
<nav className="tc  pa3 pa4-ns">
  <a className="link dim gray   f6 f5-ns dib mr3" href="#" title="Home">Site Name</a>
  <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">About</a>
  <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="About">Rankings</a>
  <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Magazine</a>
  <a className="link dim gray    f6 f5-ns dib" href="#" title="Contact">Log In</a>
  &nbsp;&nbsp;    
  <a className="br-pill ph3 pv2 mb2 white bg-dark-green link dim gray    f6 f5-ns dib" href="#" title="Contact">Sign Up</a>
  &nbsp;&nbsp;
  <a className="link dim gray    f6 f5-ns dib" href="#" title="Contact">{/*<img src ={image} alt = "image"className="w2 h2 bg"  />*/}</a>
  &nbsp;&nbsp;
  <a className="link dim gray    f6 f5-ns dib" href="#" title="Contact">{/*<img src ={images} alt = "images" className="w2 h2 bg"  />*/}</a>
  <hr/>
</nav>
    
  
  <h1 className="fw6 f3 f2-ns lh-title  mb3 tc  v-mid" >
    Shop smart for
  </h1> <br/>
      <ul className ="list tc">
      <li className="dib mr2"><a className=" mt0 v-mid f3 link  dim br-pill ph3 pv2 mb2 white bg-dark-green tc" href="#0">View Rankings</a></li>
      </ul>
  </div>       
     
      <div className ="h-100 w-100 dt dt--fixed">
                   <style jsx>
                        { `
                        w-six { width: calc( 100% / 6 ); }
                        ` }                            
                    </style> 
                     
                     <div className="dtc  w-six h-50 pv5 bg-gray tc"><Link href="/sharePage"><a className=" v-mid f3 link  dim br-pill ph3 pv2 mb2 white bg-dark-green tc"> Probiotics </a></Link> </div>
                     <div className="dtc  w-six h-50  pv5 bg-gold tc"><Link href="/sharePage"><a className=" v-mid f3 link  dim br-pill ph3 pv2 mb2 white bg-dark-green tc" >Protein</a></Link>  </div>
            
                     <div className="dtc  w-six  h-50 pv5 bg-light-red tc"><Link href="/sharePage"><a className=" v-mid f3 link  dim br-pill ph3 pv2 mb2 white bg-dark-green tc" >Multivitamins</a></Link>  </div> 
                     <div className="dtc  w-six  h-50 pv5 bg-pink tc "><Link href="/sharePage"><a className=" v-mid f3 link  dim br-pill ph3 pv2 mb2 white bg-dark-green tc" >Prenatal Vitamins</a></Link>   </div>
                     <div className="dtc  w-six  h-50 pv5 bg-blue tc"><Link href="/sharePage"><a className=" v-mid f3 link  dim br-pill ph3 pv2 mb2 white bg-dark-green tc" >Garcinia Cambogia</a></Link>  </div>
                     <div className="dtc  w-six  h-50 pv5 bg-yellow tc "><Link href="/sharePage"><a className=" v-mid f3 link  dim br-pill ph3 pv2 mb2 white bg-dark-green tc" >fishoil</a></Link>   </div>
            
      
       </div>      
       <div className ="h-100 w-100">
             <br/>
             <br/>

             <h1 className="tc">What's really in your supplements?</h1> 
             <br/>
             <h3 className="tc">Skip the sales tricks and user reviews. Shop with facts at Labdoor.</h3> 
             <li className ="tc"><a className=" f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" href="#0">View Ranking</a></li>
       </div> 
</div>
        )
    }
}
