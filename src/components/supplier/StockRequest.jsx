import React, {useState} from 'react'
import axios from 'axios'
import { API_URL } from "../../constants";



const StockRequest = (props) =>{

    const [openEdit,setEdit] = useState(false)
    const onOpenEdit = () => setEdit(true)
    const onCloseEdit = () => setEdit(false)



    return(

        <div>
            <div className="flex justify-center">
                <div className="grid gap-5 grid-cols-6 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
                    <div className="pt-4 pb-4 m-auto">101</div>
                    <div className="pt-4 pb-4 m-auto">111</div>
                    <div className="pt-4 pb-4 m-auto">M</div>
                    <div className="pt-4 pb-4 m-auto">12</div>
                    <div className="pt-4 pb-4 m-auto">20/08/2021</div>
                    <div className="pt-2 pb-2 sm:pt-4 sm:pb-4 mr-2">
                        <button className="sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-600"
                                onClick={onOpenEdit}>
                            <i className="fa fa-pencil mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
                            APPROVE
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )





}

export default StockRequest;