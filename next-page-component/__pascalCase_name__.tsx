import React from "react";
import Head from "next/head";

import Styles from "./{{pascalCase name}}.styles";
import { {{ pascalCase name }}Props as Props } from "./{{pascalCase name}}.types";

const {{pascalCase name}}: React.FC<Props> = (props) => {
  return (
    <Styles className="{{pascalCase name}}">
      <Head>
        <title>{{ name }}</title>
      </Head>
      <header className="{{pascalCase name}}__header"/>
      <main className="{{pascalCase name}}__main">
        <h1>{{pascalCase name}}</h1>
      </main>
      <footer className="{{pascalCase name}}__footer"/>
    </Styles>
  )
};

{{pascalCase name}}.defaultProps = {};

export default {{pascalCase name}};