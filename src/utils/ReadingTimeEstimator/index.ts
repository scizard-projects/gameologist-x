const parseWords = (data: string) =>
  data.match(/[\w|\d|\s|,|.|\u00C0-\u024F|\u4E00-\u9FA5|\u3041-\u309F]+/giu) ??
  [];

const getNumberOfWords = (data: string) =>
  // @ts-ignore
  parseWords(data).reduce(
    // @ts-ignore
    (accumulator, word) =>
      accumulator +
      (!word.trim().length ? 0 : word.trim().split(/\s+/u).length),
    0,
  );

const getText = (minutes: number) =>
  minutes < 2 ? '1 minute read' : `${minutes} minutes read`;

export const readingTime = (data: string, wordsPerMinute = 200): string => {
  const words = getNumberOfWords(data);
  const minutes = Number(Math.round(words / wordsPerMinute).toFixed(2));

  return getText(minutes);
};
