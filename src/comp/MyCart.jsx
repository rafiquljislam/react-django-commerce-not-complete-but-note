import React, { useEffect, useState } from 'react'
import { authHeader, host } from '../env'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MyCart = () => {
    const [mycart, setMycart] = useState({})
    const [updateui, setupdateui] = useState(null)
    const addtocart = async (id) => {
        axios.defaults.headers = authHeader;
        await axios.post(`${host}add-to-cart-${id}/`)
            .then((response) => {
                console.log(response.data.data);
                setupdateui(response.data);
            })
    }
    const editcart = async (id) => {
        axios.defaults.headers = authHeader;
        await axios.put(`${host}edit-cart-${id}/`)
            .then((response) => {
                console.log(response.data);
                setupdateui(response.data);
            })
    }
    const removecart = async (id) => {
        axios.defaults.headers = authHeader;
        await axios.post(`${host}edit-cart-${id}/`)
            .then((response) => {
                console.log(response.data);
                setupdateui(response.data.data);
            })
    }
    const delatecart = async (id) => {
        axios.defaults.headers = authHeader;
        await axios.delete(`${host}edit-cart-${id}/`)
            .then((response) => {
                console.log(response.data);
                setupdateui(response.data.data);
            })
    }
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
    }, [updateui])
    // console.log(mycart?.cartproducts[0].product.title);
    // console.log(mycart?.cartproducts[0]);

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-8">
                    <h4>Items in My cart</h4>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Product</th>
                                <th>Rate</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
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
                                        <td>
                                            <Link onClick={() => addtocart(cartprod.product.id)} className="btn btn-outline-info m-1" >+</Link>
                                            <Link onClick={() => editcart(cartprod.id)} className="btn btn-outline-info m-1" >-</Link>
                                            <Link onClick={() => removecart(cartprod.id)} className="btn btn-outline-info m-1" >X</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <th colSpan="4" className="text-right" >Total</th>
                                <th>{mycart?.total}</th>
                                {
                                    mycart != null && (
                                        <th onClick={() => delatecart(mycart?.id)} className='btn btn-sm btn-danger m-2' >Delate Cart</th>
                                    )
                                }
                            </tr>
                            <tr>
                                {
                                    mycart != null && (
                                        <th><Link to='/Chackout' className="btn btn-info">Chackout</Link></th>
                                    )
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyCart
