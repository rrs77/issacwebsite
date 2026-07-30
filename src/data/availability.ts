export type SlotStatus = "available" | "booked";

export type DayAvailability = {
  day: string;
  note?: string;
  slots: { time: string; status: SlotStatus }[];
};

/** Update these slots to reflect current bookings. Shown on the contact page. */
export const WEEKLY_AVAILABILITY: DayAvailability[] = [
  {
    day: "Monday",
    slots: [
      { time: "16:00–17:00", status: "available" },
      { time: "17:00–18:00", status: "booked" },
      { time: "18:00–19:00", status: "available" },
    ],
  },
  {
    day: "Tuesday",
    slots: [
      { time: "16:00–17:00", status: "booked" },
      { time: "17:00–18:00", status: "available" },
      { time: "18:00–19:00", status: "available" },
    ],
  },
  {
    day: "Wednesday",
    slots: [
      { time: "16:00–17:00", status: "available" },
      { time: "17:00–18:00", status: "available" },
      { time: "18:00–19:00", status: "booked" },
    ],
  },
  {
    day: "Thursday",
    slots: [
      { time: "16:00–17:00", status: "available" },
      { time: "17:00–18:00", status: "booked" },
      { time: "18:00–19:00", status: "available" },
    ],
  },
  {
    day: "Friday",
    slots: [
      { time: "16:00–17:00", status: "available" },
      { time: "17:00–18:00", status: "available" },
    ],
  },
  {
    day: "Saturday",
    note: "By arrangement",
    slots: [
      { time: "10:00–11:00", status: "available" },
      { time: "11:00–12:00", status: "available" },
    ],
  },
  {
    day: "Sunday",
    note: "Usually unavailable",
    slots: [],
  },
];
