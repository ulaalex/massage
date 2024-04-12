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
    templateUrl: './chat-mobile.component.html',
    styleUrls: ['./chat-mobile.component.css', './chat-mobile.component.adaptive.css'],
    providers: [Wid]

})
export class ChatMobileComponent implements AfterContentInit {

    constructor(private chat: Wid) { 

    }
    
    ngAfterContentInit() {
        this.chat.workWidget();
    }


}