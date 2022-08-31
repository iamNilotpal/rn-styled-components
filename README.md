# Use Styled-Components in your next React Native Project

<img src="./src/assets/Screenshot.jpg" alt="App made with Styled-Components" width="220"/>

> Note: This repository is an example how to use styled-components in your react-native project.

To run this app first clone this repo using:

```bash
git clone https://github.com/iamNilotpal/react-native-with-styled-components.git
```

Then install the dependencies by running:

```bash
# with npm
npm install

# with yarn
yarn
```

To start the project npm:

```bash
npm start

npm run android or npm run ios
```

To start the project yarn:

```bash
yarn start

yarn android or yarn ios
```

---

- [Use Styled-Components in your next React Native Project](#use-styled-components-in-your-next-react-native-project)
  - [What is styled-components?](#what-is-styled-components)
  - [Installation](#installation)
- [Getting Started](#getting-started)
  - [Adapting based on props](#adapting-based-on-props)
  - [Extending Styles](#extending-styles)
  - [Theming](#theming)
  - [Getting the theme without styled components](#getting-the-theme-without-styled-components)
    - [**via withTheme higher-order component**](#via-withtheme-higher-order-component)
    - [**via useContext React hook `v4`**](#via-usecontext-react-hook-v4)
    - [**via useTheme custom hook `v5`**](#via-usetheme-custom-hook-v5)

---

## [What is styled-components?](https://styled-components.com/ 'Styled Components Official Website')

**Styled-Components** are one of the ways to use CSS in modern JavaScript. It is
the meant to be a successor of CSS Modules, some way to put in writing CSS
that's scoped to a single component, and not leak the other elements in the page
eliminating global classnames.

## Installation

Installing styled-components only takes a single command:

```
# with npm
npm install --save styled-components

# with yarn
yarn add styled-components
```

> **Please Note**: If you use a package manager like yarn that supports the
> **"resolutions"** package.json field, you'll be able to add an entry to it as
> well corresponding to the major version range. This helps avoid a complete
> class of problems that arise from multiple versions of styled-components being
> installed in your project.

In package.json:

```json
{
  "resolutions": {
    "styled-components": "^5" // Your styled-components version
  }
}
```

# Getting Started

Styled-Components utilizes tagged template literals (JavaScript Feature) to
style our components. It removes the mapping between components and styles. This
means that when you're defining your styles, you're actually creating a normal
React component, that has your styles attached to it.

This example creates two simple components, a wrapper and a title, with some
styles attached to it:

```js
import React from 'react';
import styled from 'styled-components/native';

// Create a Title component that'll render an <Text> component with some styles
const Title = styled.Text`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

// Create a Wrapper component that'll render a <View> tag with some styles
const Wrapper = styled.View`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!

const MyApp = () => (
  <Wrapper>
    <Title>Hello Styled Components!</Title>
  </Wrapper>,
);
```

## Adapting based on props

You can pass props to styled components as we do in normal React or React Native
apps. You'll pass a **`function interpolations`** to a styled component's
template literal to adapt it based on its props.

For example this button component contains a primary state that changes its
color. When setting the primary prop to true, we are swapping out its background
and text color.

```js
import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.View`
  padding: 0.25em 1em;
  margin: 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  /* Adapt the colors based on primary prop */
  color: ${props => (props.primary ? 'white' : 'red')};
  font-size: 1em;
`;

const MyApp = () => (
  <View>
    // No props is passed
    <Button>
      <ButtonText>Normal</ButtonText>
    </Button>
    // Here we're passing the primary prop. So the color of the button will be
    "white" not "red"
    <Button>
      <ButtonText primary>Primary</ButtonText>
    </Button>
  </View>
);
```

## Extending Styles

Oftentimes we would like use a component, but modify it slightly. For that we
could pass in an interpolated function and change them based on some props, but
that's quite lot of effort for overriding the styles once.

To easily make a brand new component that inherits the styling of another styled
component, just wrap that styled component within the **`"styled()"`**
constructor.

Here we use the button from the last example and make a special one, extending
it with some color-related styling:

```js
// The Button from the last section without the interpolations
const Button = styled.View`
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
  margin: 1em;
`

const ButtonText = styled.Text`
  color: red;
  font-size: 1em;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  border-color: tomato;
`

const TomatoText = styled(ButtonText)`
  color: tomato;
`;

const MyApp = () => (
  <View>
  // Normal Button
    <Button>
      <ButtonText>Normal Button</ButtonText>
    </Button>

    // Tomato colored Button
    <TomatoButton>
      <TomatoText>Tomato Button</TomatoText>
    </TomatoButton>
  </View>,
);
```

## Theming

Oftentimes we want to create a **`Custom Theme`** for our app. Styled-Components
has full theming support by exporting a **ThemeProvider** wrapper component.
This component provides a **`Theme`** to all React components underneath itself
via the context API. Within the render tree all styled-components will have
access to the provided theme, even when they are multiple levels deep.

```js
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

// Define our button, but with the utilization of props.theme this time
const Button = styled.Text`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that aren't wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: 'red',
  },
};

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen',
};

const MyApp = () => (
  <View>
    <Button>Normal Button</Button>
    <ThemeProvider theme={theme}>
      <Button>Themed Button</Button>
    </ThemeProvider>
  </View>
);
```

## Getting the theme without styled components

### **via withTheme higher-order component**

If you ever need to use the current theme outside styled components (e.g. inside
big components), you'll be able to use the withTheme higher order component.

```js
import React from 'react';
import { withTheme } from 'styled-components';

const MyComponent () => {
  console.log('Current theme: ', this.props.theme);

  return <View>
    <Text>Theme</Text>
  </View>
}

export default withTheme(MyComponent);
```

### **via useContext React hook `v4`**

You can also use useContext to access the current theme outside of styled
components when working with React Hooks.

```js
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const MyComponent = () => {
  const themeContext = useContext(ThemeContext);

  console.log('Current theme: ', themeContext);
  // ...
};
```

### **via useTheme custom hook `v5`**

You can also use useTheme to access the current theme outside of styled
components when working with React Hooks.

```js
import { useTheme } from 'styled-components';

const MyComponent = () => {
  const theme = useTheme();
  console.log('Current theme: ', theme);
  // ...
};
```
