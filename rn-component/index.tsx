import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";
import { {{ pascalCase name }}Props as Props } from "./types";

const {{pascalCase name}}: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text>{{pascalCase name}}</Text>
    </View>
  )
};

export default {{pascalCase name}};