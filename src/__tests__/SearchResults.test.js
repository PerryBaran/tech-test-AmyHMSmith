import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../../src/components/SearchResults";

describe("SearchResults", () => {
  test("renders correctly", () => {
    const { asFragment } = render(<SearchResults />);

    expect(asFragment()).toMatchSnapshot();
  })
})