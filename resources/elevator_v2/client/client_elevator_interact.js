/// <reference types="@altv/types-client" />
/// <reference types="@altv/types-natives" />
import * as alt from 'alt-client';
alt.on('keydown', (key) => {
    alt.emitServer('Elevator:KeyPressed', key);
});
/// Elevator Panel öffnen ///
alt.onServer('Elevator_Page:Load', (ElevatorTyp) => {
    ///*Funktion zum öffnen
});
