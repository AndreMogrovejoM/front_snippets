import React from "react";
import { Text, View } from "react-native";

import styles from "./{{pascalCase name}}.screen.styles";
import { {{ pascalCase name }}Props as Props } from "./{{pascalCase name}}.screen.types";
import ScreenTemplate from "screens/ScreenTemplate/ScreenTemplate.screen";

const {{pascalCase name}}: React.FC<Props> = props => {

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text>{{pascalCase name}}</Text>
      </View>
    </ScreenTemplate>
  );
};

export default {{pascalCase name}};