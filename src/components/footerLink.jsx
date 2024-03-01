import { HashLink } from 'react-router-hash-link';

function FooterLink({text, linkText, routerText}) {
  return (
    <div 
        className="foo"
    >
        <p 
            className="foo-text satisfy-regular"
        >{text}</p>

        <HashLink 
            className="foo-link"
            to={`${routerText}#navbar`}
        >{linkText}</HashLink>
    </div>
  )
}

export default FooterLink