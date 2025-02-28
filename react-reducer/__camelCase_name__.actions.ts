import { AppState, ThunkDispatch } from "redux/store.types";

export const RESET_{{upperSnakeCase name}} = "RESET_{{upperSnakeCase name}}";

export const reset{{pascalCase name}} = () => (dispatch: ThunkDispatch, getState: () => AppState) => {
  return dispatch({ type: RESET_{{upperSnakeCase name}} });
};