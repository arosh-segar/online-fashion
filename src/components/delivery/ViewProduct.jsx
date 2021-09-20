import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const ViewProduct = (props) => {
    const { onCloseProduct, openProduct} = props;
    const [products] = useState(props.order.products);
    const [total] = useState(props.order.totalBillAmount);

     

    return (
        <div>
            <Modal open={openProduct} onClose={onCloseProduct} center >
                <div className="p-5 w-96 h-40" >
                    <h2 className="text-center font-semibold font-sans mb-5">Products</h2>
                   
                        {products.map(product =>
                          <p className="text-left mt-2"> {product.productName}</p>
                        )}
                    
                    <h2 className="text-right font-semibold font-sans mt-6 ml-8">Total :{total}</h2>
                </div>
            </Modal>
        </div>
    );
};

export default ViewProduct;