import React, { useState } from "react";
import { API_URL } from "../../constants";
import axios from "axios";
import { serialize } from "object-to-formdata";
import Scale from "../loaders/Scale";
import ResponseModal from "../modals/ResponseModal";

const AddStock = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkXS, setCheckXS] = useState(false);
  const [checkS, setcheckS] = useState(false);
  const [checkM, setcheckM] = useState(false);
  const [checkL, setcheckL] = useState(false);
  const [checkXL, setcheckXL] = useState(false);
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [reorderQty, setReorderQty] = useState("");
  const [xsSizeAvailableQty, setXsSizeAvailableQty] = useState("");
  const [sSizeAvailableQty, setSSizeAvailableQty] = useState("");
  const [mSizeAvailableQty, setMSizeAvailableQty] = useState("");
  const [lSizeAvailableQty, setLSizeAvailableQty] = useState("");
  const [xlSizeAvailableQty, setXlSizeAvailableQty] = useState("");
  const [productImage, setProductImage] = useState("");
  const [isFormCorrect, setIsFormValid] = useState(false);
  const [previewProductImage, setPreviewProductImage] = useState("");
  /* Response Modal variables */
  const [openResponse, setOpenResponse] = useState(false);
  const onCloseResponseModal = () => setOpenResponse(false);

  const resetValues = () => {
    setCheckXS(checkXS && false);
    setcheckS(checkS && false);
    setcheckM(checkM && false);
    setcheckL(checkL && false);
    setcheckXL(checkXL && false);
    setProductName("");
    setProductType("");
    setProductCategory("");
    setPricePerUnit("");
    setReorderQty("");
    setXsSizeAvailableQty("");
    setSSizeAvailableQty("");
    setMSizeAvailableQty("");
    setLSizeAvailableQty("");
    setXlSizeAvailableQty("");
    setProductImage("");
    setPreviewProductImage("");
  };

  const isFormValid = () => {
    let isValid = true;

    if (productName.length <= 4) {
      isValid = false;
      return false;
    }

    if (!productType) {
      isValid = false;
      return false;
    }

    if (!productCategory) {
      isValid = false;
      return false;
    }

    if (!pricePerUnit) {
      isValid = false;
      return false;
    }

    if (!reorderQty || Number(reorderQty) > 1000 || Number(reorderQty) < 1) {
      isValid = false;
      return false;
    }

    if (!checkXS && !checkS && !checkM && !checkL && !checkXL) {
      isValid = false;
      return false;
    }

    return isValid;
  };

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

    setIsLoading(true);

    axios
      .post(`${API_URL}/inventory/addStock`, formData)
      .then((response) => {
        setIsLoading(false);
        setOpenResponse(true);
        resetValues();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="block mt-10 pb-10 min-h-screen">
        <div className="flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden"
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
                onChange={(e) => {
                  setProductName(e.target.value);
                  setIsFormValid(isFormValid());
                }}
                required
              />
              {!productName || productName.length < 5 ? (
                <p class="text-red-500 text-sm italic text-center">
                  Please fill out this field. Length of the name should be
                  greater than 5
                </p>
              ) : (
                ""
              )}
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
                onChange={(e) => {
                  setProductType(e.target.value);
                  setIsFormValid(isFormValid());
                }}
                required
              >
                <option value="" selected>
                  Select
                </option>
                <option value="tShirts">T-shirts</option>
                <option value="trousers">Trousers</option>
                <option value="sports">Sports</option>
              </select>
              {!productType && (
                <p class="text-red-500 text-sm italic text-center">
                  Please select a product type
                </p>
              )}
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
                onChange={(e) => {
                  setProductCategory(e.target.value);
                  setIsFormValid(isFormValid());
                }}
                required
              >
                <option value="" selected>
                  Select
                </option>
                <option value="men">men</option>
                <option value="women">women</option>
                <option value="kids">kids</option>
              </select>
              {!productCategory && (
                <p class="text-red-500 text-sm italic text-center">
                  Please select a category
                </p>
              )}
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
                onChange={(e) => {
                  setPricePerUnit(e.target.value);
                  setIsFormValid(isFormValid());
                }}
                required
              />
              {!pricePerUnit && (
                <p class="text-red-500 text-sm italic text-center">
                  Please fill out this field.
                </p>
              )}
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
                onChange={(e) => {
                  setReorderQty(e.target.value);
                  setIsFormValid(isFormValid());
                }}
                required
              />
              {!reorderQty || reorderQty > 1000 ? (
                <p class="text-red-500 text-sm italic text-center">
                  Please fill out this field and minimum re=order quantity
                  should not exceed 1000
                </p>
              ) : (
                ""
              )}
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
                    onClick={() => {
                      setCheckXS(!checkXS);
                      setIsFormValid(isFormValid());
                    }}
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
                      onChange={(e) => {
                        setXsSizeAvailableQty(e.target.value);
                        setIsFormValid(isFormValid());
                      }}
                    />
                  </div>
                  {!xsSizeAvailableQty ||
                    (parseFloat(xsSizeAvailableQty) <
                      parseFloat(reorderQty) && (
                      <p class="text-red-500 text-sm italic text-center">
                        Available quantity has to be higher than the re-order
                        quantity
                      </p>
                    ))}
                </div>
              </div>
              {/* S */}
              <div>
                <label class="flex mx-2 items-center text-gray-700 font-semibold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    onClick={() => {
                      setcheckS(!checkS);
                      setIsFormValid(isFormValid());
                    }}
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
                      onChange={(e) => {
                        setSSizeAvailableQty(e.target.value);
                        setIsFormValid(isFormValid());
                      }}
                    />
                  </div>
                  {!sSizeAvailableQty ||
                    (parseFloat(sSizeAvailableQty) < parseFloat(reorderQty) && (
                      <p class="text-red-500 text-sm italic text-center">
                        Available quantity has to be higher than the re-order
                        quantity
                      </p>
                    ))}
                </div>
              </div>
              {/* M */}
              <div>
                <label class="flex mx-2 items-center text-gray-700 font-semibold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    onClick={() => {
                      setcheckM(!checkM);
                      setIsFormValid(isFormValid());
                    }}
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
                      onChange={(e) => {
                        setMSizeAvailableQty(e.target.value);
                        setIsFormValid(isFormValid());
                      }}
                    />
                  </div>
                  {!mSizeAvailableQty ||
                    (parseFloat(mSizeAvailableQty) < parseFloat(reorderQty) && (
                      <p class="text-red-500 text-sm italic text-center">
                        Available quantity has to be higher than the re-order
                        quantity
                      </p>
                    ))}
                </div>
              </div>
              {/* L */}
              <div>
                <label class="flex mx-2 items-center text-gray-700 font-semibold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    onClick={() => {
                      setcheckL(!checkL);
                      setIsFormValid(isFormValid());
                    }}
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
                      onChange={(e) => {
                        setLSizeAvailableQty(e.target.value);
                        setIsFormValid(isFormValid());
                      }}
                    />
                  </div>
                  {!lSizeAvailableQty ||
                    (parseFloat(lSizeAvailableQty) < parseFloat(reorderQty) && (
                      <p class="text-red-500 text-sm italic text-center">
                        Available quantity has to be higher than the re-order
                        quantity
                      </p>
                    ))}
                </div>
              </div>
              {/* XL */}
              <div>
                <label class="flex mx-2 items-center text-gray-700 font-semibold">
                  <input
                    class="mr-2 leading-tight"
                    type="checkbox"
                    onClick={() => {
                      setcheckXL(!checkXL);
                      setIsFormValid(isFormValid());
                    }}
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
                      onChange={(e) => {
                        setXlSizeAvailableQty(e.target.value);
                        setIsFormValid(isFormValid());
                      }}
                    />
                  </div>
                </div>
                {!xlSizeAvailableQty ||
                  (parseFloat(xlSizeAvailableQty) < parseFloat(reorderQty) && (
                    <p class="text-red-500 text-sm italic text-center">
                      Available quantity has to be higher than the re-order
                      quantity
                    </p>
                  ))}
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
                  setIsFormValid(isFormValid());
                }}
              />
              {!productImage && (
                <p class="text-red-500 text-sm italic text-center">
                  Please select an image
                </p>
              )}
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
            {isLoading && (
              <>
                <Scale />
                <p className="text-center">
                  Please wait the information is being processed...
                </p>
              </>
            )}

            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <button
                type="submit"
                onClick={() => isFormValid()}
                className="w-full rounded-md p-2 mb-5 bg-blue-500"
                disabled={!isFormCorrect}
              >
                ADD STOCK
              </button>
              <ResponseModal
                heading={"Add stock"}
                text={`You have successfully added the product`}
                color={"#4287f5"}
                openResponse={openResponse}
                onCloseResponseModal={onCloseResponseModal}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
