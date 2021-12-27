import { LazyLoadImage } from 'react-lazy-load-image-component';
import { GiPositionMarker } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const DestinationsList = ({ destinations }) => {
  return (
    <div className="col-3 p-15">
      <div className="destinations__card animation">
        <div className="destinations__card__img">
          <LazyLoadImage src={destinations.image} alt={destinations.image} />
        </div>
        <div className="destinations__card__layer">
          <div className="destinations__card__layer__content">
            <GiPositionMarker size={20} />
            <div className="destinations__card__layer__content__country">
              {destinations.name}
            </div>
          </div>
        </div>
        <div className="destinations__card__info">
          <div className="destinations__card__info__text">
            <Link className="btn-white" to={`/details/${destinations.id}`}>
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DestinationsList;
