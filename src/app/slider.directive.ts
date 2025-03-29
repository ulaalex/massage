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

        slider.addEventListener('swiped-left', showNextImage);
        slider.addEventListener('swiped-right', showPrevtImage);




        slider.addEventListener('touchstart', (event: { touches: any[]; }) => {
            // Предотвращаем стандартное поведение браузера
            slider.style.transition = "inherit";

            // Получаем первое касание (touch)
            let touch = event.touches[0];

            // Получаем начальные координаты элемента
            let startX = touch.clientX;

            const sliderWidth = slider.clientWidth;
            let ticking = false;
            // Добавляем обработчик события touchmove
            this.el.nativeElement.addEventListener('touchmove', moveElement, { passive: true });

            // Добавляем обработчик события touchend
            slider.addEventListener('touchend', () => {
                slider.style.transition = "";

                // Удаляем обработчики событий touchmove и touchend
                this.el.nativeElement.removeEventListener('touchmove', moveElement);
                const slideOffset = -slideIndex * 100;
                slider.style.transform = `translateX(${slideOffset}%)`;

            });

            // Функция для перемещения элемента
            function moveElement(event: { touches: any[]; }) {


               
                        // Вычисляем новые координаты элемента
                        let newX = event.touches[0].clientX - startX;
                        // Устанавливаем новые координаты элемента
                        const slideOffset = -slideIndex * 100 + newX * 100 / sliderWidth;

                        slider.style.transform = `translateX(${slideOffset}%)`;
                        ticking = false;
              


            }
        });

    }



    ngAfterViewInit() {
        this.createSlider(this.el.nativeElement);
    }


}