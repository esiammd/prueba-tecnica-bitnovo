export default function parseCurrency(value: string): number {
  return Number.parseFloat(value.replaceAll('.', '').replaceAll(',', '.'));
}
