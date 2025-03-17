export const debounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number,
) => {
  let timerId: NodeJS.Timeout;
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};
