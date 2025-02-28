// {{ pascalCase name }} services
import { mock{{ pascalCase name }} } from "./{{ camelCase name }}.service.mock";
import { {{ pascalCase name }} } from "./{{ camelCase name }}.service.types";
import CONSTANTS from "config/constants";

const { MOCK_SERVICES } = CONSTANTS;

export const fetch{{ pascalCase name }} = (): Promise<{{ pascalCase name }}> => {
  try {
    if (!MOCK_SERVICES) {
      return mock{{ pascalCase name }}; // Replace with your API request call
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(mock{{ pascalCase name }});
        }, 1000);
      });
    }
  } catch(e) {
    throw new Error(e.message);
  }
};
