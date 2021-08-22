import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { API_URL } from "../../constants";
import { serialize } from "object-to-formdata";
import axios from "axios";
import ResponseModal from "./ResponseModal";

const EditInventoryModal = (props) => {
  const { onCloseEditModal, openEdit, productCode, editStock } = props;
  const stock = props.stock;
  /* Response Modal variables */
  const [openResponse, setOpenResponse] = useState(false);
  const onOpenResponseModal = () => setOpenResponse(true);
  const onCloseResponseModal = () => {
    setOpenResponse(false);
    onCloseEditModal();
  };
  const [checkXS, setCheckXS] = useState(isNaN(stock.sizes.xs));
  const [checkS, setcheckS] = useState(stock.sizes.s);
  const [checkM, setcheckM] = useState(stock.sizes.m);
  const [checkL, setcheckL] = useState(stock.sizes.l);
  const [checkXL, setcheckXL] = useState(stock.sizes.xl);
  const [productName, setProductName] = useState(stock.productName);
  const [productType, setProductType] = useState(stock.productType);
  const [productCategory, setProductCategory] = useState(stock.productCategory);
  const [pricePerUnit, setPricePerUnit] = useState(stock.pricePerUnit);
  const [reorderQty, setReorderQty] = useState(stock.reorderQty);
  const [xsSizeAvailableQty, setXsSizeAvailableQty] = useState(
    stock.sizes.xs.xsSizeAvailableQty
  );
  const [sSizeAvailableQty, setSSizeAvailableQty] = useState(
    stock.sizes.s.sSizeAvailableQty
  );
  const [mSizeAvailableQty, setMSizeAvailableQty] = useState(
    stock.sizes.m.mSizeAvailableQty
  );
  const [lSizeAvailableQty, setLSizeAvailableQty] = useState(
    stock.sizes.l.lSizeAvailableQty
  );
  const [xlSizeAvailableQty, setXlSizeAvailableQty] = useState(
    stock.sizes.xl.xlSizeAvailableQty
  );
  const [productImage, setProductImage] = useState(stock.productImageUrl);
  const [previewProductImage, setPreviewProductImage] = useState(
    props.stock.productImageUrl
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let xs, s, m, l, xl;

    checkXS
      ? (xs = {
          xsSizeAvailableQty: parseFloat(xsSizeAvailableQty),
        })
      : (xs = null);

    checkS
      ? (s = {
          sSizeAvailableQty: parseFloat(sSizeAvailableQty),
        })
      : (s = null);

    checkM
      ? (m = {
          mSizeAvailableQty: parseFloat(mSizeAvailableQty),
        })
      : (m = null);

    checkL
      ? (l = {
          lSizeAvailableQty: parseFloat(lSizeAvailableQty),
        })
      : (l = null);

    checkXL
      ? (xl = {
          xlSizeAvailableQty: parseFloat(xlSizeAvailableQty),
        })
      : (xl = null);

    const sizes = {
      xs,
      s,
      m,
      l,
      xl,
    };

    const product = {
      productName,
      productType,
      productCategory,
      pricePerUnit: parseFloat(pricePerUnit),
      reorderQty: parseFloat(reorderQty),
      sizes,
      productImage,
    };

    const formData = serialize(product);

    axios
      .put(`${API_URL}/inventory/updateStock/${stock._id}`, formData)
      .then((response) => {
        onOpenResponseModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <Modal open={openEdit} onClose={onCloseEditModal} center>
        <div className="p-5 w-250 md:w-500">
          <h2 className="text-center font-semibold font-sans">Edit Stock</h2>

          <div className="">
            <form
              onSubmit={handleSubmit}
              className="mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden"
            >
              {/* Product Name */}
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Product Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="NIKE T-shirt"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              {/* Product Type */}
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Product Type
                </label>
                <select
                  className="p-2 border border-none w-full rounded-lg text-black"
                  style={{ textAlignLast: "center" }}
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                >
                  <option value="0" selected>
                    Select
                  </option>
                  <option value="tShirts">T-shirts</option>
                  <option value="trousers">Trousers</option>
                  <option value="sports">Sports</option>
                </select>
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              {/* Product Category */}
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Product Category
                </label>
                <select
                  className="p-2 border border-none w-full rounded-lg text-black"
                  style={{ textAlignLast: "center" }}
                  value={productCategory}
                  onChange={(e) => setProductCategory(e.target.value)}
                >
                  <option value="0" selected>
                    Select
                  </option>
                  <option value="men">men</option>
                  <option value="women">women</option>
                  <option value="kids">kids</option>
                </select>
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              {/* Price per unit */}
              <div class="w-full px-3 mt-10 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Price per unit
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="1000"
                  type="number"
                  value={pricePerUnit}
                  onChange={(e) => setPricePerUnit(e.target.value)}
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              {/* Reorder quantity */}
              <div class="w-full px-3 mt-10 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Re-order quantity
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="1000"
                  type="number"
                  value={reorderQty}
                  onChange={(e) => setReorderQty(e.target.value)}
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="w-full px-3 mt-10 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Select sizes and quantity
                </label>
                {/* XS */}
                <div>
                  <label class="flex mx-2 items-center text-gray-700 font-semibold">
                    <input
                      class="mr-2 leading-tight"
                      type="checkbox"
                      onClick={() => setCheckXS(!checkXS)}
                      checked={checkXS}
                    />
                    <span class="text-sm">XS</span>
                  </label>
                  <div className={checkXS ? "block" : "hidden"}>
                    <div className="flex flex-row items-center px-10">
                      <label
                        class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                        for="grid-first-name"
                      >
                        Available quantity
                      </label>
                      <input
                        class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="number"
                        value={xsSizeAvailableQty}
                        onChange={(e) => setXsSizeAvailableQty(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* S */}
                <div>
                  <label class="flex mx-2 items-center text-gray-700 font-semibold">
                    <input
                      class="mr-2 leading-tight"
                      type="checkbox"
                      onClick={() => setcheckS(!checkS)}
                      checked={checkS}
                    />
                    <span class="text-sm">S</span>
                  </label>
                  <div className={checkS ? "block" : "hidden"}>
                    <div className="flex flex-row items-center px-10">
                      <label
                        class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                        for="grid-first-name"
                      >
                        Available quantity
                      </label>
                      <input
                        class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="number"
                        value={sSizeAvailableQty}
                        onChange={(e) => setSSizeAvailableQty(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* M */}
                <div>
                  <label class="flex mx-2 items-center text-gray-700 font-semibold">
                    <input
                      class="mr-2 leading-tight"
                      type="checkbox"
                      onClick={() => setcheckM(!checkM)}
                      checked={checkM}
                    />
                    <span class="text-sm">M</span>
                  </label>
                  <div className={checkM ? "block" : "hidden"}>
                    <div className="flex flex-row items-center px-10">
                      <label
                        class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                        for="grid-first-name"
                      >
                        Available quantity
                      </label>
                      <input
                        class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="number"
                        value={mSizeAvailableQty}
                        onChange={(e) => setMSizeAvailableQty(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* L */}
                <div>
                  <label class="flex mx-2 items-center text-gray-700 font-semibold">
                    <input
                      class="mr-2 leading-tight"
                      type="checkbox"
                      onClick={() => setcheckL(!checkL)}
                      checked={checkL}
                    />
                    <span class="text-sm">L</span>
                  </label>
                  <div className={checkL ? "block" : "hidden"}>
                    <div className="flex flex-row items-center px-10">
                      <label
                        class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                        for="grid-first-name"
                      >
                        Available quantity
                      </label>
                      <input
                        class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="number"
                        value={lSizeAvailableQty}
                        onChange={(e) => setLSizeAvailableQty(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                {/* XL */}
                <div>
                  <label class="flex mx-2 items-center text-gray-700 font-semibold">
                    <input
                      class="mr-2 leading-tight"
                      type="checkbox"
                      onClick={() => setcheckXL(!checkXL)}
                      checked={checkXL}
                    />
                    <span class="text-sm">XL</span>
                  </label>
                  <div className={checkXL ? "block" : "hidden"}>
                    <div className="flex flex-row items-center px-10">
                      <label
                        class="block w-8/12 items-center uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                        for="grid-first-name"
                      >
                        Available quantity
                      </label>
                      <input
                        class="appearance-none w-4/12 bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        type="number"
                        value={xlSizeAvailableQty}
                        onChange={(e) => setXlSizeAvailableQty(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Image */}
              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  Product Image upload
                </label>
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  name="photo"
                  onChange={(e) => {
                    setProductImage(e.target.files[0]);
                    setPreviewProductImage(
                      URL.createObjectURL(e.target.files[0])
                    );
                  }}
                />
                <p class="text-red-500 text-xs italic">
                  Please select an image
                </p>
              </div>
              {previewProductImage && (
                <div className="px-4 flex justify-center">
                  <img
                    src={previewProductImage}
                    className=" mt-4 rounded-lg h-72 w-72"
                    alt="not loaded"
                  />
                </div>
              )}

              <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                <button
                  type="submit"
                  className="w-full rounded-md p-2 mb-5 bg-blue-500"
                >
                  EDIT STOCK
                </button>
                <ResponseModal
                  heading={"Edit stock"}
                  text={`You have successfully updated ${productName}`}
                  color={"#4287f5"}
                  openResponse={openResponse}
                  onCloseResponseModal={onCloseResponseModal}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EditInventoryModal;
