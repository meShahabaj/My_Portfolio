import "./App.css"
import {useRef, useEffect} from "react";
import { FcHome, FcInspection, FcManager, FcBusinessContact, FcDownload } from "react-icons/fc";
function App() {
  const headerButtons = [
    { name: "Home", icon: <FcHome className="icon"/> },
    { name: "About", icon: <FcManager className="icon"/> },
    { name: "Certificates", icon: <FcInspection  className="icon"/> },
    { name: "Contact", icon: <FcBusinessContact className="icon"/> },
    { name: "Download CV", icon: <FcDownload className="icon"/> },
  ];

  const courses = ["SimpliLearn_Certificate_DL.png", "SimpliLearn_Certificate_ML.jpeg", "Udemy.jpeg"]
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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1; // slow down
    }
  }, []);

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
        <video ref={videoRef} autoPlay muted loop playsInline className="page_home_bgvideo">
          <source src="/My_Portfolio/video.mp4" type="video/mp4"/>
        </video>
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
          Hey, I’m Shahabaj Khan! I’m a data enthusiast who loves turning ideas into real, 
          working projects. I enjoy building clean, efficient, and user-friendly digital 
          experiences — whether that’s through Python, React, JavaScript, or machine learning.
          I’m always curious about how things work and love diving into challenging problems. 
          Learning new tools and experimenting with different technologies is what keeps me motivated.
          When I’m not coding, I’m usually exploring new tech trends, tinkering with side projects,
          or contributing to open-source. My goal is simple — to build things that make an impact 
          and leave a lasting impression.
          I really enjoy collaborating with others and meeting people who are just as passionate 
          about innovation and technology as I am.</p>          
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
