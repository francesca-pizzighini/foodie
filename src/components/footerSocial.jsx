import { HashLink } from 'react-router-hash-link';

import foodie from "../assets/img/foodie.png";
import fbLogo from "../assets/img/facebook-logo.png";
import igLogo from "../assets/img/instagram-logo.png";
import xLogo from "../assets/img/x-logo.png";

function FooterSocial() {
  return (
    <div className="foo foo-s">
        <HashLink
            to="/#navbar"
        >
            <img
            src={foodie}
            alt="logo del brand"
            />
        </HashLink>
        
        <div className="foo-social">
            <a 
                href="https://www.facebook.com/"
                target='_blank'
            >
                <img
                    id="fb-logo"
                    src={fbLogo}
                    alt="Facebook logo"
                />
            </a>

            <a 
                href="https://www.instagram.com/"
                target='_blank'
            >
                <img
                    id="ig-logo"
                    src={igLogo}
                    alt="Instagram logo"
                />
            </a>

            <a 
                href="https://www.twitter.com/"
                target='_blank'
            >
                <img
                    src={xLogo}
                    alt="X logo"
                />
            </a>
        </div>
    </div>
  )
}

export default FooterSocial;