import PropTypes from "prop-types";
import React, { lazy, Suspense } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import ScrollToTop from "./helpers/scroll-top";
//
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const MyAccount = lazy(() => import("./pages/MyAccount"));
const LoginRegister = lazy(() => import("./pages/LoginRegister"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = (props) => {
  return (
    <ToastProvider placement="bottom-right">
      <BrowserRouter>
        <ScrollToTop>
          <Suspense
            fallback={
              <div className="preloader-wrapper">
                <div className="preloader">
                  <span></span>
                  <span></span>
                </div>
              </div>
            }
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/shop" component={Shop} />
              <Route
                path="/product/:id"
                render={(routeProps) => (
                  <Product {...routeProps} key={routeProps.match.params.id} />
                )}
              />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/my-account" component={MyAccount} />
              <Route exact path="/login-register" component={LoginRegister} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/wishlist" component={Wishlist} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/not-found" component={NotFound} />
              <Route exact component={NotFound} />
            </Switch>
          </Suspense>
        </ScrollToTop>
      </BrowserRouter>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(App);
