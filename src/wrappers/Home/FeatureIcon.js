import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icon.json";
import FeatureIconSingle from "../../components/feature-icon/FeatureIconSingle.js";

const FeatureIcon = ({ bgColorClass, spaceBottomClass, featureShapeClass }) => {
  return (
    <div
      className={`support-area ${bgColorClass ? bgColorClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {featureIconData &&
            featureIconData.map((single, key) => {
              return (
                <FeatureIconSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                  featureShapeClass={featureShapeClass}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

FeatureIcon.propTypes = {
  bgColorClass: PropTypes.string,
  featureShapeClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
};

export default FeatureIcon;
