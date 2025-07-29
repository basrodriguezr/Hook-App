import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Bastian',
        email: 'basrodriguezr@gmail.com'
    });

    const { username, email } = formState;
    
    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    useEffect(()=> {
        // This effect runs on every render
        // console.log('useEffect called');
    }, []);
    // Esto solo se ejecuta una vez al montar el componente, esto porque se inicializa el array de dependencias vacío
    //se recomienda usar un efecto por cada funcionalidad que se necesite

    useEffect(()=> {
        // This effect runs on every render
        // console.log('username changed');
    }, [username]);

    useEffect(()=> {
        // This effect runs on every render
        // console.log('email changed');
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input onChange={onInputChange} type="username" name="username" placeholder="Username" className="form-control" id="username" value={username}/>
                </div>      
                <div className="mb-3">
                    <label htmlFor="email"  className="form-label">Email address</label>
                    <input onChange={onInputChange} type="email"  placeholder='username@email.ext' className="form-control" id="email" name="email" aria-describedby="emailHelp" value={email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>      
            
               {
                (username === 'Bastian') && <Message />
               }           
        </>
    )
}
