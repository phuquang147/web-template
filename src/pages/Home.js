import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";
import Banner from "../wrappers/Home/Banner";
import FeatureIcon from "../wrappers/Home/FeatureIcon";
import HeroSlider from "../wrappers/Home/HeroSlider";
import TabProduct from "../wrappers/Home/TabProduct";

const Home = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Organic Food Home</title>
        <meta
          name="description"
          content="Organic food home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSlider />
        {/* feature icon */}
        <FeatureIcon
          spaceTopClass="pt-40"
          spaceBottomClass="pb-90"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
        />
        {/* tab product */}
        {/* <TabProduct
          spaceBottomClass="pb-100"
          category="food"
          productTabClass="product-tab-fruits"
        /> */}
        {/* banner */}
        <Banner />
      </LayoutOne>
    </Fragment>
  );
};

export default Home;
