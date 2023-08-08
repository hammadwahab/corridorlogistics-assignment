import axios from "axios";

const API_URL = "https://cx6bmbl1e3.execute-api.us-east-2.amazonaws.com/venues";

export const fetchVenues = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching venues:", error);
    return [];
  }
};
