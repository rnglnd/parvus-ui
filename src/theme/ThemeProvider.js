/* @flow */
import React, { type Node } from 'react';
import themeContext from "./themeContext";

type Props = {
  children: Node,
  theme: {
    backgroundColor?: string,
    borderRadius?: number,
    primaryColor?: string,
    secondaryColor?: string,
    tertiaryColor?: string,
    successColor?: string,
    errorColor?: string,
    warningColor?: string,
    fontColor?: string,
    fontFamily?: string
  }
};

const ThemeProvider = (props: Props) => {
  const { children, theme } = props;

  const _theme = {
    backgroundColor: theme.backgroundColor || "#ffffff",
    primaryColor: theme.primaryColor || "blue",
    secondaryColor: theme.secondaryColor || "gray",
    tertiaryColor: theme.tertiaryColor || "white",
    successColor: theme.successColor || "green",
    errorColor: theme.errorColor || "red",
    warningColor: theme.warningColor || "orange",
    borderRadius: theme.borderRadius || 0,
    fontColor: theme.fontColor || '#000000',
    fontFamily: theme.fontFamily || 'Helvetica Neue, Helvetica, Arial, sans-serif'
  };

  return (
    <themeContext.Provider value={_theme}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
