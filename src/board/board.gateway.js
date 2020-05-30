import { getDate } from "./addFunctions";

const baseUrl = "https://api.iev.aero/api/flights";
const date = getDate(new Date());

export const fetchFlightsList = () =>
  fetch(`${baseUrl}/${date}`).then((response) => {
    if (response.ok) return response.json();
    throw new Error("Failed to download actual flights");
  });
