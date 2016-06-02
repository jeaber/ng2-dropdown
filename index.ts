import { Component, OnInit, ElementRef } from 'angular2/core';

@Component({
    selector: '[dropdown]',
    styles: [require('./dropdown.styl').toString()],
    template: `<ng-content></ng-content>`
})
export class Dropdown implements OnInit {
    constructor(public _elem: ElementRef) {

        function returnHost() {
            return this._elem.nativeElement;
        }
    }
    ngOnInit() {
        var host = this._elem.nativeElement;
        var btn = host.children[0];
        var menu = host.children[1];

        console.log(this._elem.nativeElement);
        host.className = 'dropdown';
        if (btn)
            btn.className = 'dropdown-btn';
        if (menu)
            menu.className = 'dropdown-menu';
    }
}