const UseFormatTime = (time) => {
  const date = new Date(time);
  return date.toLocaleString("en-GB", {
    weekday: "short",
    //year: "numeric",
    //month: "short",
    //day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export default UseFormatTime;
