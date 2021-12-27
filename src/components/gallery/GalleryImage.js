import { useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import GalleryContext from '../../context/GalleryContext';
import { OPEN_LIGHTBOX } from '../../context/types/GalleryTypes';

const GalleryImage = ({ glr }) => {
  const { dispatch } = useContext(GalleryContext);
  const openLightbox = imageObject => {
    dispatch({ type: OPEN_LIGHTBOX, payload: imageObject });
  };
  return (
    <div className="col-3">
      <div className="gallery__image animation">
        <LazyLoadImage src={glr.image} onClick={() => openLightbox(glr)} />
      </div>
    </div>
  );
};
export default GalleryImage;
