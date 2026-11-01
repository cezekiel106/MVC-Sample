import { _decorator, Component, Node } from 'cc';
import {GameEvent} from "db://assets/scripts/helper/GameEvent";
import {GameEventEnum} from "db://assets/scripts/enum/GameEventEnum";
const { ccclass, property } = _decorator;

@ccclass('PlayerController')
export class PlayerController extends Component {
    private keyValue = 0;

    onLoad(){
        GameEvent.on(GameEventEnum.ON_KEY_INTERACT, this.updateKeyValue, this);
    }

    onDestroy(){
        GameEvent.off(GameEventEnum.ON_KEY_INTERACT, this.updateKeyValue, this);
    }

    updateKeyValue(keyValue){
        this.keyValue = keyValue;
    }
}