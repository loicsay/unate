import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export default function Button({ label, ...props }: Props) {
  return (
    <button
      className="h-3/6 rounded-full bg-primary text-white py-3 px-11 text-lg tracking-wide font-medium"
      {...props}
    >
      {label}
    </button>
  );
}
