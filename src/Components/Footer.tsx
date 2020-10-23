import React from "react";
import "./../App.css";
import {FaGithub} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="page-wrapper">
        
      </div>
      

      <footer>
        <div className="footer ">
          
            <div className="footer-section about">
              <div className="logo-text"> &copy; Bojaz
              <a
                  href="https://github.com/OmarMWarraich"
                  rel="noopener noreferrer"
                  target="_blank"
                  className='setGit'
                >
                 <FaGithub></FaGithub>
                </a>
              </div>
        
          </div>
          {/* <div className="footer-bottom">
          </div> */}
        </div>
      </footer>
    </div>
  );
}

export default Footer;