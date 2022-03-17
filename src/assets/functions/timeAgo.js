export const timeAgo = (time) => {

  switch (typeof time) {
    case 'number':
      break;
    case 'string':
      time = +new Date(time);
      break;
    case 'object':
      if (time.constructor === Date) time = time.getTime();
      break;
    default:
      time = +new Date();
  }
  var time_formats = [
    [60, 'সেকেন্ড', 1], // 60
    [120, '১ মিনিট আগে', '১ মিনিট বাকি'], // 60*2
    [3600, 'মিনিট', 60], // 60*60, 60
    [7200, '১ ঘন্টা আগে', '১ ঘন্টা বাকি'], // 60*60*2
    [86400, 'ঘন্টা', 3600], // 60*60*24, 60*60
    [172800, 'গতকাল', 'আগামীকাল'], // 60*60*24*2
    [604800, 'দিন', 86400], // 60*60*24*7, 60*60*24
    [1209600, 'গত সপ্তাহ', 'আগামী সপ্তাহ'], // 60*60*24*7*4*2
    [2419200, 'সপ্তাহ', 604800], // 60*60*24*7*4, 60*60*24*7
    [4838400, 'গত মাস', 'আগামী মাস'], // 60*60*24*7*4*2
    [29030400, 'মাস', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    [58060800, 'গত বছর', 'আগামী বছর'], // 60*60*24*7*4*12*2
    [2903040000, 'বছর', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    [5806080000, 'গত শতাব্দী', 'আগামী শতাব্দী'], // 60*60*24*7*4*12*100*2
    [58060800000, 'শতাব্দী', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
  ];
  var seconds = (+new Date() - time) / 1000,
    token = 'আগে',
    list_choice = 1;

  if (seconds == 0) {
    return 'এইমাত্র '
  }
  if (seconds < 0) {
    seconds = Math.abs(seconds);
    token = 'এখন হতে';
    list_choice = 2;
  }
  var i = 0,
    format;
  while (format === time_formats[i++])
    if (seconds < format[0]) {
      if (typeof format[2] === 'string')
        return format[list_choice];
      else
        return Math.floor(seconds / format[2]).toLocaleString("bn-BD") + ' ' + format[1] + ' ' + token;
    }
  return time;
}

  // var aDay = 24 * 60 * 60 * 1000;
  // console.log(timeAgo(new Date(Date.now() - aDay)));
  // console.log(timeAgo(new Date(Date.now() - aDay * 2)));