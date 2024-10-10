import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"

function ProductList() {

    const [Products, setProduct] = useState([])

    const handleGetProducts = () => {
        axios.get("https://fakestoreapi.com/products").then( (adam) =>
        {
            setProduct(adam.data)
        }).catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {
        handleGetProducts()
    })

    return <div className="grid grid-cols-4  bg-black ">
        
        {
            Products.map( (user) => {
                return <Product items={user} />
            })
        }

    </div>
}

export default ProductList