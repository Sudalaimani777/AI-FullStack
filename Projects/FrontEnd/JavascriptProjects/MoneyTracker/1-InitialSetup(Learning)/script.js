//App Controller, Data Contorller, UI Controller :-

//Data Controller :-
const dataController = (() => {
    //Private :-
    const data = {
        items:[
            {id:0, task:"Code", money:2000},
            {id:1, task:"Eat", money:5000},
            {id:2, task:"Play", money:3000}
        ]
    }

    //To Access these above data we need to return :-
    return {
        getData: function(){
            return data;
        },
        getItem: function(){
            return this.getData().items
        }
    }
})();

//UI Controller :-
const uiController = (() => {
    return {
        showData: function(items){
            
        }
    }
})();

//APP Controller :-
const appController = (() => {
    return{
        appStart: function (){
            const items = dataController.getItem();
            if(items.length > 0){
                uiController.showData(items)
            }
        }
    }
})();

appController.appStart();