export const applyMask = (event: React.ChangeEvent<HTMLInputElement>) => {
  let value = event.target.value.replace(/\D/g, "");

  value = (Number(value) / 100).toFixed(2) + "";
  value = value.replace(".", ",");
  value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  event.target.value = "R$ " + value;
};
