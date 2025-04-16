export const GAP = 8;
export const BAR_HEIGHT = 150;
export const DAYS_COUNT_IN_WEEK = 7;

// Calculate the date of the Monday from three weeks ago
const now = new Date();
const threeWeeksAgo = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() - 21,
);

// Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const day = threeWeeksAgo.getDay();

// Calculate how many days to subtract to get back to the previous Monday
const diffToMonday = (day + 6) % 7; // Shifts Sunday (0) to 6, Monday (1) to 0, etc.

const mondayFromThreeWeeksAgo = new Date(
  threeWeeksAgo.getFullYear(),
  threeWeeksAgo.getMonth(),
  threeWeeksAgo.getDate() - diffToMonday,
);

// Generate data for a 7x7 grid (7 weeks, 7 days each)
export const data = new Array(7).fill(null).map((_, weekIndex) => {
  return new Array(7).fill(null).map((__, dayIndex) => {
    // Calculate the date for each day in the grid
    const calculatedDay = new Date(
      mondayFromThreeWeeksAgo.getTime() + 86400000 * (weekIndex * 7 + dayIndex), // Add the corresponding number of days in milliseconds
    );

    // Generate a random value for each day
    const value = Math.random(); // between 0 and 1

    // Return an object containing the date and random value
    return {
      day: calculatedDay,
      value: value,
    };
  });
});

/*
Example of a resulting object in the 'data' array:
[
  [
    { day: 2024-06-24T00:00:00.000Z, value: 0.123456789 }, // Monday of the first week
    { day: 2024-06-25T00:00:00.000Z, value: 0.987654321 }, // Tuesday of the first week
    { day: 2024-06-26T00:00:00.000Z, value: 0.456789123 }, // Wednesday of the first week
    { day: 2024-06-27T00:00:00.000Z, value: 0.654321987 }, // Thursday of the first week
    { day: 2024-06-28T00:00:00.000Z, value: 0.789123456 }, // Friday of the first week
    { day: 2024-06-29T00:00:00.000Z, value: 0.321987654 }, // Saturday of the first week
    { day: 2024-06-30T00:00:00.000Z, value: 0.987654321 }, // Sunday of the first week
  ],
  [
    { day: 2024-07-01T00:00:00.000Z, value: 0.123456789 }, // Monday of the second week
    // ... (similar objects for each day of the second week)
  ],
  // ... (similar arrays for each subsequent week)
]
*/
