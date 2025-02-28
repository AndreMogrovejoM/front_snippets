import React from "react";
import { View, Text } from "react-native";

import styles from "./{{pascalCase name}}.styles";
import { {{ pascalCase name }}Props as Props } from "./{{pascalCase name}}.types";

const {{pascalCase name}}: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>{{pascalCase name}}</Text>
    </View>
  )
};

{{pascalCase name}}.defaultProps = {};

export default {{pascalCase name}};