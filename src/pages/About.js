import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageContainer from '../components/pages-parts/PageContainer';
import AboutImage from '../components/pages-parts/AboutImage';

const About = () => {
  const [state] = useState({
    heading: 'about us',
    pageHeading: 'worlds best travel agency since 2005',
    message:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus similique quia voluptatum eum aperiam maiores. Adipisci nihil similique doloremque? Veniam nam sunt ipsa ducimus voluptas magnam. At, rem. Cupiditate!',
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="travel friends about page" />
      </Helmet>
      <PageContainer data={state}>
        <AboutImage />
      </PageContainer>
    </>
  );
};
export default About;
