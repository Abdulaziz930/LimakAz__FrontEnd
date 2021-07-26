import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { fetchAdvertisements } from "../actions";
import CalculatorWrapper from "./CalculatorWrapper";

const Intro = () => {
  // const dispatch = useDispatch();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
  };

  const { advertisements } = useSelector((state) => state.advertisements);

  // useEffect(() => {
  //   dispatch(fetchAdvertisements(3));
  // }, [dispatch]);

  return (
    <div className='intro'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='slider mt-4'>
              <Slider {...settings}>
                {advertisements.advertisementDto.map((advertisement) => {
                  return (
                    <div key={advertisement.id}>
                      <Link
                        to={`Advertisements/${advertisement.id}`}
                        className='slider-img-link'>
                        <img
                          src={`./images/${advertisement.image}`}
                          alt={advertisement.title}
                          className='img-fluid'
                        />
                      </Link>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
          <div className='col-lg-4'>
            <CalculatorWrapper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
