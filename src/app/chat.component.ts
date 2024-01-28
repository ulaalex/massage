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
    selector: 'chat-root',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css',],
    providers: [Wid]

})
export class ChatComponent implements AfterContentInit {

    constructor(private chat: Wid) { 

    }
    
    ngAfterContentInit() {
        this.chat.workWidget();
    }


}