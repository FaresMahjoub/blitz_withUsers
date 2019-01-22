import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

// auxiliary function to wrap a path in an SvgIcon component
// eslint-disable-next-line react/display-name
export const wrapSvgPath = (path, wrapProps) => props => (
    <SvgIcon {...Object.assign(wrapProps, props)} > {path} </SvgIcon>
);