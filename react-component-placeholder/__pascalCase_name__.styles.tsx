import styled from "styled-components";

import { {{pascalCase name}}StyledProps as Props } from "./{{pascalCase name}}.types";
import { {{pascalCase name}}PlaceholderStyledProps as PlaceholderProps } from "./{{pascalCase name}}.types";

const {{ pascalCase name }}Styled = styled.div<Props>`
  .{{pascalCase name}} {
  }
`;

export const {{ pascalCase name }}PlaceholderStyled = styled.div<PlaceholderProps>`
  .{{pascalCase name}}Placeholder {
  }
`;

export default {{pascalCase name}}Styled;
