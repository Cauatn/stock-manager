export function getDate() {
  var curr = new Date();
  curr.setDate(curr.getDate());
  return curr.toISOString().substring(0, 10);
}
