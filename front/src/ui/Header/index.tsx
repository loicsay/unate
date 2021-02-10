import React from "react";
import logoPrimary from "ui/svg/logo-primary.svg";

interface Props extends React.HTMLAttributes<HTMLElement> {
  home?: boolean;
}

export default function Header({ home, ...headerProps }: Props) {
  if (home) {
    return (
      <header {...headerProps}>
        <img src={logoPrimary} alt="Unate logo" />
        <p className="text-gray-600">Locate and meet your friends.</p>
      </header>
    );
  }

  return null;
}
