// {{ pascalCase name }} stories
import React from "react";
import { Meta, Story } from "@storybook/react";

import {{ pascalCase name }} from "./{{ pascalCase name }}";
import { {{ pascalCase name }}Props as Props } from "./{{ pascalCase name }}.types";
import { {{ pascalCase name }}StoriesStyles as StoriesStyles } from "./{{ pascalCase name }}.stories.styles";

export default {
  title: "{{ pascalCase name }}",
  component: {{ pascalCase name }},
  decorators: [
    Story => (
      <StoriesStyles>
        <Story />
      </StoriesStyles>
    )
  ]
} as Meta;

const Template: Story<Props> = args => <{{ pascalCase name }} {...args} />;

// Story name -> Simple
export const Simple = Template.bind({});

Simple.args = {
  className: "Story"
};

Simple.parameters = {
  docs: {
    description: {
      story: `This story shows a simple example of this component`
    }
  }
};
