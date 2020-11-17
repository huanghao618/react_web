import Todo from "./moudels/todo"
import CnodeStore from "./moudels/cnode"

class Store{
    constructor(){
        this.todo=new Todo()
        this.cnode=new CnodeStore()
    }
}

// 抛出Store类的实例
export default new Store() 