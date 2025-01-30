import { useQuery } from "@tanstack/react-query";
import { describe, expect, it, Mock, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SearchLocations } from ".";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("SearchLocations", () => {
  vi.mock("@tanstack/react-query", () => ({
    useQuery: vi.fn(),
  }));

  const testLocations = [
    {
      name: "Berlin",
      coords: [52.5108, 13.3989],
    },
    {
      name: "London",
      coords: [51.5074, -0.1278],
    },
    {
      name: "New York",
      coords: [40.7128, -74.006],
    },
  ];
  const testRef = null as unknown as React.RefObject<HTMLDialogElement>;
  const testAddLocation = () => console.log("Location added");

  it("Renders an error message when the query fails", () => {
    (useQuery as Mock).mockImplementationOnce(() => ({
      data: undefined,
      isError: true,
      isLoading: false,
    }));

    render(
      <SearchLocations dialogRef={testRef} addLocation={testAddLocation} />,
    );

    expect(
      screen.getByText(
        /something went wrong while getting the locations, please try again later!/i,
      ),
    ).toBeInTheDocument();
  });

  it('Renders a "no results" message only when the API returns an empty array', () => {
    (useQuery as Mock).mockImplementationOnce(() => ({
      data: undefined,
      isError: false,
      isLoading: false,
    }));

    render(
      <SearchLocations dialogRef={testRef} addLocation={testAddLocation} />,
    );

    expect(
      screen.queryByText(
        /no locations found, try searching for someplace else!/i,
      ),
    ).not.toBeInTheDocument();
  });

  it("Prompts the user to try another search query if no results are found", () => {
    (useQuery as Mock).mockImplementationOnce(() => ({
      data: [],
      isError: false,
      isLoading: false,
    }));

    render(
      <SearchLocations dialogRef={testRef} addLocation={testAddLocation} />,
    );

    screen.logTestingPlaygroundURL();
    expect(
      screen.getByText(/No locations found, try searching/i),
    ).toBeInTheDocument();
  });

  it("Displays results from the API correctly", () => {
    (useQuery as Mock).mockImplementationOnce(() => ({
      data: testLocations,
      isError: false,
      isLoading: false,
    }));

    render(
      <SearchLocations dialogRef={testRef} addLocation={testAddLocation} />,
    );

    testLocations.forEach((location) => {
      expect(screen.getByText(location.name)).toBeInTheDocument();
    });
  });
});
