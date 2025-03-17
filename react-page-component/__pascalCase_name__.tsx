import React from "react";

import Styles from "./{{pascalCase name}}.styles";
import { {{ pascalCase name }}Props as Props } from "./{{pascalCase name}}.types";

const {{pascalCase name}}: React.FC<Props> = (props) => {
  return (
    <Styles className="{{pascalCase name}}">
      <header className="{{pascalCase name}}__header"/>
      <main className="{{pascalCase name}}__main">
        {{pascalCase name}}
      </main>
      <footer className="{{pascalCase name}}__footer"/>
    </Styles>
  )
};

export default {{pascalCase name}};