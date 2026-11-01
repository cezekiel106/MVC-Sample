import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

const open = (1 << 0);
const close = 0;

// View of Keys and Doors
@ccclass('ChildView')
export class ChildView extends Component {
    private label: Label;
    private state = 0;

    onLoad(){
        this.label = this.getComponent(Label);
        this.label.string = 'closed';
    }

    protected updateLabel(isOpen: boolean){
        if(!isOpen) return;
        if((this.state & open) === open) return;

        this.state |= open;
        this.label.string = "Open";
    }
}


