import { useState } from "react";

const useCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return { date, setDate, isCalendarOpen, setIsCalendarOpen };
};

export default useCalendar;
