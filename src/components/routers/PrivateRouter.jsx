// PrivateRoute.js
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ props }) => {
    let back = Navigate();

    useEffect(() => {
        let session = localStorage.getItem("account")
        if (!session) {
            back("/home")
        } else {

        }
    })

    return (
        <>

            {props.children}
        </>
    )
}


export default PrivateRoute;
