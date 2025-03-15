import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPage } from "../../src/09-context/LoginPage";
import { UserContext } from "../../src/09-context/context/UserContext";


describe('Pruebas en LoginPage', () => {
    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    test('Debe de llamar el setUser cuando se hace click en el botón', () => {

        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith({id: 123, name: 'Marcelo Fuentes', email: 'marcelo@gmail.com'});
    });


});
