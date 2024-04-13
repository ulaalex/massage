import {
    Component,
    ViewChild,
    ViewContainerRef,
    ComponentRef,
    AfterViewInit

} from '@angular/core';

import { ChatDesktopComponent } from './chat-desktop.component';



@Component({
    selector: 'chat-root',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css', './chat.component.adaptive.css'],
    providers: []

})
export class ChatComponent implements AfterViewInit {


    isMobile = () => {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
    }

    @ViewChild('chat', { read: ViewContainerRef })
    private viewRef!: ViewContainerRef;

    showDynamicComponent(): void {
        this.viewRef.clear();
        if (!this.isMobile()) {
            this.viewRef.createComponent(ChatDesktopComponent);
        }
    }


    ngAfterViewInit() {
        this.showDynamicComponent();
    }

}