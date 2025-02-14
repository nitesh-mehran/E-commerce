import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeFromCart, increaseQuantity,decreaseQuantity } from "../redux/card/cardSlice";
import { Link } from 'react-router-dom'
import Footer from "./Footer";
import { MdDelete } from "react-icons/md";

const Cart =  ({ inputtext })=> {
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allcards);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart, dispatch]);
  return (
    <> 
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: 15 }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">{cart.length}</h6>
                      </div>
                      <hr className="my-4" />
                      {cart
                      .filter((el)=>el.brand.toLowerCase().includes(inputtext))
                      .map((data, index) => {
                        return (
                          <div key={index} className="row mb-4 d-flex justify-content-between align-items-center">
                            <div className="col-md-2 col-lg-2 col-xl-2">
                              <img
                                src={`/images/${data.img}`}
                                className="img-fluid rounded-3 transition-transform duration-300 hover:scale-110"
                                alt="mobile"
                              />
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-3">
                              <h6 className="text-muted">{data.brand}</h6>
                              <h6 className="mb-0">{data.model}</h6>
                            </div>
                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center justify-content-center">
                              <button
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-link px-2"
                                onClick={() => dispatch(decreaseQuantity(data.id))}
                              >
                                <i className="fas fa-minus" />
                              </button>

                              <span className="mx-3 fw-bold text-center">
                                {data.quantity}
                              </span>

                              <button
                                data-mdb-button-init
                                data-mdb-ripple-init
                                className="btn btn-link px-2"
                                onClick={() => dispatch(increaseQuantity(data.id))}
                              >
                                <i className="fas fa-plus" />
                              </button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                              <h6 className="mb-0"> {data.price}</h6>
                            </div>
                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                              <a
                                href="#!"
                                className="text-muted"
                                onClick={() => {
                                  dispatch(removeFromCart(data.id));
                                }}
                              >
                               <span className="text-xl"><MdDelete /></span>
                              </a>
                            </div>
                            <hr className="my-4" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-lg-4 bg-body-tertiary">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">Total Items</h5>
                        <h5>{totalQuantity}</h5>
                      </div>

                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>{totalPrice}</h5>
                      </div>
                      <button
                        type="button"
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                      > <Link className='text-white' to='/topay'> Proceed to Pay</Link>
                       
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
<Footer/>
    </>

  );
};

export default Cart;
