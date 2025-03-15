import { render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-context/context/UserContext";
import { HomePage } from "../../src/09-context/HomePage";

const user = {
    id: 1,
    name: 'Marcelo'
}

describe('Pruebas en HomePage', () => {
    test('Debe de mostrar el componente sin el usuario', () => {
        render(
        <UserContext.Provider value={{user: null}}>
            <HomePage />
        </UserContext.Provider>
        )
        // screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('Debe de mostrar el componente con el usuario', () => {
        render(
        <UserContext.Provider value={{user: user}}>
            <HomePage />
        </UserContext.Provider>
        )
        // screen.debug();

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(`${user.id}`);
    });

});
