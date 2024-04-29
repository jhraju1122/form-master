import React from 'react';
import SpecialPerson from '../SpecialPerson/SpecialPerson';

const Myself = ({asset}) => {
    return (
        <div>
            <h2>Myself</h2>
            <SpecialPerson asset={asset}></SpecialPerson>
        </div>
    );
};

export default Myself;