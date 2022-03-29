import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import {
  removeFromCart,
  removeFromFavourites,
} from "../../Redux/Actions/Actions";
import "./edit.css";

function FavouriteItem(props) {
  const { item: product } = props;
  console.log(product);

  return (
    <div className="carddd">
      <div className="card-img-container">
        <img src={product.ImgUrl} alt="..." className="card-img-top" />
      </div>
      <div className="card-body">
        <h5 className="card-title">الاسم:{product.Name}</h5>
        <p className="card-text"> السعر للوحده:{product.Price}</p>
        <p className="card-text"> الربح للوحده:{product.Profit}</p>

        <div className=" p-2 btn-success text-center w-75 ">
          <Link
            to={`/product/${product.Id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="padding-top"
            ></FontAwesomeIcon>{" "}
            &nbsp; أضف الي العربه
          </Link>
        </div>
        <button
          className="btn btn-danger  w-75"
          onClick={() => props.removeFromFavourites(product)}
        >
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> &nbsp; احذف من
          المنتجات المفضله
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  console.log("inside remove from favourites");
  return {
    removeFromFavourites: (product) => dispatch(removeFromFavourites(product)),
  };
};

export default connect(null, mapDispatchToProps)(FavouriteItem);
