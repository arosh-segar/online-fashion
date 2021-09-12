import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const OrderProductItem = (props) => {
  const {
    productID,
    productName,
    productType,
    productCategory,
    productPricePerUnit,
    productImageUrl,
    productQty,
  } = props.product;

  const [totQty, setTotQty] = useState(0.0);
  const status = props.status;
  //   const [statius, setStatus] = useState(props.status);

  useEffect(() => {
    let qty =
      productQty.xs +
      productQty.s +
      productQty.m +
      productQty.l +
      productQty.xl +
      0.0;

    setTotQty(qty);
    // setStatus(props.status);
  }, []);

  //   console.log("pro: ", props.product);

  return (
    <div>
      {status === "name" && (
        <div className="pt-4 pb-4 m-auto text-center font-normal text-gray-900">
          {<p>{productName}</p>}

          {/* {sizes.s && <p>S - {sizes.s.sSizeAvailableQty}</p>}
            {sizes.m && <p>M - {sizes.m.mSizeAvailableQty}</p>}
            {sizes.l && <p>L - {sizes.l.lSizeAvailableQty}</p>}
            {sizes.xl && <p>XL - {sizes.xl.xlSizeAvailableQty}</p>} */}
        </div>
      )}
      {status === "qty" && (
        <div className="pt-4 pb-4 m-auto text-center font-normal text-gray-900">
          {<p>{totQty}</p>}
        </div>
      )}
    </div>
  );
};

export default OrderProductItem;
