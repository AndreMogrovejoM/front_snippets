import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { {{ pascalCase name }}NavigatorProps as Props } from "./{{pascalCase name}}Navigator.types";
import { {{ pascalCase name }}NavigatorScreens as NavigatorScreens } from "./{{pascalCase name}}Navigator.types";

const Stack = createStackNavigator<NavigatorScreens>();

const {{pascalCase name}}Navigator: React.FC<Props> = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={} />
    </Stack.Navigator>
  );
};

{{pascalCase name}}Navigator.defaultProps = {};

export default {{pascalCase name}}Navigator;