import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

const HeaderTop = ({ borderStyle }) => {
  return (
    <div
      className={`header-top-wap ${
        borderStyle === "fluid-border" ? "border-bottom" : ""
      }`}
    >
      <div>
        <p>Số điện thoại: 0923 123 123</p>
      </div>
      <div className="header-offer">
        <p>
          Miễn phí giao hàng với đơn từ <span>200.000 VNĐ</span>
        </p>
      </div>
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
};

export default connect()(HeaderTop);
