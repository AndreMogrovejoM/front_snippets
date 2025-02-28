import { {{pascalCase name}}State as State, {{pascalCase name}}Actions as Actions } from "./{{camelCase name}}.types";
import { RESET_{{upperSnakeCase name}} } from "./{{camelCase name}}.actions";

const initialState: State = {};

const reducer = (state = initialState, action: Actions): State => {
  switch (action.type) {
    case RESET_{{upperSnakeCase name}}:
      return { ...initialState };
    default:
      return state;
  }
};

export default reducer;