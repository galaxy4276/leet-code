export default function overAndUnderFlow(num: number) {
  if (num > Number.MAX_VALUE) return -1;
  if (num < Number.MIN_VALUE) return -1;
  return 1;
}
