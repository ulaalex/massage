import {
    Component,
    ViewChild,
    ViewContainerRef,
    ComponentRef,
    AfterViewInit

} from '@angular/core';

import { ChatMobileComponent } from './chat-mobile.component';



@Component({
    selector: 'chat-root',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css', './chat.component.adaptive.css'],
    providers: []

})
export class ChatComponent implements AfterViewInit {

    @ViewChild('chat', { read: ViewContainerRef })
    private viewRef!: ViewContainerRef;
    private componentRef!: ComponentRef<ChatMobileComponent>;

    showDynamicComponent(): void {
        this.viewRef.clear();
        this.componentRef = this.viewRef.createComponent(ChatMobileComponent);
    }

    removeDynamicComponent(): void {
        this.viewRef.clear();
    }

    ngAfterViewInit() {
        this.showDynamicComponent();
    }

}