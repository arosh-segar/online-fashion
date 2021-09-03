import React, { useState, useEffect } from "react";

const ShoppingCartItem = (props) => {
  const [isSizesOpen, setSizesOpen] = useState(false);
  const [xs, setXs] = useState(0);
  const [s, setS] = useState(0);
  const [m, setM] = useState(0);
  const [l, setL] = useState(0);
  const [xl, setXl] = useState(0);

  let totAmt = 0.0;

  useEffect(() => {
    if (props.item.sizes.xs.active === true) {
      setXs(xs + 1);
    }

    if (props.item.sizes.s.active === true) {
      setS(s + 1);
    }

    if (props.item.sizes.m.active === true) {
      setM(m + 1);
    }

    if (props.item.sizes.l.active === true) {
      setL(l + 1);
    }

    if (props.item.sizes.xl.active === true) {
      setXl(xl + 1);
    }
  }, []);

  const p = (xs + s + m + l + xl) * props.item.pricePerUnit;
  props.calculateTotal(p, "", props.item._id);

  const incrementTot = (price, calcMethod, action) => {
    let tot = 0;

    if (action === "increase") {
      if (xs === 0 && s === 0 && m === 0 && l === 0 && xl === 0)
        tot = xs + s + m + l + xl + 1;
      else tot = xs + s + m + l + xl + 1;
      totAmt = tot * price;

      calcMethod(totAmt, action, props.item._id);
    }

    if (action === "decrease") {
      tot = xs + s + m + l + xl - 1;
      totAmt = tot * price;
      if (tot < 0) {
        calcMethod(0, props.item._id);
      } else {
        calcMethod(totAmt, action, props.item._id);
      }
    }
  };

  const removeItem = () => {
    props.removeCartItem(props.item._id);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid gap-5 grid-cols-5 sm:grid-cols-5 w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-gray-300 shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
          <div className="pt-4 pb-4 m-auto">
            <div class="relative">
              <img
                class="bg-contain bg-center w-full h-14"
                src={props.item.image}
                alt="NIKE AIR"
              />
            </div>
          </div>
          <div className="pt-4 pb-4 m-auto">{props.item.name}</div>
          <div className="pt-4 pb-4 m-auto">{props.item.pricePerUnit}</div>
          <div className="pt-4 pb-4 mr-2">
            <button
              onClick={() => setSizesOpen(!isSizesOpen)}
              className="text-xs pt-2 pb-2 md:pt-4 md:pb-4 w-full md:w-10/12 rounded-md bg-blue-600"
            >
              <i
                className={`${
                  isSizesOpen ? "fa fa-times" : "fa fa-eye"
                } mr-3 transition duration-150 ease-in-out`}
              ></i>
              {isSizesOpen ? "CLOSE" : "VIEW SIZES"}
            </button>
          </div>
          <div className="pt-4 pb-4 m-auto">
            {(xs + s + m + l + xl) * props.item.pricePerUnit}
          </div>

          {isSizesOpen && (
            <div className="pb-4 m-auto col-span-5 w-full flex flex-1 lg:flex-row">
              <div className="m-auto my-auto flex lg:flex-row justify-center">
                <p className="mr-1 lg:mr-2 text-sm my-auto">XS :</p>
                <button
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                  onClick={() => {
                    if (xs > 0) {
                      setXs(xs - 1);
                      incrementTot(
                        props.item.pricePerUnit,
                        props.calculateTotal,
                        "decrease"
                      );
                    }
                  }}
                >
                  -
                </button>{" "}
                <p className="my-auto bg-gray-200 lg:rounded-md text-black items-center justify-center flex h-8 w-8 lg:ml-2">
                  {xs}
                </p>{" "}
                <button
                  onClick={() => {
                    setXs(xs + 1);
                    incrementTot(
                      props.item.pricePerUnit,
                      props.calculateTotal,
                      "increase"
                    );
                  }}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                >
                  +
                </button>
              </div>
              {props.item.sizes.s.active && (
                <div className="m-auto my-auto flex flex-row justify-center">
                  <p className="mr-1 lg:mr-2 text-sm my-auto">S :</p>
                  <button
                    onClick={() => {
                      if (s > 0) {
                        setS(s - 1);
                        incrementTot(
                          props.item.pricePerUnit,
                          props.calculateTotal,
                          "decrease"
                        );
                      }
                    }}
                    className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                  >
                    -
                  </button>{" "}
                  <p className="my-auto bg-gray-200 lg:rounded-md text-black items-center justify-center flex h-8 w-8 lg:ml-2">
                    {s}
                  </p>{" "}
                  <button
                    onClick={() => {
                      setS(s + 1);
                      incrementTot(
                        props.item.pricePerUnit,
                        props.calculateTotal,
                        "increase"
                      );
                    }}
                    className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                  >
                    +
                  </button>
                </div>
              )}

              <div className="m-auto my-auto flex flex-row justify-center">
                <p className="mr-1 lg:mr-2 text-sm my-auto">M :</p>
                <button
                  onClick={() => {
                    if (m > 0) {
                      setM(m - 1);
                      incrementTot(
                        props.item.pricePerUnit,
                        props.calculateTotal,
                        "decrease"
                      );
                    }
                  }}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                >
                  -
                </button>{" "}
                <p className="my-auto bg-gray-200 lg:rounded-md text-black items-center justify-center flex h-8 w-8 lg:ml-2">
                  {m}
                </p>{" "}
                <button
                  onClick={() => {
                    setM(m + 1);
                    incrementTot(
                      props.item.pricePerUnit,
                      props.calculateTotal,
                      "increase"
                    );
                  }}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                >
                  +
                </button>
              </div>
              <div className="m-auto my-auto flex flex-row justify-center">
                <p className="mr-1 lg:mr-2 text-sm my-auto">L :</p>
                <button
                  onClick={() => {
                    if (l > 0) {
                      setL(l - 1);
                      incrementTot(
                        props.item.pricePerUnit,
                        props.calculateTotal,
                        "decrease"
                      );
                    }
                  }}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                >
                  -
                </button>{" "}
                <p className="my-auto bg-gray-200 lg:rounded-md text-black items-center justify-center flex h-8 w-8 lg:ml-2">
                  {l}
                </p>{" "}
                <button
                  onClick={() => {
                    setL(l + 1);
                    incrementTot(
                      props.item.pricePerUnit,
                      props.calculateTotal,
                      "increase"
                    );
                  }}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                >
                  +
                </button>
              </div>
              <div className="m-auto my-auto flex flex-row justify-center">
                <p className="mr-1 lg:mr-2 text-sm my-auto">XL :</p>
                <button
                  onClick={() => {
                    if (xl > 0) {
                      setXl(xl - 1);
                      incrementTot(
                        props.item.pricePerUnit,
                        props.calculateTotal,
                        "decrease"
                      );
                    }
                  }}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                >
                  -
                </button>{" "}
                <p className="my-auto bg-gray-200 lg:rounded-md text-black items-center justify-center flex h-8 w-8 lg:ml-2">
                  {xl}
                </p>{" "}
                <button
                  onClick={() => {
                    setXl(xl + 1);
                    incrementTot(
                      props.item.pricePerUnit,
                      props.calculateTotal,
                      "increase"
                    );
                  }}
                  className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                >
                  +
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          className="rounded-full h-6 w-5 bg-red-600 text-white font-medium flex justify-center items-center mt-12 ml-2 my-auto"
          onClick={removeItem}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
