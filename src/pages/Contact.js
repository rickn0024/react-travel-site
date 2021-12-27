import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageContainer from '../components/pages-parts/PageContainer';
import ContactForm from '../components/pages-parts/ContactForm';

const Contact = () => {
  const [state] = useState({
    heading: 'contact us',
    pageHeading: 'leave your message in the contact form',
    message:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum temporibus similique quia voluptatum eum aperiam maiores. Adipisci nihil similique doloremque? Veniam nam sunt ipsa ducimus voluptas magnam. At, rem. Cupiditate!',
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="travel friends contact page" />
      </Helmet>
      <PageContainer data={state}>
        <ContactForm />
      </PageContainer>
    </>
  );
};
export default Contact;
