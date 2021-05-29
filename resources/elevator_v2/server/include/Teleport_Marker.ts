/// <reference types="@altv/types-server" />
import * as alt from 'alt-server';
import * as native from 'natives';

export default class TeleportMarker extends alt.ColshapeCylinder {
    public x : number = 0;
    public y : number = 0;
    public z : number = 0;
    public height : number = 0;
    public range : number = 0;
    public name: string = '';
    public stage: number = 0;

    constructor(x: number, y: number, z: number, height: number, range: number, name: string, stage: number) {
        super(x, y, z, range, height);
        this.x = x;
        this.y = y;
        this.z = z;
        this.height = height;
        this.range = range;
        this.name = name;
        this.stage = stage;
    }
}
