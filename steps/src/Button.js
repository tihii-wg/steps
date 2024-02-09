import { React } from "react";

export function Button({ handler, text }) {
  return <button onClick={handler}>{text}</button>;
}
