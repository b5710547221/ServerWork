import React from 'react'
import Link from 'next/link'
export default class extends React.Component{
    render(){
        return(
            <div>
            <article className="dt w-100 bb b--black-05 pb2 mt2 di tc" href="#0">
              <div className="dtc w2 w3-ns v-mid">
                  <img src="img2.jpeg" class="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"/>
              </div>
              <div className="dtc v-mid pl3">
                  <h1 className="f6 f5-ns fw6 lh-title black mv0">product1 </h1>
                  
              </div>
              <div class="dtc v-mid">
                  <form className="w-100 tr">
                  <button className="br-pill f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">See more</button>
                  </form>
              </div>
              </article>
            </div>
            
        )
    }
}
