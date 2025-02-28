import styled from "styled-components";

import { {{pascalCase name}}StyledProps as Props } from "./{{pascalCase name}}.types";

const {{ pascalCase name }}Styled = styled.div<Props>`
  min-width: var(--sizes-page-minWidth);
  max-width: var(--sizes-page-maxWidth);
  min-height: var(--sizes-page-minHeight);
  display: flex;
  flex-direction: column;

  .{{pascalCase name}} {
    &__header {
    }

    &__main {
      flex: 1;
    }

    &__footer {
    }
  }
`;

export default {{pascalCase name}}Styled;
