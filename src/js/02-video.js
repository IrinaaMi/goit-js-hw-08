import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo('vimeo-player');

player.on('timeupdate', function(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
});
const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime !== null) {
    player.setCurrentTime(savedTime);
}
player.on(
    'timeupdate',
    throttle(function(data) {
        const currentTime = data.seconds;
        localStorage.setItem('videoplayer-current-time', currentTime);
    }, 1000)
);