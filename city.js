"use strict";
{
    let city = {
        controller: function(){
            let vm = this;
            vm.name = "Grand Rapids";
            vm.food = 10;
            vm.water = 10;
            vm.waterSource = 0; 
            vm.houses = 1;
            console.log("hi");
        },
        template: `<div> 
        <h1>City Name: {{$ctrl.name}}</h1>
        <h1> Current Food: {{$ctrl.food}}</h1>
        <h1>Gallons of Water: {{$ctrl.water}}</h1>
        <h1>Wells: {{$ctrl.waterSource}}</h1>
        <h1>Houses: {{$ctrl.houses}}</h1>

        
        <div>`
    };

    angular
        .module("app")
        .component("city", city);
}