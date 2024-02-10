export const arrowSize = (windowSize: number) => {
  let result: number = 0;
  switch (true) {
    case windowSize > 1200:
      result = 48;
      break;
    case windowSize <= 1200 && windowSize > 1000:
      result = 42;
      break;
    case windowSize <= 1000 && windowSize > 900:
      result = 36;
      break;
    case windowSize <= 900 && windowSize > 820:
      result = 32;
      break;
    case windowSize <= 820 && windowSize > 520:
      result = 28;
      break;
    case windowSize <= 520 && windowSize > 480:
      result = 20;
      break;
    case windowSize <= 480 && windowSize > 389:
      result = 18;
      break;
    case windowSize <= 389:
      result = 16;
      break;
    default:
      result = 48;
      break;
  }
  return result;
};

export const flashSize = (windowSize: number) => {
  let result: number = 0;
  switch (true) {
    case windowSize > 1200:
      result = 34;
      break;
    case windowSize <= 1200 && windowSize > 1000:
      result = 32;
      break;
    case windowSize <= 1000 && windowSize > 900:
      result = 30;
      break;
    case windowSize <= 900 && windowSize > 820:
      result = 26;
      break;
    case windowSize <= 820 && windowSize > 520:
      result = 24;
      break;
    case windowSize <= 520 && windowSize > 480:
      result = 20;
      break;
    case windowSize <= 480 && windowSize > 389:
      result = 18;
      break;
    case windowSize <= 389:
      result = 16;
      break;
    default:
      result = 34;
      break;
  }
  return result;
};
