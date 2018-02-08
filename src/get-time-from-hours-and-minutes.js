const getTimeFromHnMs = string => {
  const [hours, minutes] = string.split(":")
  const date = new Date()
  date.setHours(hours)
  date.setMinutes(minutes)
  return date
}

export default getTimeFromHnMs
