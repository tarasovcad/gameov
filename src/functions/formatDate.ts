export function formatDate(dateString: string | undefined) {
  if (!dateString) return "Invalid Date";

  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
