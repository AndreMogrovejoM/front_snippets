import React from "react";
import {GetServerSideProps, GetStaticProps} from "next";

import {{ pascalCase name }} from "components/{{camelCase name}}/{{pascalCase name}}/{{pascalCase name}}";


interface Props {}

const {{ pascalCase name }}Page = (props: Props) => {
  return <{{ pascalCase name }}/>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {}, // will be passed to the page component as props
  }
}


export default {{pascalCase name}}Page;