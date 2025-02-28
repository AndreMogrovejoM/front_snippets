import React, { createContext, useMemo } from "react";
import { ContextDevTool } from "react-context-devtool";

import { {{ pascalCase name }}ProviderProps as Props } from "./{{camelCase name}}.context.types";
import { {{ pascalCase name }}ProviderValue } from "./{{camelCase name}}.context.types";

// @ts-ignore
export const {{pascalCase name}}Context = createContext<{{pascalCase name}}ProviderValue>();

const {{pascalCase name}}Provider: React.FC<Props> = (props) => {
  const value: {{pascalCase name}}ProviderValue = useMemo(() => {
    return {};
  }, []);

  return (
    <{{pascalCase name}}Context.Provider value={value}>
      <ContextDevTool context={ {{pascalCase name}}Context } id="{{camelCase name}}" displayName="{{pascalCase name}}" />
      {props.children}
    </{{pascalCase name}}Context.Provider>
  )
};

export default {{pascalCase name}}Provider;