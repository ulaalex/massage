import {
    Component,
    ViewChild,
    ViewContainerRef,
    AfterViewInit

} from '@angular/core';

import { ChatDesktopComponent } from './chat-desktop.component';
import { ChatMobileComponent } from './chat-mobile.component';


@Component({
    selector: 'chat-root',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css', './chat.component.adaptive.css'],
    providers: []

})
export class ChatComponent implements AfterViewInit {


    isMobile = () => {
        return true;
        //return /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
    }

    @ViewChild('chat', { read: ViewContainerRef })
    private viewRef!: ViewContainerRef;

    showDynamicComponent(): void {
        this.viewRef.clear();
        if (!this.isMobile()) {
            this.viewRef.createComponent(ChatDesktopComponent);
        } else {
            this.viewRef.createComponent(ChatMobileComponent);

        }
    }

    ngAfterViewInit() {
        this.showDynamicComponent();
    }

}