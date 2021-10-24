import React from "react";
import resume1 from "../../assets/project/resume1.png";
import resume2 from "../../assets/project/resume2.png";
import resume3 from "../../assets/project/resume3.png";
import resume4 from "../../assets/project/resume4.png";


const Resume = () => (
  <div>
    <h1>Resume Page</h1>
    <p>
   

<img src={resume1} className="my-2" style={{ width: "40%" }} alt="cover" />
<img src={resume2} className="my-2" style={{ width: "40%" }} alt="cover" />
<img src={resume3} className="my-2" style={{ width: "40%" }} alt="cover" />
<img src={resume4} className="my-2" style={{ width: "40%" }} alt="cover" />




    </p>
  </div>
);

export default Resume;
