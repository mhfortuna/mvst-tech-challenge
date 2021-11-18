export const secondsToTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds - hours * 3600) / 60);
  const secs = seconds - hours * 3600 - minutes * 60;

  const time = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
    secs < 10 ? `0${secs}` : secs
  }`;
  return time;
};
