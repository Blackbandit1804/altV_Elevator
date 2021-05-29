/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import TeleportMarker from './Teleport_Marker';
import { Positions as Marker }from './positions/marker.js';

/// Postions ///
var TeleportPosition: Array<TeleportMarker> = [];
for(var i in Marker){
    TeleportPosition[i] = new TeleportMarker(Marker[i].x,Marker[i].y,Marker[i].z,Marker[i].height,Marker[i].range,Marker[i].name,Marker[i].stage);
}



alt.on('entityEnterColshape', (teleportPoint: TeleportMarker, entity: any) => {
    alt.emitClient(entity, 'showHelpText', 'Drücke ~INPUT_CONTEXT~ um in den Fahrstuhl zu Benutzen.', 6250); //Helptext zum Anzeigen des Buttons!

    alt.onClient('Elevator:KeyPressed', (player, key: number) => {
        //Überprüfung der Taste && Ob Player sich noch im Colshape befindet.
        if (key == 69 && teleportPoint.isEntityIn(entity)) {
            let tempPositions = [];
            for(var i in TeleportPosition){
                if(TeleportPosition[i].name == teleportPoint.name){
                    tempPositions.push(JSON.stringify(TeleportPosition[i]))
                }
            }
            var StringJS = JSON.stringify(tempPositions);
            alt.emitClient(entity,'Elevator_Page:Load', StringJS);  
        }
       
    });
});
