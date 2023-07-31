export function increment() {
  return { type: 'INCREMENT', value: undefined };
}

export function updateIncrement(value: number) {
  return { type: 'UPDATE_INCREMENT', value };
}

export function reset() {
  return { type: 'RESET', value: undefined };
}
