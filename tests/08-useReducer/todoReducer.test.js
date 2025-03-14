
import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1, 
        description: 'Demo Todo',
        done: false
    }]

  test('Debe de regresar el estado inicial', () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test('Debe de agregar un todo', () => {
    const action = {
        type: '[TODO] Add Todo',
        payload: {
            id: 2,
            description: 'Nuevo Todo',
            done: false
        }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test('Debe de eliminar un todo', () => {
    
  });

  test('Debe de realizar el toggle del todo', () => {
    
  });
  
  
  
});

