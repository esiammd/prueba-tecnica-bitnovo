import { format } from 'date-fns';

export default function formatDate(value: string): string {
  const date = new Date(value);
  const dateFormatted = format(date, 'dd/MM/yyyy HH:mm');
  return dateFormatted;
}
