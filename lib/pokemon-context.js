import * as React from 'react';

const PokemonContext = React.createContext();
const pokemonActions = {
  'SET_TOTAL_POKEMON_ACTION': 'SET_TOTAL_POKEMON',
  'SET_CURRENT_POKEMON_ACTION': 'SET_CURRENT_POKEMON',
}
function pokemonReducer(state, action) {
  switch (action.type) {
    case [pokemonActions.SET_TOTAL_POKEMON_ACTION]: {
      return { ...state, total: action.payload };
    }
    case [pokemonActions.SET_CURRENT_POKEMON_ACTION]: {
      return { ...state, current: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const initialState = {
  total: 0,
  current: 0,

}

function CountProvider({ children }) {
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    // <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
}

function useCount() {
  const context = React.useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { CountProvider, useCount };
