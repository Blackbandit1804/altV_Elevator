/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
// @ts-ignore
import * as chat from 'chat';
chat.registerCmd('vehicle', (player: alt.Player, modelname: string | number) => {
    let fahrzeug: alt.Vehicle;

    if (!modelname) {
        chat.send(player, 'Eingabefehler: /vehicle [Modelname] ');
        return;
    }

    try {
        fahrzeug = new alt.Vehicle(modelname, player.pos.x, player.pos.y, player.pos.z, 0, 0, 0);
        chat.send(player, 'Fahrzeug wurde erfolgreich gespawnt!');
    } catch (error) {
        chat.send(player, 'Modell nicht gefunden! oder Eingabe war fehlerhaft!');
    }
});

chat.registerCmd('tp', (player: alt.Player, xtp: number, ytp: number, ztp: number) => {
    try {
        player.spawn(xtp, ytp, ztp, 0);
    } catch (error) {
        chat.send(player, 'TP nicht möglich!');
    }
});

chat.registerCmd('pos', (player: alt.Player) => {
    alt.log(player, 'Position: X = ' + player.pos.x + ' Y = ' + player.pos.y + ' Z = ' + player.pos.z);
});

chat.registerCmd('startnc', (player: alt.Player) => {
    alt.emitClient(player, 'noclip:start');
});
chat.registerCmd('stopnc', (player: alt.Player) => {
    alt.emitClient(player, 'noclip:stop');
});

