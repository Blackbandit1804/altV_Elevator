/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
import * as native from 'natives';
alt.onServer('drawNotification', drawNotification);
export function drawNotification(imageName, headerMsg, detailsMsg, message) {
    native.beginTextCommandThefeedPost('STRING');
    native.addTextComponentSubstringPlayerName(message);
    native.endTextCommandThefeedPostMessagetextTu(imageName.toUpperCase(), imageName.toUpperCase(), false, 4, headerMsg, detailsMsg, 0.5);
    native.endTextCommandThefeedPostTicker(false, false);
}
alt.onServer('drawNotification', drawNotification);
alt.onServer('showHelpText', showHelpText);
export function showHelpText(text, milliseconds) {
    native.beginTextCommandDisplayHelp('STRING');
    native.addTextComponentSubstringPlayerName(text);
    native.endTextCommandDisplayHelp(0, true, true, milliseconds);
}
