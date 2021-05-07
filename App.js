
import './index.css';
import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


function App() {
  return (
<>
    <div>
      <div className="navbar"></div>
     
      <div className="links">
        <Link to = "/products.js"> Products </Link>

        <a href= "/about.html"> About Us </a>
        <a href= "/login.html"> Login </a>
        <a className="active" href="/homepage.html">Home</a>
      </div>
    </div>

    <div classname="images"></div>
    <div id="para" style={{float: 'font-family:palatino;'}}>Best Quality Product</div>
    <img src ='/images/1.jpg' alt="" width="700" height="800"/>

    <div id="para1">
		  <p>Directions</p>
	  </div>
    <div classname="QMbmRe" style={{float: "background-image:url('https://maps.googleapis.com/maps/api/staticmap?scale=1&amp;size=1600x900&amp;style=feature:poi.business|visibility:off&amp;style=feature:water|visibility:simplified&amp;style=feature:road|element:labels.icon|visibility:off&amp;style=feature:road.highway|element:labels|saturation:-90|lightness:25&amp;format=jpg&amp;language=en-GB&amp;region=IN&amp;markers=color:0xd07ea7|13.9387917,75.5721107&amp;zoom=16&amp;client=google-presto&amp;signature=f9vEdknSt3L6-IRRruX3IFkKQW4')"}} title="Map showing business location.">
    </div>
    <div classname="slideshow container">
      <div classname="mySlides fade">
        <div classname="numbertext">1 / 3</div>
        <img src='/images/1.jpg' style={{float: "width:100%"}} alt="" width="400" height="400" ></img>
      </div>
    </div>
    <div classname="mySlides fade">
        <div classname="numbertext">2 / 3</div>
        <img src='/images/1.jpg' style={{float: "width:100%"}} alt="" width="400" height="400"></img>
      </div>
      <div classname="mySlides fade">
        <div classname="numbertext">3 / 3</div>
        <img src='/images/1.jpg' style={{float: "width:100%"}} alt="" width="400" height="400" ></img>
      </div>
    <div>
      <button onclick="plusSlides(-1)">&#10094;</button>
      <button onclick="plusSlides(1)">&#10095;</button>
    </div>
   
    <div style={{float: "text-align:center"}}>
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>



 
    




 </>       
    

         
      
    
   
        
  
  
      
  

  )
}


export default App;