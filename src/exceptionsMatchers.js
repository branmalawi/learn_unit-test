export const callMyName = (name) => {
  if (name !== "syibran") {
    throw new Error("Ups, you call wrong name")
  } else {
    return "ok";
  }
}