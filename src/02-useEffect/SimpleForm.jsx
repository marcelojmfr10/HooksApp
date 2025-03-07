import { useState, useEffect } from "react"




export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'chelo',
        email: 'marcelo@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() =>{
        console.log('useeffect called');
    }, []); // segundo parámetro es la dependencia, condiciones por las que queremos que se dispare, [] que se ejecute una vez

    // es mejor crear un useEffect por cada efecto que deseemos desencadenar
    useEffect(() =>{
        console.log('form cambio');
    }, [formState]);

    useEffect(() =>{
        console.log('email cambio');
    }, [email]);

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input value={username} onChange={onInputChange} type="text" className="form-control" placeholder="Username" name="username" />
            <input value={email} onChange={onInputChange} type="email" className="form-control mt-2" placeholder="marcelo@gmail.com" name="email" />
        </>
    )
}

