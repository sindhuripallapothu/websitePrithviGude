import React from 'react'
const Header = () => {
    return(
        <div> 
            <h1>PRITHVI GUDE</h1>
        
            <nav class="navbar navbar-inverse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#Home">Home</a></li>
                    <li><a href="#Analytics">Why AA</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Experience">Experience</a></li>
                    <li><a href="#Education">Education</a></li>
                    <li><a href="#Certification">Certification</a></li>
                    <li><a href="#Resume">Resume</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
            <div class=" overlay-image _bp ">
            <img class=" image _bq " src="https://s3-us-west-1.amazonaws.com/avocadoanalytix.com/Website+dump/Avocado+Analytics.jpg" alt="avalytics"></img>
            <div class=" text _q ">
                <h2><pre>AVOCADO ANALYTICS METHODOLOGY</pre></h2>
               </div>
            </div>
        </div>
    )
}
export default Header