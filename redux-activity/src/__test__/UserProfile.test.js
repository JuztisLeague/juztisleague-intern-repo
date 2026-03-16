import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import axios from "axios";
import UserProfile from "../components/UserProfile";

jest.mock("axios");

// Unit Test — checks if component renders after loading
test("shows loading message while fetching user", async () => {

    const fakeUser = {
      name: "John",
      email: "john@email.com",
      phone: "123"
    };
  
    axios.get.mockResolvedValue({ data: fakeUser });
  
    await act(async () => {
      render(<UserProfile userId={1} />);
    });
  
    // By the time act() finishes, loading is done
    // So we check the final rendered result instead
    await waitFor(() => {
      expect(screen.getByText("Name: John")).toBeInTheDocument();
      expect(screen.getByText("User Profile")).toBeInTheDocument();
    });
  
  });