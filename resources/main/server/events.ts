/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as native from 'natives';
alt.on('playerConnect', (player) => {
    player.spawn(132.22418212890625, -765.6395874023438, 45.7420654296875, 150);
    player.model = 'mp_m_freemode_01';
});

alt.on('playerDeath', (player) => {
    player.spawn(player.pos.x, player.pos.y, player.pos.z, 1000);
});
