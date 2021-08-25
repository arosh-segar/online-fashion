import React, {useState} from 'react'
 
import ViewVehicle from './ViewVehicle'
import DeleteVehicle from './DeleteVehicle'


const Vehicle = (props) =>{

    const [vehicle] = useState(props.vehicle)
    const [openEdit,setEdit] = useState(false)
    const onOpenEdit = () => setEdit(true)
    const onCloseEdit = () => setEdit(false)

    const [openDelete,setDelete] = useState(false)
    const onOpenDelete = () => setDelete(true)
    const onCloseDelete = () => setDelete(false)
    const onDeleteVehicle = ()=>{
        props.deleteVehicles(vehicle.vechileNumber)
        onCloseDelete()
    }

    

    return(

        <div>
            <div className="flex justify-center">
              <div className="grid gap-3 grid-cols-4 sm:grid-cols-4 w-11/12 sm:w-11/12 lg:w-10/12 mt-5 text-center text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-40 cursor-pointer">
                  <div className="pt-4 pb-4 m-auto">{vehicle.vechileNumber}</div>
                  <div className="pt-4 pb-4 m-auto">{vehicle.vechileBrand}</div>
                  <div className="pt-4 pb-4 m-auto">{vehicle.driverName}</div>
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
            <ViewVehicle
             openEdit={openEdit}
             onCloseEdit={onCloseEdit}
             vehicle={vehicle}
            />
            <DeleteVehicle
             openDelete = {openDelete}
             onCloseDelete = {onCloseDelete}
             vechileNumber={vehicle.vechileNumber}
             onDeleteVehicle={onDeleteVehicle}
            />
        </div>    

    )
   









}

export default Vehicle;