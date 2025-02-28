import { useContext } from "react";

import { {{pascalCase name}}Context } from "./{{camelCase name}}.context";
import { {{pascalCase name}}ProviderValue } from "./{{camelCase name}}.context.types";

const use{{pascalCase name}} = () => {
  const context = useContext<{{pascalCase name}}ProviderValue>({{pascalCase name}}Context);
  if (typeof context === "undefined") {
    throw new Error("use{{pascalCase name}} must be used within a {{pascalCase name}}Provider");
  }
  return context
};

export default use{{pascalCase name}};
