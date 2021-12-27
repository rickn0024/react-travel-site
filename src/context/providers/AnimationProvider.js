import { useEffect } from 'react';
import AnimationContext from '../AnimationsContext';

const AnimationProvider = ({ children }) => {
  const scrollAnimations = () => {
    const animation = (elements, className) => {
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const viewPortHeight = window.innerHeight - 150;
        if (elementPosition < viewPortHeight) {
          element.classList.add(className);
        } else {
          element.classList.remove(className);
        }
      });
    };
    const elements = document.querySelectorAll('.animation');
    const headingElements = document.querySelectorAll('.headingAnimation');
    animation(elements, 'animate');
    animation(headingElements, 'headingAnimate');
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollAnimations);
  }, []);
  return (
    <AnimationContext.Provider value>{children}</AnimationContext.Provider>
  );
};
export default AnimationProvider;
