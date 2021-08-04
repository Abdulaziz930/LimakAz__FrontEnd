import React, { useEffect } from "react";
import Banner from "./Banner";
import SectionBox from "./SectionBox";
import { withRouter } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { fetchPrivacy } from "../actions";

const Privacy = (props) => {
  const dispatch = useDispatch();

  const { privacy } = useSelector((state) => state.privacy);
  const { activeLanguage } = useSelector((state) => state.languages);
  const {
    location: { pathname },
  } = props;

  const pathNames = pathname.split("/").filter((x) => x);

  useEffect(() => {
    dispatch(fetchPrivacy());
  }, [dispatch, activeLanguage]);

  return (
    <div className='privacy-wrapper'>
      <Banner
        bannerTitle={privacy.privacyTitle}
        pathName={privacy.breadcrumbPathname}
      />
      <div className='privacy-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3'>
              <SectionBox pathName={pathNames[0]} />
            </div>
            <div className='col-md-9'>
              <div className='img-box'>
                <img
                  src={`http://localhost:3000/images/${privacy.image}`}
                  className='img-fluid'
                  alt=''
                />
              </div>
              <div
                className='description'
                dangerouslySetInnerHTML={{ __html: privacy.description }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Privacy);
