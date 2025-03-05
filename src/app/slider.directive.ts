import { Directive, ElementRef, AfterViewInit, } from "@angular/core";


@Directive({
    selector: '[slider]',
    standalone: true,
})
export class SliderDirective implements AfterViewInit {

    constructor(private el: ElementRef) { }


    createSlider(element: { querySelector: (arg0: string) => any; querySelectorAll: (arg0: string) => Iterable<unknown> | ArrayLike<unknown>; }) {

        const slider = element.querySelector('.slider');
        const slideDiv = element.querySelector('.slide');
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

        if (slideDiv) {
            const ro = new ResizeObserver(entries => {
                for (let entry of entries) {
                    if (entry.target === slideDiv) {
                        slide();
                    }
                }
            });
            ro.observe(slideDiv);
        }

        function slide() {
            const imageWidth = slider.clientWidth;
            const slideOffset = -slideIndex * imageWidth;
            slider.style.transform = `translateX(${slideOffset}px)`;
        }

    }

    
    ngAfterViewInit() {
        this.createSlider(this.el.nativeElement);
    }


}