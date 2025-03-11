import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // console.log('message mounted');

        const onMouseMove = ({ x, y }) => {
            // console.log(coords);
            setCoords({ x, y });
        }
        window.addEventListener('mousemove', onMouseMove);


        return () => {
            // console.log('message unmounted');
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)};
        </>
    )
}

