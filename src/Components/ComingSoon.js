import React from 'react';
import { ReactComponent as IconFacebook } from '../Assets/Svg/icons8-facebook.svg';
import { ReactComponent as IconYoutube } from '../Assets/Svg/icons8-youtube.svg';
import { ReactComponent as IconLinkedin } from '../Assets/Svg/linkedin.svg';


const ComingSoon = () => {
  const handleEmailLinkClick = () => {
    window.location.href = 'mailto:info@nandalalainfotech.com';
  };
    return (
       <>
       <div className="card">
        <div className="header">
          <div className="logo">
           <span> <a className="" href="https://nandalalainfotech.com/" target="_blank" rel="noopener noreferrer"><img className='nanda_logo' src={"./images/nandalala.green.svg"}/></a> </span>
          </div>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=61555301096609609"  target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon1" />
            </a>
            <a href="https://www.youtube.com/watch?v=l3bmI7NdPfE"  target="_blank" rel="noopener noreferrer">
              <IconYoutube className="icon2" />
            </a>
        
            <a href="https://www.linkedin.com/in/invoicefree-nandalala-91ab122a7/"  target="_blank" rel="noopener noreferrer">
              <IconLinkedin className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for the change.</h1>
            <p>Website coming soon. Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:info@nandalalainfotech.com" onClick={handleEmailLinkClick}>
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>powered by <a className="underlined" href="https://nandalalainfotech.com/" target="_blank" rel="noopener noreferrer">nandalalainfotech.com</a>  <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer"></a>  <a className="underlined" href="https://github.com/arkn98/coming-soon" title="GitHub repo" target="_blank" rel="noopener noreferrer"></a></span>
        </div>
      </div>
       </>
    );
};

export default ComingSoon; 
