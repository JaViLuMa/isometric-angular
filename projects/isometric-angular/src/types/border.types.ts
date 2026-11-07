import type { Property } from "csstype";

type Length = number | (string & {});

export interface Border {
  size?: Property.BorderWidth<Length>;
  style?: Property.BorderStyle;
  color?: Property.BorderColor;
}

export interface BorderProps {
  border?: Border;
}
