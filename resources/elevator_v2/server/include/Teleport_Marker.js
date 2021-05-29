/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
export default class TeleportMarker extends alt.ColshapeCylinder {
    constructor(x, y, z, height, range, name, stage) {
        super(x, y, z, range, height);
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.height = 0;
        this.range = 0;
        this.name = '';
        this.stage = 0;
        this.x = x;
        this.y = y;
        this.z = z;
        this.height = height;
        this.range = range;
        this.name = name;
        this.stage = stage;
    }
}
