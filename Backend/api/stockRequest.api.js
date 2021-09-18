const {
    saveStockRequest,
    getAllStockRequests,
    editRequestStatus
} = require("../dal/stockRequest.dao");

const createStockRequest = async ({
                                      productID,
                                      productName,
                                      sizes,
                                      status,
                                  }) => {
    const stockRequest = { productID, productName, sizes, status };
    return await saveStockRequest(stockRequest);
};

//retrieving the details of all stocks from the dal
const getStockRequests = async () => {
    return await getAllStockRequests();
};

const updateStockRequest = async (id,status)=>{

    return await editRequestStatus(id,status)

}

module.exports = { createStockRequest, getStockRequests ,updateStockRequest};
