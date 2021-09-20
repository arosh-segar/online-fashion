import React, { useEffect, useState } from "react";

import axios from "axios";
import { API_URL } from "../../constants";
import { Modal } from "react-responsive-modal";
import Select from "react-select";
import PurchaseOrder from "./PurchaseOrder";
import OrderReport from "./OrderReport";

const AddOrder = (props) => {
  const { openAdd, onCloseAdd } = props;

  const [suppliers, setSuppliers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [supplierIDs, setSupplierIDs] = useState([]);
  const [requestIDs, setRequestIDs] = useState([]);
  const [orderSupplier, setOrderSupplier] = useState(null);
  const [orderRequests, setOrderRequests] = useState([]);

  useEffect(() => {}, [suppliers]);

  useEffect(() => {
    axios
      .get(`${API_URL}/supplier/getStockRequests`)
      .then((response) => {
        setRequests(response.data);

        const options = [];
        response.data.map((request) => {
          if (request.status == "pending") {
            options.push({
              value: request.requestID,
              label: request.requestID,
            });
          }
        });

        setRequestIDs(options);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`${API_URL}/supplier/getSuppliers`)
      .then((response) => {
        setSuppliers(response.data);
        console.log(suppliers);
        const options = response.data.map((supplier) => {
          return {
            value: supplier.id,
            label: supplier.id,
          };
        });
        setSupplierIDs(options);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const items = requests.filter((request) => {
      return orderRequests.includes(request.requestID);
    });

    let Supplier = {};

    suppliers.map((supplier) => {
      if (orderSupplier == supplier.id) {
        Supplier = supplier;
      }
    });

    const Order = {
      id: props.id,
      supplier: Supplier,
      items: items,
    };

    axios
      .post(`${API_URL}/supplier/addOrder`, Order)
      .then((response) => {
        console.log(response.data);
        setRequestIDs(
          requestIDs.filter((id) => !orderRequests.includes(id.value))
        );
        onCloseAdd();
      })
      .catch((e) => {
        console.log(e.data);
      });
  };

  return (
    <div>
      <Modal open={openAdd} onClose={onCloseAdd} center>
        <div className="p-5 w-250 md:w-500">
          <h2 className="text-center font-semibold font-sans">ADD ORDER</h2>
          <form
            onSubmit={handleSubmit}
            className="mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden"
          >
            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                htmlFor="grid-first-name"
              >
                Supplier ID
              </label>
              <Select
                className="basic-multi-select appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                options={supplierIDs}
                onChange={(input) => {
                  setOrderSupplier(input.value);
                }}
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full px-3 mt-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                htmlFor="grid-first-name"
              >
                Request ID
              </label>
              <Select
                className="basic-multi-select appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                options={requestIDs}
                isMulti
                onChange={(input) => {
                  const requests = input.map((option) => {
                    return option.value;
                  });
                  setOrderRequests(requests);
                }}
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full px-3 mt-3 mb-6 md:mb-0">
              <button
                className="w-full rounded-md p-2 mb-5 bg-blue-500"
                type="submit"
                disabled={false}
              >
                ADD ORDER
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddOrder;
