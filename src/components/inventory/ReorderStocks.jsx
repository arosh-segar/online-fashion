import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import axios from "axios";
import ReorderStockItem from "./ReorderStockItem";
import Clip from "../loaders/Clip";
import { Link } from "react-router-dom";

const ReorderStocks = () => {
  const [reorderStocks, setReorderStocks] = useState([]);
  const [isStockLoading, setIsStockLoading] = useState(true);
  const [filterRisk, setFilterRisk] = useState("all");

  useEffect(() => {
    axios
      .get(`${API_URL}/inventory`)
      .then((response) => {
        setReorderStocks(
          response.data.filter(
            (stock) =>
              (parseFloat(stock.sizes.xs.xsSizeAvailableQty) <
                parseFloat(stock.reorderQty) &&
                stock.sizes.xs.isAvailable) ||
              (parseFloat(stock.sizes.s.sSizeAvailableQty) <
                parseFloat(stock.reorderQty) &&
                stock.sizes.s.isAvailable) ||
              (parseFloat(stock.sizes.m.mSizeAvailableQty) <
                parseFloat(stock.reorderQty) &&
                stock.sizes.m.isAvailable) ||
              (parseFloat(stock.sizes.l.lSizeAvailableQty) <
                parseFloat(stock.reorderQty) &&
                stock.sizes.l.isAvailable) ||
              (parseFloat(stock.sizes.xl.xlSizeAvailableQty) <
                parseFloat(stock.reorderQty) &&
                stock.sizes.xl.isAvailable)
          )
        );

        setIsStockLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const calculatePercentage = (partialValue, totalValue) => {
    return parseFloat((100 * partialValue) / totalValue);
  };

  const filterByRisk = (reorderStock) => {
    if (
      filterRisk === "l" &&
      (calculatePercentage(
        parseFloat(reorderStock.sizes.xs.xsSizeAvailableQty),
        parseFloat(reorderStock.reorderQty)
      ) > 70 ||
        calculatePercentage(
          parseFloat(reorderStock.sizes.s.sSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) > 70 ||
        calculatePercentage(
          parseFloat(reorderStock.sizes.m.mSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) > 70 ||
        calculatePercentage(
          parseFloat(reorderStock.sizes.l.lSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) > 70 ||
        calculatePercentage(
          parseFloat(reorderStock.sizes.xl.xlSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) > 70)
    ) {
      return (
        <ReorderStockItem
          key={reorderStock._id}
          view="web"
          reorderStock={reorderStock}
          length={reorderStocks.length}
        />
      );
    } else if (
      filterRisk === "h" &&
      (calculatePercentage(
        parseFloat(reorderStock.sizes.xs.xsSizeAvailableQty),
        parseFloat(reorderStock.reorderQty)
      ) < 31 ||
        calculatePercentage(
          parseFloat(reorderStock.sizes.s.sSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) < 31 ||
        calculatePercentage(
          parseFloat(reorderStock.sizes.m.mSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) < 31 ||
        calculatePercentage(
          parseFloat(reorderStock.sizes.l.lSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) < 31 ||
        calculatePercentage(
          parseFloat(reorderStock.sizes.xl.xlSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) < 31)
    ) {
      return (
        <ReorderStockItem
          key={reorderStock._id}
          view="web"
          reorderStock={reorderStock}
          length={reorderStocks.length}
        />
      );
    } else if (
      filterRisk === "m" &&
      ((calculatePercentage(
        parseFloat(reorderStock.sizes.xs.xsSizeAvailableQty),
        parseFloat(reorderStock.reorderQty)
      ) > 30 &&
        calculatePercentage(
          parseFloat(reorderStock.sizes.xs.xsSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) < 71) ||
        (calculatePercentage(
          parseFloat(reorderStock.sizes.s.sSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) > 30 &&
          calculatePercentage(
            parseFloat(reorderStock.sizes.s.sSizeAvailableQty),
            parseFloat(reorderStock.reorderQty)
          ) < 71) ||
        (calculatePercentage(
          parseFloat(reorderStock.sizes.m.mSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) > 30 &&
          calculatePercentage(
            parseFloat(reorderStock.sizes.m.mSizeAvailableQty),
            parseFloat(reorderStock.reorderQty)
          ) < 71) ||
        (calculatePercentage(
          parseFloat(reorderStock.sizes.l.lSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) > 30 &&
          calculatePercentage(
            parseFloat(reorderStock.sizes.l.lSizeAvailableQty),
            parseFloat(reorderStock.reorderQty)
          ) < 71) ||
        (calculatePercentage(
          parseFloat(reorderStock.sizes.xl.xlSizeAvailableQty),
          parseFloat(reorderStock.reorderQty)
        ) > 30 &&
          calculatePercentage(
            parseFloat(reorderStock.sizes.xl.xlSizeAvailableQty),
            parseFloat(reorderStock.reorderQty)
          ) < 71))
    ) {
      return (
        <ReorderStockItem
          key={reorderStock._id}
          view="web"
          reorderStock={reorderStock}
          length={reorderStocks.length}
        />
      );
    } else if (filterRisk === "all") {
      return (
        <ReorderStockItem
          key={reorderStock._id}
          view="web"
          reorderStock={reorderStock}
          length={reorderStocks.length}
        />
      );
    }
  };

  return (
    <div>
      {/* medium and large screens */}
      <div className="hidden sm:block pt-10 h-screen">
        <div>
          <div className="flex justify-center items-center mx-auto">
            <div className="flex justify-center">
              <Link
                target="_blank"
                to={{
                  pathname: "/stock/stockRequestsSummary",
                }}
                className="bg-green-500  text-white px-5 py-3 rounded-lg"
              >
                <i className="fa fa-eye mr-3"></i>View Stock Summary
              </Link>
            </div>
            {/* <div className="flex justify-center sm:w-5/12 lg:w-5/12">
              <label className="mr-5 my-auto">RISK LEVEL : </label>
              <select
                className="p-2 border border-none w-2/4 rounded-lg"
                style={{ textAlignLast: "center" }}
                value={filterRisk}
                onChange={(e) => setFilterRisk(e.target.value)}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="l">Low</option>
                <option value="m">Medium</option>
                <option value="h">High</option>
              </select>
            </div> */}
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-5 sm:grid-cols-5 w-11/12 sm:w-11/12 lg:w-10/12 mt-10 text-center font-semibold text-sm text-black">
              <div className="p-3">PRODUCT CODE</div>
              <div className="p-3">PRODUCT NAME</div>
              <div className="p-3">AVAILABLE QUANTITY</div>
              <div className="p-3">RE-ORDER QUANTITY</div>
              <div className="p-3">ACTIONS</div>
            </div>
          </div>
        </div>
        <div className="overflow-y-auto pb-10" style={{ height: "70vh" }}>
          {isStockLoading && (
            <>
              <Clip />
            </>
          )}
          {reorderStocks.map((reorderStock) => (
            <>{filterByRisk(reorderStock)}</>
          ))}
        </div>
      </div>

      {/* small screens */}
      <div className="block sm:hidden mt-10">
        <div className="">
          <div className="flex justify-center">
            <div className="flex justify-center w-11/12">
              <select
                className="p-2 border border-none w-full rounded-lg"
                name="cars"
                id="cars"
                style={{ textAlignLast: "center" }}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
            </div>
          </div>
          {[...Array(10)].map((element, i) => (
            <div></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReorderStocks;
