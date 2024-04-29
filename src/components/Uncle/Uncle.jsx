import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <Cousin name={'Rafsan'} asset={asset} ></Cousin>
            <Cousin name={'Sohana'}></Cousin>
        </div>
    );
};

export default Uncle;