import React, {useState} from 'react'
import axios from 'axios'
import { API_URL } from "../../constants";



const StockRequest = (props) =>{


    const {productID,productName,sizes,status,requestID} = props.stockRequest




    return(

        <div>
            <div className="flex justify-center">
                <div className="grid gap-5 grid-cols-6 sm:grid-cols-6 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
                    <div className="pt-4 pb-4 m-auto">{requestID}</div>
                    <div className="pt-4 pb-4 m-auto">{productName}</div>
                    <div className="pt-4 pb-4 m-auto">
                        {sizes.xs && <p>XS - {sizes.xs}</p>}
                        {sizes.s && <p>S - {sizes.s}</p>}
                        {sizes.m && <p>M - {sizes.m}</p>}
                        {sizes.l && <p>L - {sizes.l}</p>}
                        {sizes.xl && <p>XL - {sizes.xl}</p>}
                    </div>
                    <div className="pt-4 pb-4 m-auto">{status}</div>
                    <div className="pt-4 pb-4 m-auto">20/08/2021</div>
                    <div className="pt-2 pb-2 sm:pt-4 sm:pb-4 mr-2">
                        <button className="sm:text-xs md:text-sm sm:pt-2 sm:pr-4 sm:pl-4 sm:pb-2 mb-2 w-full rounded-md bg-blue-600"
                                onClick={()=>props.onDispatch(requestID)}>
                            <i className="fa fa-check mr-1 md:mr-3 transition duration-150 ease-in-out"></i>
                            DISPATCH
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )





}

export default StockRequest;
