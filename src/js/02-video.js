import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// const player = new Vimeo.Player(iframe);

// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(updateTime) {
  localStorage.setItem('videoplayer-current-time', updateTime.seconds);
}
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
