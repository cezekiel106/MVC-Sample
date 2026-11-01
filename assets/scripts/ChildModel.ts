import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

// Model of Keys and Doors
@ccclass('ChildModel')
export class ChildModel {
    get ChildValue(): number {
        return this._childValue;
    }

    set ChildValue(value: number) {
        this._childValue = value;
    }

    private _childValue = 0;
}


