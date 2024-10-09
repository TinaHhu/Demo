import { Duck } from 'saga-duck';



export default class AppDuck extends Duck{
    get quickTypes() {
        // ts 中可以使用该写法
        // enum Types  {
        //     ADD = 1,
        // }
        return {
            ...super.quickTypes,
            // ...Types,
            ADD: 1
        }
    }

    get reducer() {
        const {types} = this;
        return {
            ...super.reducers,
            num: (state=0, action) => {
                switch(action.type){
                    case types.ADD: 
                        return state+1
                    default:
                        return state 
                }
            }

        }
    }


    get creators() {
        return {
            ...super.creators,
            add() {
                return {
                    type: types.ADD
                }
            }
        }
    }

    *saga() {

    }


}