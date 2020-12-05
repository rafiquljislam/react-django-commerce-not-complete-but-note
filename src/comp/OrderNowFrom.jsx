import Axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { host } from '../env'

const OrderNowFrom = ({ cartid }) => {
    const [orderby, setOrderby] = useState("")
    const [shippingAddress, setShippingAddress] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")

    // console.log(email);
    const sendOrderData = async () => {
        const json = {
            ordered_by: orderby,
            shipping_address: shippingAddress,
            mobile: mobile,
            email: email,
            cartId: cartid
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `token ${window.localStorage.getItem("token")}`,
        }
        const url = `${host}OrderViewset/`;
        Axios.post(url, json, headers)
            .then((res) => console.log(res))
    }
    return (
        <div>
            <form>
                <div class="form-group">
                    <input onChange={e => setOrderby(e.target.value)} class="form-control my-1" type="text" placeholder="Orded By"></input>
                    <input onChange={e => setShippingAddress(e.target.value)} class="form-control my-1" type="text" placeholder="setShippingAddress"></input>
                    <input onChange={e => setMobile(e.target.value)} class="form-control my-1" type="text" placeholder="setMobile"></input>
                    <input onChange={e => setEmail(e.target.value)} class="form-control my-1" type="email" placeholder="setEmail"></input>
                    <Link onClick={sendOrderData} className="btn btn-info">Order</Link>
                </div>
            </form>
        </div>
    )
}

export default OrderNowFrom
