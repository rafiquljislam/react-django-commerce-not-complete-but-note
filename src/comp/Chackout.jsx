import React, { useEffect, useState } from 'react'
import { authHeader, host } from '../env'
import axios from 'axios'
import { Link } from 'react-router-dom'
import OrderNowFrom from './OrderNowFrom'

const Chackout = () => {
    const [mycart, setMycart] = useState({})
    useEffect(() => {
        const getData = async () => {
            axios.defaults.headers = authHeader;
            await axios.get(`${host}CartViewset/`)
                .then((response) => {
                    setMycart(response.data[0])
                    console.log(response.data[0]);
                })
        }
        getData();
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>All Products</h2>
                    <h4><Link to="/MyCart">Update Cart</Link></h4>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Product</th>
                                <th>Rate</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mycart?.cartproducts?.map((cartprod, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{cartprod.product.title}</td>
                                        <td>{cartprod.rate}</td>
                                        <td>{cartprod.quantity}</td>
                                        <td>{cartprod.subtotal}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <th colSpan="4" className="text-right" >Total: </th>
                                <th>{mycart?.total}</th>
                            </ tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h2>Order Now</h2>
                    <OrderNowFrom cartid={mycart?.id} />
                </div>
            </div>
        </div>
    )
}

export default Chackout
