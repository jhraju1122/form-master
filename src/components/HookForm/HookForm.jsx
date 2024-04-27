import React, { useState } from 'react';
import useInputState from '../../Hooks/useInputState';

const HookForm = () => {
   const [name, handleNameChange] = useInputState('Rojoni Hooked')


    const handleSubmit = e =>{
        console.log('form data', name)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                value={name} onChange={handleNameChange}
                type="text" name='name' /> <br />
                <input type="email" name='email' /> <br />
                <input type="password" name='password' /> <br />
                <button>submit</button>
            </form>
        </div>
    );
};

export default HookForm;