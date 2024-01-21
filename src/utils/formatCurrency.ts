export default function formatCurrency(value: string): string {
  const cleanValue = value.replace(/\D/g, '');

  if (cleanValue === '') {
    return cleanValue;
  }

  let currency = (parseInt(cleanValue) / 100).toFixed(2);
  currency = currency.replace('.', ',');
  currency = currency.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return currency;
}
