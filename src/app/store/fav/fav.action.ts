import { Action } from "@ngrx/store";


export class Favourte implements Action{
    readonly type="SET_FAVOURITE";

    constructor(public paylaod:any ){}
}

