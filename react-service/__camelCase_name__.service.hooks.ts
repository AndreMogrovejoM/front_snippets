import { useQuery } from "react-query";

import { fetch{{ pascalCase name }} } from "./{{ camelCase name}}.service";

export const useFetch{{ pascalCase name}} = () => {
  return useQuery(["{{ camelCase name}}"], () => fetch{{ pascalCase name}}(), {
    enabled: true
  });
};
