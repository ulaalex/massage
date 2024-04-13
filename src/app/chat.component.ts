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


    maxMobileWidthPx = 600;
    
    isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
    }

    @ViewChild('chat', { read: ViewContainerRef })
    private viewRef!: ViewContainerRef;
    private componentRef!: ComponentRef<ChatMobileComponent>;

    showDynamicComponent(): void {
        console.log(window.navigator);
        if (!this.isMobile()) {
            this.viewRef.clear();
            this.componentRef = this.viewRef.createComponent(ChatMobileComponent);
        }
    }

    removeDynamicComponent(): void {
        this.viewRef.clear();
    }

    ngAfterViewInit() {
        this.showDynamicComponent();
    }

}