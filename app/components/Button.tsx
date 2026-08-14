import React from "react";

type NavButtonProps = React.ComponentProps<"button">;

export const Button = ({ children, ...props }: NavButtonProps) => (
  <button
    {...props}
    type="button"
    className="px-4 py-2 button-text border rounded-xl cursor-pointer"
  >
    {children}
  </button>
);
