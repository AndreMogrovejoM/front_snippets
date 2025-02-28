import React from "react";

import Styles from "./{{pascalCase name}}.styles";
import { {{ pascalCase name }}Props as Props } from "./{{pascalCase name}}.types";

const {{pascalCase name}}: React.FC<Props> = (props) => {
  return (
    <Styles className="{{pascalCase name}}">
      {{pascalCase name}}
    </Styles>
  )
};

{{pascalCase name}}.defaultProps = {};

export default {{pascalCase name}};
