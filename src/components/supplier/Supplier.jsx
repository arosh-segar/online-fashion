import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { API_URL } from "../../constants";
import EditSupplier from './EditSupplier'
import DeleteSupplier from './DeleteSupplierModal'


const Supplier = (props) =>{


    const [supplier,setSupplier] = useState(props.supplier)

    const [openDelete,setDelete] = useState(false)
    const onOpenDelete = () => setDelete(true)
    const onCloseDelete = () => setDelete(false)

    const [openEdit,setEdit] = useState(false)
    const onOpenEdit = () => setEdit(true)
    const onCloseEdit = () => setEdit(false)


    const handleChange = (supplier) =>{

        setSupplier(supplier)

    }



    return(

        <div>
            <div className="flex justify-center">
              <div className="grid gap-5 grid-cols-6 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
                  <div className="pt-4 pb-4 m-auto">{supplier.id}</div>
                  <div className="pt-4 pb-4 m-auto">{supplier.name}</div>
                  <div className="pt-4 pb-4 m-auto">{supplier.address}</div>
                  <div className="pt-4 pb-4 m-auto">{supplier.phoneNo}</div>
                  <div className="pt-4 pb-4 m-auto">{supplier.email}</div>
                <div className="pt-2 pb-2 sm:pt-4 sm:pb-4 mr-2">
                  <button className="sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-600"
                  onClick={onOpenEdit}>
                    <i className="fa fa-pencil mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
                    EDIT
                  </button>
                  <button className="sm:text-xs md:text-sm sm:pt-2 sm:pr-2 sm:pl-2 sm:pb-2 w-full rounded-md bg-red-600"
                    onClick={onOpenDelete}>
                    <i className="fa fa-trash mr-1 md:mr-3"></i>DELETE
                  </button>
                </div>
              </div>
            </div>
            <EditSupplier
             openEdit={openEdit}
             onCloseEdit={onCloseEdit}
             supplier={supplier}
             onInputChange={handleChange}
            />
            <DeleteSupplier
             openDelete = {openDelete}
             onCloseDelete = {onCloseDelete}
             id={supplier.id}
             deleteSupplier={props.deleteSupplier}
            />
        </div>

    )










}

export default Supplier;
