import React from "react";
import { render } from "@testing-library/react";
import Search from "../../src/components/Search";

describe("Search", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
    
  });
})
