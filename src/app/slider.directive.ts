import { Directive, ElementRef, afterRender, } from "@angular/core";


@Directive({
    selector: '[slider]',
    standalone: true,
})
export class SliderDirective {

    constructor(private el: ElementRef) {
        afterRender(() => {
            this.createSlider(this.el.nativeElement);
        });
    }


    createSlider(element: { querySelector: (arg0: string) => any; querySelectorAll: (arg0: string) => Iterable<unknown> | ArrayLike<unknown>; }) {

        const slider = element.querySelector('.slider');
        const prevButton = element.querySelector('.prev-button');
        const nextButton = element.querySelector('.next-button');
        const slides = Array.from(element.querySelectorAll('img'));
        const slideCount = slides.length;
        let slideIndex = 0;

        prevButton.addEventListener('click', () => {
            slideIndex = (slideIndex - 1 + slideCount) % slideCount;
            slide();
        });

        nextButton.addEventListener('click', () => {
            slideIndex = (slideIndex + 1) % slideCount;
            slide();
        });

        function slide() {
            const imageWidth = slider.clientWidth;
            const slideOffset = -slideIndex * imageWidth;
            slider.style.transform = `translateX(${slideOffset}px)`;
        }

    }


}