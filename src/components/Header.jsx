import React from "react";
export default function Header() {
  return (
    <div>
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div >
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
          <div>
            <ul className="flex space-x-10">
                <li>Home</li>
                <li>Offers</li>
                <li>Sign in</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
 