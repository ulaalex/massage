import {
    Component,
    Input,
    OnInit,
    DoCheck,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    HostListener
} from '@angular/core';




/// <reference path="widget.d.ts" />
import { Wid } from '../assets/widget';


@Component({
    selector: 'chat-mobile',
    templateUrl: './chat-desktop.component.html',
    styleUrls: ['./chat-desktop.component.css', './chat-desktop.component.adaptive.css'],
    providers: [Wid]

})
export class ChatDesktopComponent implements AfterContentInit {

    constructor(private chat: Wid) { 

    }
    
    ngAfterContentInit() {
        this.chat.workWidget();
    }


}