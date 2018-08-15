/* @flow */
import * as React from "react";
import { withTheme } from "theme";
import cxs from "cxs";
import classnames from "classnames";
import { isDarkColor } from "utils/helpers";

type Props = {
  children: string | React.Node,
  className?: string,
  styles?: Object,
  theme?: Object,
  type: string,
  otherProps?: Object
};

const Button = (props: Props) => {
  const { className, children, styles, theme, type, ...otherProps } = props;

  const _styles = cxs({
    backgroundColor: theme ? theme[type + "Color"] : "#fff",
    borderRadius: theme ? theme.borderRadius : 0,
    border: 0,
    color: theme
      ? isDarkColor(theme[type + "Color"])
        ? "#fff"
        : "#000"
      : "#fff",
    padding: ".375rem .75rem",
    fontSize: "1rem",
    fontWeight: 400,
    minWidth: "6rem",
    textAlign: "center",
    ":hover": {
      opacity: 0.7
    },
    ":disabled": {
      opacity: 0.3
    },
    ":focus": {
      boxShadow: "0 0 0 0.2rem rgba(108,117,125,.5)"
    },
    ...styles
  });

  return (
    <button className={classnames(_styles, className)} {...otherProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "primary"
};

export default withTheme(Button);
