import { useState, useEffect } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password} = formState;

    return (
        <>
            <h1>Formulario con Custom Hook</h1>
            <hr />

            <input value={username} onChange={onInputChange} type="text" className="form-control" placeholder="Username" name="username" />
            <input value={email} onChange={onInputChange} type="email" className="form-control mt-2" placeholder="marcelo@gmail.com" name="email" />
            <input value={password} onChange={onInputChange} type="password" className="form-control mt-2" placeholder="Contraseña" name="password" />
        
            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

        </>
    )
}

