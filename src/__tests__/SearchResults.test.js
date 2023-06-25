import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../../src/components/SearchResults";

describe("SearchResults", () => {
  
    const validProp = {
      results: `https://images-api.nasa.gov/search?q=moon`
    }

    test("check the component renders correctly", () => {
    const rendered = render(<SearchResults results={validProp}/>);

    expect(rendered).toMatchSnapshot(validProp.results);
  })
})