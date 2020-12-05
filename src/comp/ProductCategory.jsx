import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { authHeader, host, mainUrl } from '../env'
import { Link } from 'react-router-dom'


const ProductCategory = () => {
    const [catagory, setCatagory] = useState([])
    useEffect(() => {
        const getData = async () => {
            axios.defaults.headers = authHeader;
            axios.get(`${host}category/`)
                .then((response) => {
                    setCatagory(response.data)
                    console.log(response.data);
                }).catch((_) => {
                    console.log("Catagory not Comming");
                })
        }
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
        <div className='container'>
            {
                catagory.map((cata, i) => (
                    <>
                        <h3>{cata.title}</h3>
                        <p>{cata.slug}</p>
                        <div key={i} className="row">
                            {
                                cata.products.map((cataprod, i) => (
                                    <div key={i} className="col-md-4">
                                        <Link to={`product-detail/${cataprod.slug}/${cataprod.id}`}>
                                            <img src={`${mainUrl}${cataprod.image}`} className="w-100 h-50" alt="" />
                                        </Link>
                                        <h5>{cataprod.title}</h5>
                                        <Link onClick={() => addtocart(cataprod.id)} className="btn btn-outline-info">Add to Cart</Link>

                                    </div>
                                ))
                            }
                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default ProductCategory
