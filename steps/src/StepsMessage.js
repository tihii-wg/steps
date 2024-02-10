import { React } from "react";
import { Button } from "./Button";

export function StepsMessage({ steps, message, children }) {
  return (
    <div className="message">
      <h3>Step{steps}</h3>
      {children}

      <Button
        handler={() => {
          alert(`Leanr ${message[steps - 1]}`);
        }}
      >
        <span>Learn now</span>
      </Button>
    </div>
  );
}
