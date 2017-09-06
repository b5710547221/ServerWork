import React from 'react'
import Link from 'next/link'
import DataCom from '../components/data_page1'
import schema from './schema'

 
export default class extends React.Component{
    render(){
        return(
            
            <div className="tc">
                 <meta content="text/html; charset=UTF-8" http-equiv="content-type"/>
                 <title>labdoor</title>
                 <meta name="viewport" content="width=device-width, initial-scale=1"/>
                 <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css"/>
                 <link rel="stylesheet" href="http://npmcdn.com/tachyons-skins@4.0.0/css/tachyons-skins.min.css" />
                 
                 <style>
                     
                 </style>
                <div className = "">
                    <nav className ="pa3  tc  pa4-ns">
                        <a className="link dim black   f6 f5-ns dib mr3" href="#" title="Home">labdoor</a>
                        <a className="link dim gray   f6 f5-ns dib mr3" href="#" title="about">About</a>
                        <a className="link dim gray   f6 f5-ns dib mr3" href="#" title="rank">Rankings</a>
                        <a className="link dim gray   f6 f5-ns dib mr3" href="#" title="Mag">Magazines</a>
                        <a className="link dim gray   f6 f5-ns dib mr3" href="#" title="logIn">log in</a>
                        <a className="link dim gray   f6 f5-ns dib mr3" href="#" title="sign">sign</a>
                        <a className="link dim gray   f6 f5-ns dib mr3" href="#" title="cart">cart</a>
                        <a className="link dim gray   f6 f5-ns dib mr3" href="#" title="search">search</a>
                    </nav>
                    <header className ="tc">
                        <h3> TOP 10 PROBIOTICS SUPPLEMENT </h3>
                        <p>See our xx product reports.</p>
                    </header>
                </div>
                <div className="ph3 tc">
                   <a className="tc f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black" href="#0">Quality</a>
                   <a className="tc f6 link dim br2 ph3 pv2 mb2 dib white bg-near-black" href="#0">Value</a>
                </div>
   
        <form className=" mw4 center  ">
            
            <fieldset id="search" className="">
            
            <div className="tc dib">
            <input className="mr2" type="checkbox" id="all" value="all"/>
            <label for="all" className="lh-copy">All Products</label>
            </div>
            <div className="tc dib">
            <input className="mr2" type="checkbox" id="Bacillus" value="Bacillus"/>
            <label for="Bacillus" className="lh-copy">Bacillus</label>
            </div>
            <div className="tc dib">
            <input className="mr2" type="checkbox" id="Bifidobacterium" value="Bifidobacterium"/>
            <label for="Bifidobacterium" className="lh-copy">Bifidobacterium</label>
            </div>
            <div className="tc dib">
            <input className="mr2" type="checkbox" id="Enterococcus" value="Enterococcus"/>
            <label for="Enterococcus" className="lh-copy">Enterococcus</label>
            </div>
            <div className="tc dib">
            <input className="mr2" type="checkbox" id="Lactobacillus" value="Lactobacillus"/>
            <label for="Lactobacillus" className="lh-copy">Lactobacillus</label>
            </div>
            <div className="tc dib">
            <input className="mr2" type="checkbox" id="Lectococcus" value="Lectococcus"/>
            <label for="Lectococcus" className="lh-copy">Lectococcus</label>
            </div>
            <div className="tc dib">
            <input className="mr2" type="checkbox" id="Saccharomyces" value="Saccharomyces"/>
            <label for="Saccharomyces" className="lh-copy">Saccharomyces</label>
            </div>
            <div className="tc dib">
            <input className="mr2" type="checkbox" id="Streptococcus" value="Streptococcus"/>
            <label for="Streptococcus" className="lh-copy">Streptococcus</label>
            </div>
             </fieldset>
             
        </form>
     
        <main className="mw6 center tc">
            <DataCom/>
         </main>
            </div>
           
        )
    }
}