exports.getTime = function(timeZone) {
  const serverDate = new Date();
  const validTimeZone = timeZone ? { timeZone } : {};

  return serverDate.toLocaleTimeString('en-US', {
    hour12: false,
    hourCycle: 'h24',
    ...validTimeZone,
  });
}
