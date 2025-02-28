import React from "react";

import { {{ pascalCase name }}ContainerProps as Props } from "./{{pascalCase name}}.types";
import {{ pascalCase name}} from "./{{ pascalCase name}}";

const {{pascalCase name}}Container: React.FC<Props> = props => {
  return <{{pascalCase name}} />;
};

{{pascalCase name}}Container.defaultProps = {};

export default {{pascalCase name}}Container;