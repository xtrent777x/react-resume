import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpeg";

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">Trent Roesbery Bio</h1>
      <img src={coverImage} className="my-2" style={{ width: "40%" }} alt="cover" />
      <div className="my-2">
        <p>
          Im a current Full Stack Student with ambition for a career change. Current in the Mortgage field working with a mortgage servicer in Bankruptcy. I have been with my current company for 9 years. 2 years in customer service. 2 years in Quality Control and 5 years in Bankruptcy.
          Im Married with 2 kids. Enjoy traveling to beach destinations and Disney with my family. I enjoy golfing and fall and winter activities.
        </p>
      </div>
      <p>
         <a href="mailto:xtrent777x@gmail.com">Email</a>
      </p>
      <p>
      <a href="https://www.linkedin.com/feed/">Linkedin</a>
      </p>
      <p>
      <a href="https://github.com/xtrent777x">Github</a>
      </p>
            

            

            
        
    </section>
  )
}

export default About