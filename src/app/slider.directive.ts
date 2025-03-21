import { Directive, ElementRef, AfterViewInit, HostListener, } from "@angular/core";



/// <reference path="swiped-events.d.ts" />
import { Swipe } from './swiped-events';


@Directive({
    selector: '[slider]',
    standalone: true,
    providers: [Swipe]
})
export class SliderDirective implements AfterViewInit {

    constructor(private el: ElementRef, private swipe: Swipe) { }


    createSlider(element: { querySelector: (arg0: string) => any; querySelectorAll: (arg0: string) => Iterable<unknown> | ArrayLike<unknown>; }) {

        const slider = element.querySelector('.slider');
        const prevButton = element.querySelector('.prev-button');
        const nextButton = element.querySelector('.next-button');
        const slides = Array.from(element.querySelectorAll('img'));
        const slideCount = slides.length;
        let slideIndex = 0;

        function showPrevtImage() {
            slideIndex = (slideIndex - 1 + slideCount) % slideCount;
            slide();
        }

        function showNextImage() {
            slideIndex = (slideIndex + 1) % slideCount;
            slide();
        }

        function slide() {
            const slideOffset = -slideIndex * 100;
            slider.style.transform = `translateX(${slideOffset}%)`;
        }


        prevButton.addEventListener('click', showPrevtImage);
        nextButton.addEventListener('click', showNextImage);

        this.el.nativeElement.addEventListener('swiped-left', showPrevtImage);
        this.el.nativeElement.addEventListener('swiped-right', showNextImage);


    }


    ngAfterViewInit() {
        this.createSlider(this.el.nativeElement);
        this.swipe.swipe(window, document);
    }


}