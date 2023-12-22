import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const ConectionCheck = () => {
    const [status, setStatus] = useState('');

    useEffect(() => {
        const checkStatus = async () => {
            try {
                const response = await axios.get('http://localhost:8080/friends/api/status');
                setStatus(response.data);
            } catch (error) {
                console.error('Error checking status:', error);
                setStatus('please run the java application :)');
            }
        };
        checkStatus();
    }, []); // Empty dependency array ensures that the effect runs once when the component mounts
    return (
        <div className="container mt-5">     
           <h4>java Applicatio Status: <span className="badge bg-danger">{status}</span></h4 >         
        </div>
    );
};
export default ConectionCheck;