import { HttpClient } from "./HttpClient"

const getAllProductsData = () => {
    const apiData = {
        url: "/products",
        method: "GET",
    }
    return HttpClient.custom(apiData)
}

const getSingleProduct = (productId) => {
    const apiData = {
        url: `/products/${productId}`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}

const getAllUsersData = () => {
    const apiData = {
        url: "/users",
        method: "GET",
    }
    return HttpClient.custom(apiData)
}

const getSingleUser = (userId) => {
    const apiData = {
        url: `/users/${userId}`,
        method: "GET",
    }
    return HttpClient.custom(apiData)
}


export {
    getAllProductsData,
    getSingleProduct,
    getAllUsersData,
    getSingleUser
}