import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { authHeader, host } from '../env';

const ProductDetail = () => {
    const { id } = useParams()
    console.log(id);
    const [product, setProduct] = useState({});
    useEffect(() => {
        const getData = async () => {
            axios.defaults.headers = authHeader;
            axios.get(`${host}product/${id}/`)
                .then((response) => {
                    setProduct(response.data)
                    console.log(response.data);
                }).catch((_) => {
                    console.log("Product not Comming");
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
        <div class="container">
            <h3>Product: {product.title}</h3><hr />
            <div class="row">
                <div class="col-md-4">
                    <img src={product.image_url} alt="" class="img-fluid" />
                    <div class="row">
                        <div class="col-md-4 p-3">
                            <Link to={product.image_url} target="_blank">
                                <img src={product.image_url} class="img-fluid imagestyle_one" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <h4>{product.title} (Viewed {product.view_count} times)</h4>
                    <h5>Category: {product.category}</h5>
                    <h5>Price: <strike>Rs. {product.marked_price}</strike> Rs. {product.selling_price}</h5>
                    <Link onClick={() => addtocart(product.id)} class="btn btn-info">Add To Cart</Link>
                    <hr />
                    <p class="text-info">Warranty: {product.warranty}</p>
                    <p class="text-info">Return Policy:{product.return_policy}</p>
                    <hr />
                    <p>{product.description}</p>
                </div>
            </div>
        </div>

    )
}

export default ProductDetail
