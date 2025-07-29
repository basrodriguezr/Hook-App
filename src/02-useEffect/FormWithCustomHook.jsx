import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    
    const { formState, onInputChange, username, password, email } = useForm({
        username: '',
        password: '',
        email: '' 
    });

    //const { username, password, email } = formState;

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />
            
                <div className="mb-3">
                    <label 
                        htmlFor="username" 
                        className="form-label">
                            Username
                    </label>
                    <input 
                        onChange={onInputChange} 
                        type="username" 
                        name="username" 
                        placeholder="Username" 
                        className="form-control" 
                        id="username" 
                        value={username}
                    />
                </div>      
                <div className="mb-3">
                    <label 
                        htmlFor="password"  
                        className="form-label">
                            Password
                    </label>
                    <input 
                        onChange={onInputChange} 
                        type="password"  
                        placeholder='Contraseña' 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        aria-describedby="passwordHelp" value={password}/>
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="email"  
                        className="form-label">
                            Email address
                    </label>
                    <input 
                        onChange={onInputChange} 
                        type="email"  
                        placeholder='username@email.ext' 
                        className="form-control" 
                        id="email" name="email" 
                        aria-describedby="emailHelp" 
                        value={email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>            
        </>
    )
}
