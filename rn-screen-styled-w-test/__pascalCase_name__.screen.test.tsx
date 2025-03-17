import React from "react";

import { render } from "setupTests";
import { buildStackNavigation } from "utils/testUtils/builders/navigation.builder";
import { buildRoute } from "utils/testUtils/builders/navigation.builder";
import {{pascalCase name}} from "./{{pascalCase name}}.screen";
import { {{pascalCase name}}Route } from "./{{pascalCase name}}.screen.types";

describe("{{pascalCase name}} screen", () => {
  it("renders without crashing", () => {
    render(
      <{{pascalCase name}} 
        navigation={buildStackNavigation()}
        route={buildRoute<{{pascalCase name}}Route>({ name: "{{pascalCase name}}" })}
      />
    );
  });
});