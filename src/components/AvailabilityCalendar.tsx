import { WEEKLY_AVAILABILITY } from "@/data/availability";

export function AvailabilityCalendar() {
  return (
    <div className="rounded-2xl bg-white px-5 py-6 ring-1 ring-teal/10 sm:px-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-xl font-bold text-ink">Weekly availability</h2>
          <p className="mt-1 text-sm text-ink-soft">
            A live view of typical slots this week. Booked times are already taken — mention a
            free slot when you enquire.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold text-ink-soft">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-teal" aria-hidden />
            Available
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-gold/70" aria-hidden />
            Booked
          </span>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {WEEKLY_AVAILABILITY.map((day) => (
          <div
            key={day.day}
            className="rounded-xl border border-teal/10 bg-mint/40 px-3.5 py-3.5"
          >
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-display text-sm font-bold text-ink">{day.day}</h3>
              {day.note ? <span className="text-[11px] text-ink-soft">{day.note}</span> : null}
            </div>
            {day.slots.length === 0 ? (
              <p className="mt-3 text-xs text-ink-soft">No regular slots</p>
            ) : (
              <ul className="mt-3 space-y-1.5">
                {day.slots.map((slot) => (
                  <li
                    key={`${day.day}-${slot.time}`}
                    className={`flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium ${
                      slot.status === "available"
                        ? "bg-white text-teal ring-1 ring-teal/15"
                        : "bg-gold/15 text-ink-soft line-through decoration-gold/50"
                    }`}
                  >
                    <span>{slot.time}</span>
                    <span className="no-underline">
                      {slot.status === "available" ? "Open" : "Booked"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
