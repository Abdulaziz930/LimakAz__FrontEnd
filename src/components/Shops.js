import React, { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCountriesContent,
  fetchShops,
  getShopsCount,
  fetchShopContent,
} from "../actions";

const Shops = () => {
  const dispatch = useDispatch();

  const { countries } = useSelector((state) => state.countries);
  const { shops } = useSelector((state) => state.shops);
  const { shopsCount } = useSelector((state) => state.shopsCount);
  const { shopContent } = useSelector((state) => state.shopContent);

  const [currentCountry, setCurrentCountry] = useState("");
  const [currentCountryId, setCurrentCountryId] = useState(0);
  const [shopList, setShopList] = useState([]);
  const [number, setNumber] = useState(0);
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    dispatch(fetchCountriesContent());
    dispatch(fetchShops());
    dispatch(getShopsCount());
    dispatch(fetchShopContent());
    setCurrentCountry("Turkey");
  }, [dispatch]);

  useEffect(() => {
    if (isChanged === false) {
      if (number === 0) {
        setShopList(shops);
      } else {
        let result = [...shopList];
        shops.forEach((shop) => {
          result.push(shop);
        });
        setShopList(result);
      }
    } else {
      setShopList(shops);
    }
  }, [shops]);

  const handleClickCountry = (country) => {
    dispatch(fetchShops(country.id));
    dispatch(getShopsCount(country.id));
    setCurrentCountry(country.value);
    setCurrentCountryId(country.id);
    setIsChanged(true);
  };

  const handleCliclLoadMore = () => {
    if (currentCountryId === 0) {
      dispatch(fetchShops(1, shopList.length, 12));
      setNumber(1);
      setIsChanged(false);
    } else {
      dispatch(fetchShops(currentCountryId, shopList.length, 12));
      setNumber(1);
      setIsChanged(false);
    }
  };

  return (
    <div className='shops-wrapper'>
      <div className='shop-header'>
        <div className='container'>
          <div className='shop-header-wrapper'>
            <h4>{shopContent.title}</h4>
            <Breadcrumbs />
          </div>
        </div>
      </div>
      <div className='shop-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='country-box'>
                <h4>{shopContent.countryListTitle}</h4>
                <ul className='countries'>
                  {countries.map((country) => {
                    return (
                      <li key={country.id}>
                        <span
                          className={
                            currentCountry === country.value ? "active" : ""
                          }
                          onClick={() => handleClickCountry(country)}>
                          {country.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className='col-md-9'>
              <div className='shop-content-header'>
                <h2>{shopContent.shopListTitle}</h2>
              </div>
              <div className='row'>
                {shopList.map((shop) => {
                  return (
                    <div className='col-md-4' key={shop.id}>
                      <a href={shop.url} target='_blank' rel='noreferrer'>
                        <div className='shop-box'>
                          <div className='shop-box-wrapper'>
                            <div className='imgBox'>
                              <img
                                src={`http://localhost:3000/images/${shop.image}`}
                                alt=''
                                className='img-fluid'
                              />
                            </div>
                            <span className='shop-title'>{shop.title}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
              {shopList.length === shopsCount ? (
                ""
              ) : (
                <div className='button-box'>
                  <button className='btn' onClick={() => handleCliclLoadMore()}>
                    {shopContent.buttonName}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shops;
