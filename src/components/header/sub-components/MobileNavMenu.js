import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>Các trang</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/cart"}>Giỏ hàng</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/checkout"}>Thanh toán</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/wishlist"}>Yêu thích</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>Tài khoản</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                Đăng nhập
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/about"}>Về chúng tôi</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Liên hệ</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
