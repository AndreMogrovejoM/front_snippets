// Reducer types and interfaces
import { RESET_{{upperSnakeCase name}} } from "./{{camelCase name}}.actions";

// Reducer State interface
export interface {{pascalCase name}}State {}

export interface Reset{{pascalCase name}}Action {
  type: typeof RESET_{{upperSnakeCase name}};
}

// Reducer's Actions interfaces
export type {{pascalCase name}}Actions = Reset{{pascalCase name}}Action;