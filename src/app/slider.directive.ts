import { Directive, ElementRef, AfterViewInit, HostListener, } from "@angular/core";


@Directive({
    selector: '[slider]',
    standalone: true,
})
export class SliderDirective implements AfterViewInit {

    constructor(private el: ElementRef) { }


    createSlider(element: { querySelector: (arg0: string) => any; querySelectorAll: (arg0: string) => Iterable<unknown> | ArrayLike<unknown>; }) {

        const hostElement = this.el.nativeElement;
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




        hostElement.addEventListener('touchstart', (event: {
            timeStamp: any; touches: any[];
        }) => {
            // Предотвращаем стандартное поведение анимации
            slider.style.transition = "inherit";
            // Получаем первое касание (touch)
            const touch = event.touches[0];

            // Получаем начальные координаты касания
            const startX = touch.clientX;

            let newX = 0;
            let isMoveX = true;
            let firstMoveElement = true;
            const sliderWidth = slider.clientWidth;
            const touchStartTime = event.timeStamp;

            // Добавляем обработчик события touchmove
            hostElement.addEventListener('touchmove', moveElement);

            // Добавляем обработчик события touchend
            hostElement.addEventListener('touchend', touchEndElement);


            function touchEndElement(event: {
                timeStamp: any; touches: any[];
            }) {
                // Возвращаем стандартное поведение анимации
                slider.style.transition = "";

                const touchDuration = event.timeStamp - touchStartTime;

                if (Math.abs(newX) < 0.5 * sliderWidth) {
                    slide();
                } else if (Math.abs(newX) >= 0.5 * sliderWidth && newX > 0 && touchDuration > 501) {
                    showPrevtImage();
                } else if (Math.abs(newX) >= 0.5 * sliderWidth && newX < 0 && touchDuration > 501) {
                    showNextImage();
                }

                // Удаляем обработчики событий touchmove и touchend
                hostElement.removeEventListener('touchmove', moveElement);
                hostElement.removeEventListener('touchend', touchEndElement);
            }


            // Функция для перемещения элемента
            function moveElement(event: {
                preventDefault(): unknown; touches: any[];
            }) {
                newX = event.touches[0].clientX - startX;

                if (firstMoveElement && Math.abs(newX) < 5) {
                    isMoveX = false;
                }
                firstMoveElement = false;
                if (isMoveX) {
                    event.preventDefault();
                    const slideOffset = -slideIndex * 100 + newX * 100 / sliderWidth;
                    slider.style.transform = `translateX(${slideOffset}%)`;
                }
            }


        });

    }



    ngAfterViewInit() {
        this.createSlider(this.el.nativeElement);
    }


}