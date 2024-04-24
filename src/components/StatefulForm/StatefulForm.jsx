import React, { useState } from 'react';

const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e =>{
e.preventDefault();
if(password.length < 6){
    setError('password must be at least 6 characters or longer')
} 
else{
    setError('');
    console.log(name, email, password);
}

    

    }

    const handleEmailChange = e =>{
console.log(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value);
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input
                
                onChange={handleNameChange}

                type="text" name='name' /> <br />
                <input
                
                onChange={handleEmailChange}
                
                type="email" name='email' /> <br />
                <input
                
                onChange={handlePasswordChange}
                type="password" name='password' required /> <br />
                <button>submit</button>
                {
                    Error && <p>{Error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;