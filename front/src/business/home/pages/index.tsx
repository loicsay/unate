import React from "react";
import Button from "ui/Button";
import Header from "ui/Header";

export default function HomePage() {
  return (
    <div className="bg-white h-screen">
      <Header
        className="w-max h-3/6 flex flex-col justify-center m-auto"
        home
      />
      <div className="flex justify-center">
        <Button label="Share position" />
      </div>
    </div>
  );
}
