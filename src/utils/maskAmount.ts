export default function maskAmount(value: string): string {
  let amount = value;
  amount = amount.replace(/\D/g, '');
  amount = amount.replace(/(\d)(\d{2})$/, '$1,$2');
  amount = amount.replace(/(?=(\d{3})+(\D))\B/g, '.');

  return amount;
}
