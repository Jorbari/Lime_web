import React from "react";
import styled from "styled-components";

import UserDropdown from "./UserDropdown.js";

const BorderStyle = styled.div`
  border-bottom: 1px solid rgba(91, 86, 86, 0.5);
  padding-bottom: 1rem;
`;

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
        <BorderStyle className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <p className="text-dark text-sm uppercase hidden lg:inline-block font-semibold">
            {props.title}
          </p>
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </BorderStyle>
      </nav>
    </>
  );
}
