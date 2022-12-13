import { LinkProps, Link as MuiLink } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

import React, { FC } from "react";

const Link: FC<LinkProps> = props => {
  return (
    <MuiLink 
        color="inherit"
        underline="none"
        variant="inherit"
        {...props} component={ReactRouterLink} to={props.href ?? "#"} 
        />
  );
};

export default Link;