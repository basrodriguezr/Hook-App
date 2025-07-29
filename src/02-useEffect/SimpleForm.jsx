import { useState } from "react";

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

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <form>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">{username}</label>
                    <input onChange={onInputChange} type="username" name="username" placeholder="Username" className="form-control" id="username" value={username}/>
                </div>      
                <div className="mb-3">
                    <label htmlFor="email"  className="form-label">Email address</label>
                    <input onChange={onInputChange} type="email"  placeholder='username@email.ext' className="form-control" id="email" name="email" aria-describedby="emailHelp" value={email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>      
            
                <button type="submit" className="btn btn-primary">Submit</button>   
            </form>
        </>
    )
}
