import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const FooterIntro = () => {
  const [state] = useState({
    logo: '/assets/footer/logo.png',
    intro:
      'Travel friends is a travel agency, we arrange tours to the worlds most famous and most beautiful countries. Since 2005 we have provided quality service to our valuable customers.',
  });
  return (
    <div className="footer__intro">
      <div className="footer__intro__img animation">
        <LazyLoadImage src={state.logo} alt="Footer Logo" />
      </div>
      <p className="footer__intro__message animation">{state.intro}</p>
    </div>
  );
};
export default FooterIntro;
