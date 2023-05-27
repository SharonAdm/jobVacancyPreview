export function getTimeDiffFromNow(datetime) {
  const now = new Date();
  const adPosted = new Date(datetime);

  var milisec_diff = adPosted < now ? now - adPosted : adPosted - now;

  var days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

  var date_diff = new Date(milisec_diff);

  if (days === 0 && date_diff.getHours() === 0) {
    //show minutes if days and hours were 0
    return ` ${date_diff.getMinutes()}m ago`;
  } else if (days === 0 && date_diff.getHours() !== 0) {
    //show hours if days were 0
    return ` ${date_diff.getHours()}h ago`;
  } else {
    //show days if days weren't 0
    return `${days}d ago`;
  }
}
