import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";

jest.mock("../../src/hooks/useFetch");

describe('Pruebas en MultipleCustomHooks', () => {

  // Make sure that they are reset to their original state
  // beforeEach(() => {
  //   jest.clearAllMocks();
  // });

  test('Debe de mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
      error: null
    });

    render(<MultipleCustomHooks />);
    // screen.debug();

    expect(screen.getByText('Cargando'));
    expect(screen.getByText('Información de pokemons'));

    const nextButton = screen.getByRole('button', {name: 'Siguiente'});
    expect(nextButton.disabled).toBeFalsy();
  });

  // test("Debe de mostrar un pokemon", () => {
  //   useFetch.mockReturnValue({
  //     data: {
  //       id: 1,
  //       name: "bulbasaur",
  //       sprites: {
  //         img: {
  //           front_shiny: "https://shiny/1.png",
  //           front_default: "https://shiny/1.png",
  //           back_shiny: "https://shiny/1.png",
  //           back_default: "https://shiny/1.png",
  //         },
  //       },
  //     },

  //     isLoading: false,
  //     hasError: null,
  //     error: null,
  //   });

  //   render(<MultipleCustomHooks />);
  //   // screen.debug();

  //   expect(
  //     screen.getByText("Información de pokemons")
  //   ).toBeTruthy();

  //   const nextButton = screen.getByRole("button", {
  //     name: "Siguiente",
  //   });

  //   expect(nextButton.disabled).toBeFalsy();
  // });
  
});
