import React, { useState, useEffect } from "react";

const ShoppingCartItem = (props) => {
  const [isSizesOpen, setSizesOpen] = useState(false);
  const [xs, setXs] = useState(0);
  const [s, setS] = useState(0);
  const [m, setM] = useState(0);
  const [l, setL] = useState(0);
  const [xl, setXl] = useState(0);

  // ----------------- SPRINT 2 CHANGE AVAILABLE QTY -----------------------------------------

  // const [xs, setXs] = useState({
  //   qty: 0,
  //   xsSizeAvailableQty: props.xsSizeAvailableQty,
  // });
  // setXs((prevState) => ({ ...prevState, xsSizeAvailableQty: "any int value" }));

  // -----------------------------------------------------------------------------------------

  const [item, setItem] = useState(props.item);
  const [qty, setQty] = useState(props.qty);

  useEffect(() => {
    props.handleCartTotal();
    setItem(props.item);
    console.log(item);
    console.log("helLo: ", item.sizes.xs.xsSizeAvailableQty);

    for (let x of qty) {
      if (x._id === item._id) {
        setXs(x.size.xs);
        setS(x.size.s);
        setM(x.size.m);
        setL(x.size.l);
        setXl(x.size.xl);
      }
    }

    // previous method
    // if (item.sizes.xs.active === true) {
    //   setXs(xs + 1);
    // }
    // if (item.sizes.s.active === true) {
    //   setS(s + 1);
    // }
    // if (item.sizes.m.active === true) {
    //   setM(m + 1);
    // }
    // if (item.sizes.l.active === true) {
    //   setL(l + 1);
    // }
    // if (item.sizes.xl.active === true) {
    //   setXl(xl + 1);
    // }
  }, []);

  // previous method
  // const p = (xs + s + m + l + xl) * props.item.pricePerUnit;
  // props.calculateTotal(p, "", props.item._id);

  const remove = () => {
    props.removeItem(item);
    props.handleDelete(item);
    props.handleCartTotal();
  };

  const incrementTot = async (value, price, action, size) => {
    let obj = {
      xs: xs,
      s: s,
      m: m,
      l: l,
      xl: xl,
    };

    if (action === "increase") {
      if (size === "xs") {
        obj = {
          xs: value + 1,
          s: s,
          m: m,
          l: l,
          xl: xl,
        };
      } else if (size === "s") {
        obj = {
          xs: xs,
          s: value + 1,
          m: m,
          l: l,
          xl: xl,
        };
      } else if (size === "m") {
        obj = {
          xs: xs,
          s: s,
          m: value + 1,
          l: l,
          xl: xl,
        };
      } else if (size === "l") {
        obj = {
          xs: xs,
          s: s,
          m: m,
          l: value + 1,
          xl: xl,
        };
      } else if (size === "xl") {
        obj = {
          xs: xs,
          s: s,
          m: m,
          l: l,
          xl: value + 1,
        };
      } else console.log("Invalid size");

      props.updateQuantity(item._id, price, obj);
      props.handleCartTotal();
    }

    if (action === "decrease") {
      if (size === "xs") {
        obj = {
          xs: value - 1,
          s: s,
          m: m,
          l: l,
          xl: xl,
        };
      } else if (size === "s") {
        obj = {
          xs: xs,
          s: value - 1,
          m: m,
          l: l,
          xl: xl,
        };
      } else if (size === "m") {
        obj = {
          xs: xs,
          s: s,
          m: value - 1,
          l: l,
          xl: xl,
        };
      } else if (size === "l") {
        obj = {
          xs: xs,
          s: s,
          m: m,
          l: value - 1,
          xl: xl,
        };
      } else if (size === "xl") {
        obj = {
          xs: xs,
          s: s,
          m: m,
          l: l,
          xl: value - 1,
        };
      } else console.log("Invalid size");

      props.updateQuantity(item._id, price, obj);
      props.handleCartTotal();
    }
  };

  return (
    <div>
      {item.productName && (
        <div className="flex justify-center">
          <div className="grid gap-5 grid-cols-5 sm:grid-cols-5 w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-gray-300 shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <div className="pt-4 pb-4 m-auto">
              <div class="relative">
                <img
                  class="bg-contain bg-center w-full h-14"
                  src={item.productImageUrl}
                  alt="NIKE AIR"
                />
              </div>
            </div>
            <div className="pt-4 pb-4 m-auto">{item.productName}</div>
            <div className="pt-4 pb-4 m-auto">{item.pricePerUnit}</div>
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
              {(xs + s + m + l + xl) * item.pricePerUnit}
            </div>

            {isSizesOpen && item.sizes.xs.xsSizeAvailableQty && (
              <div className="pb-4 m-auto col-span-5 w-full flex flex-1 lg:flex-row">
                <div className="m-auto my-auto flex lg:flex-row justify-center">
                  <p className="mr-1 lg:mr-2 text-sm my-auto">XS :</p>
                  <button
                    className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md"
                    onClick={() => {
                      if (xs > 0) {
                        setXs(xs - 1);
                        incrementTot(xs, item.pricePerUnit, "decrease", "xs");
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
                      incrementTot(xs, item.pricePerUnit, "increase", "xs");
                    }}
                    className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                  >
                    +
                  </button>
                </div>
                {isSizesOpen && item.sizes.s.sSizeAvailableQty && (
                  <div className="m-auto my-auto flex flex-row justify-center">
                    <p className="mr-1 lg:mr-2 text-sm my-auto">S :</p>
                    <button
                      onClick={() => {
                        if (s > 0) {
                          setS(s - 1);
                          incrementTot(s, item.pricePerUnit, "decrease", "s");
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
                        setS(1 + s);
                        incrementTot(s, item.pricePerUnit, "increase", "s");
                      }}
                      className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                    >
                      +
                    </button>
                  </div>
                )}
                {isSizesOpen && item.sizes.m.mSizeAvailableQty && (
                  <div className="m-auto my-auto flex flex-row justify-center">
                    <p className="mr-1 lg:mr-2 text-sm my-auto">M :</p>
                    <button
                      onClick={() => {
                        if (m > 0) {
                          setM(m - 1);
                          incrementTot(m, item.pricePerUnit, "decrease", "m");
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
                        setM(1 + m);
                        incrementTot(m, item.pricePerUnit, "increase", "m");
                      }}
                      className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                    >
                      +
                    </button>
                  </div>
                )}

                {isSizesOpen && item.sizes.l.lSizeAvailableQty && (
                  <div className="m-auto my-auto flex flex-row justify-center">
                    <p className="mr-1 lg:mr-2 text-sm my-auto">L :</p>
                    <button
                      onClick={() => {
                        if (l > 0) {
                          setL(l - 1);
                          incrementTot(l, item.pricePerUnit, "decrease", "l");
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
                        setL(1 + l);
                        incrementTot(l, item.pricePerUnit, "increase", "l");
                      }}
                      className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                    >
                      +
                    </button>
                  </div>
                )}

                {isSizesOpen && item.sizes.xl.xlSizeAvailableQty && (
                  <div className="m-auto my-auto flex flex-row justify-center">
                    <p className="mr-1 lg:mr-2 text-sm my-auto">XL :</p>
                    <button
                      onClick={() => {
                        if (xl > 0) {
                          setXl(xl - 1);
                          incrementTot(xl, item.pricePerUnit, "decrease", "xl");
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
                        setXl(1 + xl);
                        incrementTot(xl, item.pricePerUnit, "increase", "xl");
                      }}
                      className="bg-blue-500 text-xl font-bold h-8 w-8 rounded-md lg:ml-2"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            className="rounded-full h-6 w-5 bg-red-600 text-white font-medium flex justify-center items-center mt-12 ml-2 my-auto"
            onClick={remove}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartItem;
