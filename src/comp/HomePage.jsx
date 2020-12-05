import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { authHeader, host } from '../env'

const HomePage = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const getData = async () => {
            axios.defaults.headers = authHeader;
            axios.get(`${host}product/`)
                .then((response) => {
                    setProduct(response.data)
                    console.log(response.data);
                }).catch((_) => {
                    console.log("Product not Comming");
                })
        }
        window.localStorage.setItem('token', 'f235c7bd433062fde8f26470d1778866709fca17');
        getData();
    }, [])
    const addtocart = async (id) => {
        axios.defaults.headers = authHeader;
        await axios.post(`${host}add-to-cart-${id}/`)
            .then((response) => {
                console.log(response.data);
            })
    }
    return (
        <div className="container">
            <div className="row mt-3">
                {
                    product?.map((item, i) => (
                        <div className='col-md-4 mb-3' key={i}>
                            <h2>{item.title}</h2>
                            <Link to={`product-detail/${item.slug}/${item.id}`}>
                                <img className="w-100 h-50" src={item.image_url} alt="" />
                            </Link>
                            <p>Price: <strike>{item.marked_price}</strike> TK.{item.selling_price}</p>
                            <Link onClick={() => addtocart(item.id)} className="btn btn-info">Add To Cart</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage
