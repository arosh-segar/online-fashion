import React, { useState } from "react";
import DeleteInventoryModal from "../modals/DeleteInventoryModal";
import EditInventoryModal from "../modals/EditInventoryModal";

const StockItem = (props) => {
  const { _id, productName, sizes, productImageUrl, reorderQty } = props.cart;
  const productCode = _id.substring(17, 23).toUpperCase();
  const view = props.view;
  /* Delete Modal variables */
  const [openDelete, setOpen] = useState(false);
  const onOpenDeleteModal = () => setOpen(true);
  const onCloseDeleteModal = () => setOpen(false);
  /* Delete Modal variables */
  const [openEdit, setEdit] = useState(false);
  const onOpenEditModal = () => setEdit(true);
  const onCloseEditModal = () => setEdit(false);

  return (
    <>
      {/* web view */}
      {view === "web" && (
        <div className="flex justify-center font-medium">
          <div className="grid gap-5 grid-cols-5 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
            <div className="pt-4 pb-4 m-auto">{productCode}</div>
            <div className="pt-4 pb-4 m-auto hidden sm:block">
              <img
                className="rounded-lg h-20 w-20"
                src={productImageUrl}
                alt="No pic"
              />
            </div>
            <div className="pt-4 pb-4 m-auto">{productName}</div>
            <div className="pt-4 pb-4 m-auto text-center font-normal">
              {sizes.xs && <p>XS - {sizes.xs.xsSizeAvailableQty}</p>}
              {sizes.s && <p>S - {sizes.s.sSizeAvailableQty}</p>}
              {sizes.m && <p>M - {sizes.m.mSizeAvailableQty}</p>}
              {sizes.l && <p>L - {sizes.l.lSizeAvailableQty}</p>}
              {sizes.xl && <p>XL - {sizes.xl.xlSizeAvailableQty}</p>}
            </div>
            <div className="pt-4 pb-4 m-auto">{reorderQty}</div>
            <div className="flex flex-col justify-center items-center mr-2">
              <button
                onClick={onOpenEditModal}
                className="sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-600"
              >
                <i className="fa fa-pencil mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
                EDIT
              </button>
              <button
                onClick={onOpenDeleteModal}
                className="sm:text-xs md:text-sm sm:pt-2 sm:pr-2 sm:pl-2 sm:pb-2 w-full rounded-md bg-red-600"
              >
                <i className="fa fa-trash mr-1 md:mr-3"></i>
                DELETE
              </button>
              {/* Edit Modal component */}
              <EditInventoryModal
                onCloseEditModal={onCloseEditModal}
                openEdit={openEdit}
                productCode={productCode}
                stock={props.stock}
                id={_id}
              />
              {/* Delete Modal component */}
              <DeleteInventoryModal
                onCloseDeleteModal={onCloseDeleteModal}
                openDelete={openDelete}
                productCode={productCode}
                deleteStock={props.deleteStock}
                id={_id}
              />
            </div>
          </div>
        </div>
      )}

      {/* web view */}
      {view === "mobile" && (
        <div className="flex justify-center">
          <div className="grid gap-5 text-center grid-cols-1 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40">
            <div className="mt-2 pt-1 pb-1 m-auto">
              <div className="">PRODUCT CODE</div>
              <div className="text-xs">
                {_id.substring(17, 23).toUpperCase()}
              </div>
            </div>
            <div className="pt-1 pb-1 m-auto hidden sm:block">
              <img
                className="rounded-lg h-20"
                src="https://images.unsplash.com/photo-1525268499284-86ec700c826d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="No pic"
              />
            </div>
            <div className="pt-1 pb-1 m-auto">
              <div className="">PRODUCT NAME</div>
              <div className="text-xs">{productName}</div>
            </div>
            <div className="pt-1 pb-1 m-auto">
              <div className="">AVAILABLE QUANTITY</div>
              <div className="text-xs">
                {sizes.xs && <p>XS - {sizes.xs.xsSizeAvailableQty}</p>}
                {sizes.s && <p>S - {sizes.s.sSizeAvailableQty}</p>}
                {sizes.m && <p>M - {sizes.m.mSizeAvailableQty}</p>}
                {sizes.lg && <p>L - {sizes.l.lSizeAvailableQty}</p>}
                {sizes.xl && <p>XL - {sizes.xl.xlSizeAvailableQty}</p>}
              </div>
            </div>
            <div className="pt-1 pb-1 m-auto">
              <div className="">RE-ORDER QUANTITY</div>
              <div className="text-xs">{reorderQty}</div>
            </div>
            <div className="flex-row mx-auto justify-center pt-4 pb-4">
              <button
                onClick={onOpenEditModal}
                className="p-2 mb-3 w-full rounded-md bg-blue-600"
              >
                <i className="fa fa-pencil mr-3"></i>EDIT
              </button>
              <button
                onClick={onOpenDeleteModal}
                className="p-2 w-full rounded-md bg-red-600"
              >
                <i className="fa fa-trash mr-3"></i>
                DELETE
              </button>
              {/* Edit Modal component */}
              <EditInventoryModal
                onCloseEditModal={onCloseEditModal}
                openEdit={openEdit}
                productCode={productCode}
                editStock={props.deleteStock}
                stock={props.stock}
                id={_id}
                editStock={props.editStock}
              />
              {/* Delete Modal component */}
              <DeleteInventoryModal
                onCloseDeleteModal={onCloseDeleteModal}
                openDelete={openDelete}
                productCode={productCode}
                deleteStock={props.deleteStock}
                id={_id}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StockItem;
