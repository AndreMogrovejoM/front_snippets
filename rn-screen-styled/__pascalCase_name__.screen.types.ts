// Interfaces and types from component {{pascalCase name}}
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

import { NavigatorScreens } from "navigation/Navigator.types";

// Component Props
export interface {{pascalCase name}}Props {
  navigation: {{pascalCase name}}Navigation;
  route: {{pascalCase name}}Route;
}

// Screen params
export interface {{pascalCase name}}Params {}

// Screen navigation type
export type {{pascalCase name}}Navigation = StackNavigationProp<NavigatorScreens, "{{pascalCase name}}">;

// Screen route type
export type {{pascalCase name}}Route = RouteProp<NavigatorScreens, "{{pascalCase name}}">;
