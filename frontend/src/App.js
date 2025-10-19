import "./App.css"
import {useRef} from "react";
import { FcHome, FcInspection, FcManager, FcBusinessContact, FcDownload } from "react-icons/fc";
function App() {
  const headerButtons = [
    { name: "Home", icon: <FcHome className="icon"/> },
    { name: "About", icon: <FcManager className="icon"/> },
    { name: "Certificates", icon: <FcInspection  className="icon"/> },
    { name: "Contact", icon: <FcBusinessContact className="icon"/> },
    { name: "Download CV", icon: <FcDownload className="icon"/> },
  ];

  const courses = ["Udemy.jpeg"]
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const certificateRef = useRef(null);
  const contactRef = useRef(null);

  const refMap = {
    Home: homeRef,
    About: aboutRef,
    Certificates: certificateRef,
    Contact: contactRef
  };

  const scrollTo=(ref)=>{
    ref.current.scrollIntoView({behavior: "smooth"})
  }
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/My_Portfolio/CV.pdf";
    link.download = "Shahabaj_Khan_CV.pdf";
    link.click();
  };

  return (
    <div className="page">
      
        <div className="page_pagination">
          {headerButtons.map((b)=>(
            <button className="page_pagination_button" onClick={() => (
              b.name === "Download CV" ? downloadCV() : scrollTo(refMap[b.name]))}>
                {b.icon}
                <span>{b.name}</span>
            </button>))
          }
      </div>        
      
      <div ref={homeRef} className="page_home">
        <div className="page_home_left">
          <p>Hi There, I'm</p>
          <h1>Shahabaj Khan</h1>
          <h3>Data Scientist</h3>
        </div>
        <div  className="page_home_right">
          <img className="page_home_right_img" src="/My_Portfolio/pic.png" alt="Hello" />
        </div>
      </div>
      <div ref={aboutRef} className="page_about">
        <h2 className="page_about_heading">About</h2>
        <p  className="page_about_paragraph">
          Hi, I’m Shahabaj Khan, a passionate and driven Data Scientist with a love for creating efficient, 
          clean, and user-friendly digital solutions. I specialize in Python, React, JavaScript, and Machine
          Learning and have experience building projects that solve real-world problems.
          I enjoy tackling challenging problems, learning new technologies, and continuously improving my skills.
          When I’m not coding, you can find me exploring the latest trends in tech, working on personal projects,
          or contributing to open-source communities.
          My goal is to build impactful applications that not only meet the needs of users but also leave a 
          lasting impression. I thrive in collaborative environments and am always excited to connect with 
          like-minded individuals who share my passion for innovation and technology.</p>          
      </div>
      <div ref={certificateRef} className="page_certificates">
        <h2  className="page_certificates_heading">Certificates</h2>
        <div  className="page_certificates_imgdiv">
            {courses.map((c)=>(<img className="page_certificates_imgdiv_img" alt={c} src={`/My_Portfolio/Courses_pic/${c}`}/>))}
        </div>
      </div>
      <div ref={contactRef} className="page_contact">
        <h2 className="page_contact_heading">Contact</h2>
        <div className="page_contact_div">
          <div className="page_contact_div_div">
            <h2>Mail ID</h2>
            <p>shahabaj773@gmail.com</p>
          </div>
          <div>
            <h2>Github</h2>
            <p>https://github.com/meShahabaj</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
