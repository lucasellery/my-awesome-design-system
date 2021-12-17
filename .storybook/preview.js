// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
import { addParameters, addDecorator } from '@storybook/react';
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from './contexts';
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
  background: [
    {name: "Default Theme", value: "#ffffff", default: true},
    {name: "Dark Theme", value: "#050449"},
  ]
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
