export const getTitle = (score) => {
  if (score < 50) {
    return "Try Again and improve";
  }
  if (score < 90) {
    return "Nice attempt but try again";
  }
  return "Way to go Champ!!";
};
