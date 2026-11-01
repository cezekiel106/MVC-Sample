import { _decorator, Component, Node } from 'cc';
import {ChildView} from "db://assets/scripts/ChildView";
import {ChildModel} from "db://assets/scripts/ChildModel";
const { ccclass, property } = _decorator;

// Common Controller behavior for door and key controllers
@ccclass('ParentController')
export class ParentController extends Component {
    private childView: ChildView[] = [];
    private childModel: ChildModel[] = [];

    private childValue: number[] = [(1<<0), (1<<1), (1<<2), (1<<3)];

    onLoad(){
        this.childView = this.node.getComponentsInChildren(ChildView);

        this.initializeChildModels();
        this.initializeShuffle();
    }

    start(){

    }

    private initializeChildModels(){
        this.childView.forEach((child)=>{
            let model = new ChildModel();
            this.childModel.push(model);
        })
    }

    private initializeShuffle(){
        const shuffled = this.childValue.slice().sort(() => Math.random() - 0.5);

        this.childModel.forEach((model, index)=>{
            model.ChildValue = shuffled[index];
        })
    }
}


