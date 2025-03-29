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

        // slider.addEventListener("touchmove",);
        // slider.addEventListener('touchend',);


        this.el.nativeElement.addEventListener('touchstart',  (event: { preventDefault: () => void; touches: any[]; }) => {
            // Предотвращаем стандартное поведение браузера
            

            // Получаем первое касание (touch)
            let touch = event.touches[0];

            // Получаем начальные координаты элемента
            let startX = touch.clientX;

            // Добавляем обработчик события touchmove
            this.el.nativeElement.addEventListener('touchmove', moveElement);

            // Добавляем обработчик события touchend
            this.el.nativeElement.addEventListener('touchend', function () {
                // Удаляем обработчики событий touchmove и touchend
                slider.removeEventListener('touchmove', moveElement);
                const slideOffset = -slideIndex * 100;
                slider.style.transform = `translateX(${slideOffset}%)`;
               
            });

            // Функция для перемещения элемента
            function moveElement(event: { touches: any[]; }) {
                let touch = event.touches[0];

                // Вычисляем новые координаты элемента
                let newX = touch.clientX - startX;

                // Устанавливаем новые координаты элемента
                const slideOffset = -slideIndex * 100 + newX * 100 / slider.clientWidth;
                console.log(slideOffset);
                slider.style.transform = `translateX(${slideOffset}%)`;
            }
        });

    }



    ngAfterViewInit() {
        this.createSlider(this.el.nativeElement);
    }


}