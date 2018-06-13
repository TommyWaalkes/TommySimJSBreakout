"use strict";
{
    let person = {
        controller: function(){
            let vm = this;
            vm.people = [{name: "Tommy", homeCity:"Grand Rapids"},
                         {name: "Roger", homeCity:"Grand Rapids"}];
        },
        template: `<div ng-repeat="person in $ctrl.people"> 
        <h3>{{person.name}}</h3>
        <p>{{person.homeCity}}</p>
        <button ng-click="person.work()" > Work!</button>
        </div>`
    }

    angular
        .module("app")
        .component("person", person);
}