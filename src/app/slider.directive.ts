import { Directive, ElementRef, AfterViewInit, HostListener, } from "@angular/core";




@Directive({
    selector: '[slider]',
    standalone: true,
})
export class SliderDirective implements AfterViewInit {

    constructor(private el: ElementRef) { }


    createSlider(element: { querySelector: (arg0: string) => any; querySelectorAll: (arg0: string) => Iterable<unknown> | ArrayLike<unknown>; }) {

        const slider = element.querySelector('.slider');
        const prevButton = element.querySelector('.prev-button');
        const nextButton = element.querySelector('.next-button');
        const slides = Array.from(element.querySelectorAll('img'));
        const slideCount = slides.length;
        let slideIndex = 0;

        let n = 0; //del

        function showPrevtImage() {
            slideIndex = (slideIndex - 1 + slideCount) % slideCount;
            slide();
        }

        function showNextImage() {
            slideIndex = (slideIndex + 1) % slideCount;
            slide();
        }

        function slide() {
            console.log(n++); //del
            const slideOffset = -slideIndex * 100;
            slider.style.transform = `translateX(${slideOffset}%)`;
        }


        prevButton.addEventListener('click', showPrevtImage);
        nextButton.addEventListener('click', showNextImage);

        slider.addEventListener('swiped-left', showNextImage);
        slider.addEventListener('swiped-right', showPrevtImage);

    }



    ngAfterViewInit() {
        this.createSlider(this.el.nativeElement);
    }


}