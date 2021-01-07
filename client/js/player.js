var player = {
    x: 0,
    y: 0,
    z: 0
};

window.setInterval(() => {
    socket.emit('player-update', player);
    console.log('pooops');
}, 1000 / Config.UPDATE_INTERVAL);