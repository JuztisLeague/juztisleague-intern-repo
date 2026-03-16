import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import UserList from "../components/UserList";

// This replaces the ENTIRE axios module with a fake version
jest.mock("axios");

test("renders users from API", async () => {

  // This is our fake data — pretending the API returned this
  const fakeUsers = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];

  // Tell the fake axios to return our fake data
  axios.get.mockResolvedValue({ data: fakeUsers });

  // Render the component
  render(<UserList />);

  // First check that loading shows
  expect(screen.getByText(/Loading/i)).toBeInTheDocument();

  // Wait for the users to appear on screen
  await waitFor(() => {
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

});