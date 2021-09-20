import {useState,useEffect} from 'react'
 
import axios from 'axios'
import { API_URL } from "../../constants";
import {Modal} from 'react-responsive-modal'
 

const AssignVehicle = (props) => {

    const {openAssign,onCloseAssign} = props;
    const [orderId] = useState(props.orders._id.substr(props.orders._id.length - 4));
    const [_id] = useState(props.orders._id);
    const [orderDate ] = useState(props.orders.purchaseDate);
    const [deliveryDate, setDeliveryDate] = useState("");
    const [location] = useState(props.orders.deliveryAddress);
    const [status, setStatus] = useState("");
    const [vehicles,setVehicles] = useState([]);
    const [vehicleNumber,setVehicleNumber] = useState("");
   
    
   

    

     
    useEffect(()=>{

        axios.get(`${API_URL}/delivery/getVehicle`)
        .then((response)=>{
            
            setVehicles(response.data)
             
        })
        .catch((error)=>{
           console.log(error)
        })
        var today = new Date();
        var dd = String(today. getDate()). padStart(2, '0');
        var mm = String(today. getMonth() + 1). padStart(2, '0');  
        var yyyy = today. getFullYear();
        today =  yyyy + '/' + mm + '/' + dd;
        setDeliveryDate(today);
       
        
      },[])
     
    const handleSubmit = (e)=>{

        e.preventDefault()

        const Order = {
            orderId,
            deliveryDate,
            orderDate,
            location,
            vehicleNumber
          }
          setStatus("confirmed")

        axios.post(`${API_URL}/delivery/addDeliveryOrders`,Order)
            .then(response =>{
                 
                onCloseAssign()
                
                  
                const data = {
                    status:"confirmed"       
                 }
                  axios.put(`${API_URL}/delivery/updateStatus/${_id}`,data)
                      .then(response =>{
                          console.log(response.data)
                        })
                      .catch(e=>{
                          console.log(e.data)
                      })

                alert("Successfully Added")
                
            })
            .catch(e=>{
                console.log(e.data)
            })
           
        
      

           
    }


    return (
        <div>
            <Modal open={openAssign} onClose={onCloseAssign}>
            <div className="p-5 w-250 md:w-500">
                <h2 className="text-center font-semibold font-sans">Assign Vehicle</h2>
                    <form
                        onSubmit={handleSubmit}
                        className="mt-5 text-sm text-white bg-white shadow-2xl bg-opacity-25 rounded-xl overflow-hidden"
                    >
                            <div class="w-full px-3 mt-10 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                    for="grid-first-name"  
                                >
                                   Vehicle Number
                                </label>
                                <select
                                    className="p-2 border border-none w-full rounded-lg text-black"
                                    style={{ textAlignLast: "center" }}
                                    value={vehicleNumber}
                                    onChange={(e) => setVehicleNumber(e.target.value)}
                                    required >
                                        <option value="" selected>
                                        Select
                                        </option>
                                        {vehicles.map(vehicle =>
                                          <option value={vehicle.vechileNumber}>{vehicle.vechileNumber}</option>
                                        )}
                                        
                                    </select>
                                
                            </div>
                            
                           
                        <div class="w-full px-3 mt-3 mb-6 md:mb-0">
                            <button className="w-full rounded-md p-2 mb-5 bg-blue-500" type ="submit" >
                            ASSIGN VEHICLE
                            </button>
                             
                        </div>
                    </form>
            </div>
            </Modal>
        </div>



    );
};

export default AssignVehicle;