const DURATION_BANGLA = { year: "বছর", month: "মাস", day: "দিন", hour: "ঘন্টা", minute: "মিনিট" };
const DURATION_IN_SECONDS = {
  epochs: ['year', 'month', 'day', 'hour', 'minute'],
  year: 31536000,
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60
};

const getDuration = (seconds) => {
  var epoch, interval;

  for (var i = 0; i < DURATION_IN_SECONDS.epochs.length; i++) {
    epoch = DURATION_IN_SECONDS.epochs[i];
    interval = Math.floor(seconds / DURATION_IN_SECONDS[epoch]);
    if (interval >= 1) {
      return {
        interval: interval,
        epoch: epoch
      };
    }
  }

};

export const timeAgo = (date) => {
  var seconds = Math.floor((new Date() - new Date(date)) / 1000);
  var duration = getDuration(seconds);
  var suffix = (duration.interval > 1 || duration.interval === 0) ? ' আগে' : '';
  return duration.interval.toLocaleString("bn-BD") + ' ' + DURATION_BANGLA[duration.epoch] + suffix;
};