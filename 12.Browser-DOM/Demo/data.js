// Import the Backpack class so we can make new Backpack objects.
import Bags from "./Bags";

// Create new Backpack object
const everydayPack = new Bags(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "./images/two.png"
  );

// Create new Backpack object
const frogPack = new Bags(
  "pack02",
  "Frog Backpack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "October 16, 2019 15:00:00 PST",
  "./images/one.png"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

// Export the array to be used in other files
export default backpackObjectArray;