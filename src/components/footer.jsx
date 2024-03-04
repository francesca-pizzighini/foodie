import FooterLink from "./footerLink";
import FooterSocial from "./footerSocial";

function Footer() {
  return (
    <div className="footer">

        <div className="foo-break">
            <FooterLink
                text="Find your next meal"
                linkText="Discover more"
                routerText="/recipes"
            />
            
            <FooterLink
                text="Discover how this project started"
                linkText="Click here"
                routerText="/about"
            />
        </div>

        <FooterSocial/>
    </div>
  )
}

export default Footer;