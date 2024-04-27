import React from 'react';

const ReusableForm = ({formTitle, submitBtnText='Submit'}) => {

 const handleSubmit = e =>{
    e.preventDefault();
 }



    return (
        <div>
            <h2>{formTitle}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' /> <br />
                <input type="email" name='email' /> <br />
                <input type="password" name='password' /> <br />
              <button>{submitBtnText}</button>
            </form>
        </div>
    );
};

export default ReusableForm;