import React from "react";

import { {{ pascalCase name }}PlaceholderStyled as Styles } from "./{{pascalCase name}}.styles";
import { {{ pascalCase name }}PlaceholderProps as Props } from "./{{pascalCase name}}.types";

const {{pascalCase name}}Placeholder: React.FC<Props> = (props) => {
  return (
    <Styles className="{{pascalCase name}}Placeholder">
      {{pascalCase name}}Placeholder
    </Styles>
  )
};

{{pascalCase name}}Placeholder.defaultProps = {};

export default {{pascalCase name}}Placeholder;