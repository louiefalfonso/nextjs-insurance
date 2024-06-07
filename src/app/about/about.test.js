import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { About } from "./About";

describe("About component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<About />);
    expect(getByText("About Us")).toBeInTheDocument();
  });

  it("renders feature one section", () => {
    const { getByText } = render(<About />);
    expect(getByText("First & Reliable")).toBeInTheDocument();
  });

  it("renders counter one section", () => {
    const { getByText } = render(<About />);
    expect(getByText("Active Team Members")).toBeInTheDocument();
  });

  it("renders why choose three section", () => {
    const { getByText } = render(<About />);
    expect(getByText("Full Safety Money")).toBeInTheDocument();
  });

  it("renders testimonial one section", () => {
    const { getByText } = render(<About />);
    expect(
      getByText("Pension schemes ensu security during retirement years")
    ).toBeInTheDocument();
  });

  it("renders video one section", () => {
    const { getByText } = render(<About />);
    expect(
      getByText("QUALITY INSURACE SERVICE COMAPY FOR YOUR FUTURE")
    ).toBeInTheDocument();
  });

  it("renders team two section", () => {
    const { getByText } = render(<About />);
    expect(getByText("William Hender")).toBeInTheDocument();
  });

  it("renders brand one section", () => {
    const { getByText } = render(<About />);
    expect(getByText("Brand Slider")).toBeInTheDocument();
  });

  it("opens modal video when clicked", () => {
    const { getByText } = render(<About />);
    const videoButton = getByText("Play Video");
    fireEvent.click(videoButton);
    expect(getByText("Modal Video")).toBeInTheDocument();
  });
});
