import React, { useEffect } from "react";
import { message, Button } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, fetchProducts } from "./redux/actions/productAction";
import "./App.css";

function App() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    if (products.msg.msg) {
      message.success(products.msg.msg);
    }
  }, [products.msg.msg]);
  return (
    <div>
      {products.allProducts.products.data?.data.map((user, index) => {
        return (
          <div key={user.id} key={index}>
            <p>
              <strong>{user.first_name}</strong>
            </p>
            <p>{user.email}</p>
            <img key={user.avatar} src={user.avatar} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
