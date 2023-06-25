import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import App from "../../src/components/App";

describe("App", () => {
  test("renders App component correctly", async () => {
    // jest.spyOn(axios, "get").mockResolvedValue({ data: forecast });

    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});