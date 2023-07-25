export function increment() {
  return { type: 'INCREMENT', value: undefined };
}

export function updateIncrement(value: number) {
  return { type: 'UPDATE_INCREMENT', value };
}
