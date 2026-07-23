import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true, // Include credentials in requests
});

export async function registerUser(
  username: string,
  email: string,
  password: string,
) {
  try {
    const { data } = await api.post(
      "/register",
      {
        username,
        email,
        password,
      },
      { withCredentials: true },
    ); // Include credentials in the request
    return data;
  } catch (error) {
    if (axios.isAxiosError(error instanceof Error)) {
      console.error("Error registering user:", error);
      throw error;
    }
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const { data } = await api.post("/login", {
      email,
      password,
    }); // Include credentials in the request
    return data;

  } catch (error) {
    if (axios.isAxiosError(error instanceof Error)) {
      console.error("Error logging in user:", error);
      throw error;
    }
  }
}

export async function logoutUser() {
  try {
    const response = await api.get("/logout");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error instanceof Error)) {
      console.error("Error logging out user:", error);
      throw error;
    }
  }
}

export async function getCurrentUser() {
  try {
    const { data } = await api.get("/get-user");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error instanceof Error)) {
      console.error("Error fetching current user:", error);
      throw error;
    }
  }
}
