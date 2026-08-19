export const PLACEHOLDER_PREFIX = "PREENCHER_";

export function isPlaceholder(value: string | null | undefined): boolean {
  if (!value) return true;
  return value.startsWith(PLACEHOLDER_PREFIX);
}
