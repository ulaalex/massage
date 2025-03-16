import { Component, HostListener, OnInit, Renderer2, ViewChild, ElementRef, afterRender } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";


import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";


import { SliderDirective } from './slider.directive';


export class Content {
    constructor(
        public id: string,
        public media_type: string,
        public media_url: string,
        public timestamp: string,
        public permalink: string,
        public caption?: string,
        public children?: {
            data:
            {
                media_url: string,
                permalink: string,
                id: string,
            }[]
            ;
        },
        public thumbnail_url?: string,
    ) { }
}




@Component({
    selector: 'app-service-articles',
    standalone: true,
    templateUrl: './service-articles.component.html',
    styleUrls: ['./service-articles.component.css', './service-articles.component.adaptive.css'],
    imports: [NgFor, NgIf, SliderDirective, HttpClientModule,],
    providers: [HttpService]
})

export class ServiceArticlesComponent implements OnInit {

    constructor(
        private httpService: HttpService,
        private renderer: Renderer2
    ) { }

    scrollHeight: number = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    @HostListener('document:scroll', ['$event'])
    getScale() {
        let x;
        if (window.scrollY < this.scrollHeight) {
            x = 1 + 0.0001 * window.scrollY;
            return `scale(${x})`;
        }
        return `scale(${x})`;
    }



    stateArticle: boolean = false;
    dataArticle!: Content;
    bodyElement!: HTMLElement;
    windowOffsetTop!: number;

    openArticle(dataArticle: Content) {


        this.windowOffsetTop = window.scrollY;
        console.log(this.windowOffsetTop);
        this.renderer.addClass(this.bodyElement, 'hidden_scroll_body');
        this.renderer.setStyle(this.bodyElement, 'top', `${-this.windowOffsetTop}px`);


        this.stateArticle = true;
        this.dataArticle = dataArticle;
    }

    closeArticle() {
      
        this.stateArticle = false;
       
        this.renderer.removeClass(this.bodyElement, 'hidden_scroll_body');
        this.renderer.setStyle(this.bodyElement, 'top', '');
        window.scrollBy({
            top: this.windowOffsetTop,
            behavior: "smooth",
        });
        //document.documentElement.scrollTop = this.windowOffsetTop;
        //  this.renderer.setProperty(document.documentElement, 'scrollTop', this.windowOffsetTop);


    }



    contentData: Content[] = [
        {
            id: "18017219309441773",
            media_type: "CAROUSEL_ALBUM",
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471767104_939564551646361_3165368067600805189_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=rKmwREmf8VUQ7kNvgF__1Ql&_nc_oc=AdiaeE6XfGqNXJ9bwgncMJ1M_hARkZjYYKPlYzcxEQheyUvUS4qSPtPpnkujaQQtWz0&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYDJGLqUH3-B5-ep7LgfOBgSQT0HFaachZo4_WtbGU2XQQ&oe=67C68C3F",
            caption: "Всех с Новым 2025 годом! 🎉❄️🎁🎄\nСначала он попытался пересадить волосы в Минске или Москве, однако предположительная цена в $5 тыс. его не устроила. Продолжив изучать тему, парень узнал, что в Турции настоящий бум медицинского туризма, и на пересадку волос в местные клиники прилетают мужчины из многих европейских стран. К тому времени на пересадку в Стамбул уже ездили приятели Александра, которые остались максимально довольны. Ценник в $2,5 тыс. хоть и показался ему слегка завышенным, но в итоге устроил.«Определяющим фактором при выборе медцентра был именно опыт знакомых.Я связался с менеджером, он, как мне показалось, озвучил все нюансы, и в декабре прошлого года я полетел на операцию.Это было похоже на отдых по системе „все включено“, только вместо пляжа ты по специальному туру отправлялся на операцию.Меня встретили в аэропорту, выделили переводчика, заселили в хороший отель, дали витамины и остальные необходимые вещи.Пациентов там буквально везде водят за ручку.Главное, чтобы клиенту было максимально комфортно», — вспоминал Александр в интервью Onlíner.",
            timestamp: "2025-01-01T10:36:40+0000",
            permalink: "https://www.instagram.com/p/DER6SOaod3C/",
            children: {
                data: [
                    {
                        media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471767104_939564551646361_3165368067600805189_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=rKmwREmf8VUQ7kNvgF__1Ql&_nc_oc=AdiaeE6XfGqNXJ9bwgncMJ1M_hARkZjYYKPlYzcxEQheyUvUS4qSPtPpnkujaQQtWz0&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYDJGLqUH3-B5-ep7LgfOBgSQT0HFaachZo4_WtbGU2XQQ&oe=67C68C3F",
                        permalink: "https://www.instagram.com/p/DER6SD1IUr6/",
                        id: "18267407797249450"
                    },
                    {
                        media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471957690_446651125184141_3422070135797629449_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=USACKzrQl-UQ7kNvgFjCpX3&_nc_oc=AdhkAxIpcdK_RW9T-ZPCFMraQYA07R96z4ckrnSYZjkD9oBaSFKMVikiyBLlrGRWSrE&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYAr6a_iMcuCrUehBUpCASGYrkMfri_EnJac7CIui87XhA&oe=67C69E20",
                        permalink: "https://www.instagram.com/p/DER6SDdo46Z/",
                        id: "17888844132170249"
                    },
                    {
                        media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/472062886_1882353092302553_2566240432190132665_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=1MfXI6TlPekQ7kNvgFeTWe_&_nc_oc=Adhgig2LPrBxJuysvqtlyCQb9fkjGVEu_mY_aOGmQJk2OZBexnJyIAl8ynSfE5lQvw8&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYB2k2Tp-ewUVtJtbVd5UyzCohzayqssQJ_OyVKMkmHRjA&oe=67C68F30",
                        permalink: "https://www.instagram.com/p/DER6SDeI3_w/",
                        id: "17956964465852489"
                    },
                    {
                        media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471994635_509868014808963_8092215235671953633_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=VObBl6tpr4QQ7kNvgEJnck3&_nc_oc=Adik569JRt0SQ1WPSbDbSxzw1iJXccrQP6plKK0FBKo4OCMC7c6khDC4Cprpd5Ef_xo&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYC_Fq-mAtxk6M5-Q24wUKCG300mWod0ZCEZxDy-tBSjxw&oe=67C68E9E",
                        permalink: "https://www.instagram.com/p/DER6SDdIcsd/",
                        id: "18062650081803966"
                    }
                ]
            }
        },
        {
            id: "17916673886840626",
            media_type: "IMAGE",
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/448189335_476537988068706_2209191964052686878_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=YWzNBq6zsLkQ7kNvgHPnG_f&_nc_oc=AdjRBFoGP0kyYOS6a6MLI1YC9v9uciyg9ZdhURy0-ysf-aCALTHVpVESr_Ax3WRCMKc&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYCFxwA_xCkF14s44u6s01ply9Y6gX_dKUITsMx0WK5uIQ&oe=67C6747D",
            caption: "Happy birthday @ulanovicholga 🥳🎉🍾\n.\n.\n#birthday #family #жена #happy #nikon #photo #photography #семья #love",
            timestamp: "2024-06-09T20:39:00+0000",
            permalink: "https://www.instagram.com/p/C8AjdnFI2oO/"
        },
        {
            id: "18019882112038289",
            media_type: "IMAGE",
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/444746290_465050319250052_7335869372692454760_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=uAm_NeaVNb0Q7kNvgGu-8zb&_nc_oc=AdifanAf5die4iJYDmzwiA1SIa24WkEthlOlB_1yKQ4vqvXq5iI3BbFrg_wdm73FPfk&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBLBTV98TyzbYDXJ0LgnV72A-UcsehvNM2eYqHUYeyn6w&oe=67C68585",
            caption: "🎉❄️🎁🎄\nСначала он попытался пересадить волосы в Минске или Москве, однако предположительная цена в $5 тыс. его не устроила. Продолжив изучать тему, парень узнал, что в Турции настоящий бум медицинского туризма, и на пересадку волос в местные клиники прилетают мужчины из многих европейских стран. К тому времени на пересадку в Стамбул уже ездили приятели Александра, которые остались максимально довольны. Ценник в $2,5 тыс. хоть и показался ему слегка завышенным, но в итоге устроил.«Определяющим фактором при выборе медцентра был именно опыт знакомых.Я связался с менеджером, он, как мне показалось, озвучил все нюансы, и в декабре прошлого года я полетел на операцию.Это было похоже на отдых по системе „все включено“, только вместо пляжа ты по специальному туру отправлялся на операцию.Меня встретили в аэропорту, выделили переводчика, заселили в хороший отель, дали витамины и остальные необходимые вещи.Пациентов там буквально везде водят за ручку.Главное, чтобы клиенту было максимально комфортно», — вспоминал Александр в интервью Onlíner.",
            timestamp: "2024-05-19T18:24:56+0000",
            permalink: "https://www.instagram.com/p/C7KPbTaIf1D/"
        },
        {
            id: "17982472802368803",
            media_type: "IMAGE",
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/405761583_701251658398857_6556893009137274340_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=Kzyooa4_E0IQ7kNvgFXD8pG&_nc_oc=Adhr7XijZT-OITjeeOpqZf36HWmJ3i_HJ5fUkSd-9ekP0Yp7hMxQeqtGnX8zIKmHvTU&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBBUUMu8_mMYYV4SppDc2uqllUF7EXpSRnAt19V6TEp-w&oe=67C68E32",
            caption: "❄️☃️🌨️\n.\n.\n.\n#зима #снег #прогулка #winter #snow #nikon #d3500 #photography #photo #child #family",
            timestamp: "2023-12-03T15:29:54+0000",
            permalink: "https://www.instagram.com/p/C0ZV2aOIili/"
        },
        {
            id: "17956078766572735",
            media_type: "CAROUSEL_ALBUM",
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/399921072_1224216945201360_8678906193340221156_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=VvhJC50kQ9EQ7kNvgE8pa3-&_nc_oc=AdhIJIL_9A1sVYLUseiwkamjc2wBOKmtBi2ZrmkoIoLlkezoK3vtGg8X9t5JulgWfUc&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBJ2zfuyVdxIhstPXSU05XVvDh5fnNVr_CWXHTu3GVYxQ&oe=67C6700A",
            caption: "💐🪻🌷🌺🌹\n.\n.\n.\n.\n#осень #цветы #твойбукетгродно #др #краски #счастье #радость #flowers #happy #birthday #forwife #forwifebirthday #nikon #d3500 #photo #photography",
            timestamp: "2023-11-06T17:52:28+0000",
            permalink: "https://www.instagram.com/p/CzUEs74I_tf/",
            children: {
                data: [
                    {
                        media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/399921072_1224216945201360_8678906193340221156_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=VvhJC50kQ9EQ7kNvgE8pa3-&_nc_oc=AdhIJIL_9A1sVYLUseiwkamjc2wBOKmtBi2ZrmkoIoLlkezoK3vtGg8X9t5JulgWfUc&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBJ2zfuyVdxIhstPXSU05XVvDh5fnNVr_CWXHTu3GVYxQ&oe=67C6700A",
                        permalink: "https://www.instagram.com/p/CzUEs2QIj7w/",
                        id: "18008985572078892"
                    },
                    {
                        media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/399033812_888143212870294_6932401434959038064_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=MxMgLvG-u4YQ7kNvgG7VV0Q&_nc_oc=Adi_MPHo8Khpi8B4yaC08d9O9humBHc8-G7gbYvimW1DMpvg5CTqOoy1bu1UQ_Aip8A&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYDAzckbO6J_L3Fysk8s3MOXHVYu5rYd7cKrNqUDMiYmJw&oe=67C676A4",
                        permalink: "https://www.instagram.com/p/CzUEs2QIRhp/",
                        id: "18008921732056081"
                    }
                ]
            }
        },
        {
            id: "18010086850844146",
            media_type: "IMAGE",
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/396734402_3590733904579345_4535457144012046396_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=enlRiv0v_7MQ7kNvgEZj01y&_nc_oc=Adh82TkSPGiV-X2FGLW7JGZjsACI0q88SMR-s9wf7XdNLFIRloNlriqPnRU9GoCk3EY&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYDIbwrFz2mylJ5tvk47uA80wMrQt714B0er35ZEOEhz8Q&oe=67C6A0D9",
            caption: "С крестницей😁😉",
            timestamp: "2023-10-29T20:25:29+0000",
            permalink: "https://www.instagram.com/p/Cy_v2sEoDkt/"
        },
        {
            id: "18203019433276645",
            media_type: "CAROUSEL_ALBUM",
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/394302158_552158840409900_3324835255694903806_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=a6fZVUYwGsIQ7kNvgF7TXb3&_nc_oc=AdgFFeI82TrwOOpfnr4WCJ2z9AvPIBeA-7iLWhzv8Fa4Fv_8u0bPX8FQz_sKb-ykVbQ&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYCT8nsokJ_H2cJf8h8x3nWhZEle01Iw55qZL56GK9IEPA&oe=67C673BF",
            caption: "Арсений 😉\n.\n.\n#лето #тепло #фото #никон #photo #photography #summer #nikon #children #child #love #beautiful",
            timestamp: "2023-10-23T21:31:18+0000",
            permalink: "https://www.instagram.com/p/CywanaUINy_/",
            children: {
                data: [
                    {
                        media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/394302158_552158840409900_3324835255694903806_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=a6fZVUYwGsIQ7kNvgF7TXb3&_nc_oc=AdgFFeI82TrwOOpfnr4WCJ2z9AvPIBeA-7iLWhzv8Fa4Fv_8u0bPX8FQz_sKb-ykVbQ&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYCT8nsokJ_H2cJf8h8x3nWhZEle01Iw55qZL56GK9IEPA&oe=67C673BF",
                        permalink: "https://www.instagram.com/p/CywanSTICon/",
                        id: "17885174036947433"
                    },
                    {
                        media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/394294516_702434521803543_4491712259966206837_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=4I65tICQDaMQ7kNvgGHqknl&_nc_oc=AdgBas_cCq9pTFOkzW3bTEZlKd0sgO3iDQVKuOQT41072qNWjflZGDctzVitJA37Woc&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBwHWgRTlr9_MQwqlC_5Hv8MXK8hSkUuA2llZfjAOkMbg&oe=67C66C85",
                        permalink: "https://www.instagram.com/p/CywanSToIRo/",
                        id: "18244402537229936"
                    }
                ]
            }
        },
        {
            id: "18029081788565662",
            media_type: "IMAGE",
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/385630732_284574787769784_7609287346603913349_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=47gVc9kSIt8Q7kNvgELoI-6&_nc_oc=AdipSmWUjs5Qp4UktrGsvh7uUOp5ln28edPfZVPl04xwMcrSoa4yxtSgRFQTcvZu3Qk&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBw6Fv5QxsOKoKb1u41VFD8yVtgg3QiWLDKhjfOoO8gFA&oe=67C67872",
            caption: "Осень🍂\n.\n.\n.\n.\n#осень #фото #тепло #парк #прогулка #nikon #photo #photography #d3500 #nature",
            timestamp: "2023-10-03T18:09:07+0000",
            permalink: "https://www.instagram.com/p/Cx8jlIjo9tO/"
        },
        {
            id: "18370840513066700",
            media_type: "IMAGE",
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/375488449_1483932322425760_6325126173978386399_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=Mzd04fpkQokQ7kNvgH2kNxe&_nc_oc=Adh3NweBjJ_a5HQhIGR6vt407Arf-jE56Xi9BR3NZzL2eUnA6SXPSCTIgX2zv68tuag&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYCnF4TiEZOAVgy5HJtvkEXhijoMT8mFH-FCr7KIt908tA&oe=67C67DBF",
            caption: "📸🌞👍😉💥",
            timestamp: "2023-09-07T20:25:31+0000",
            permalink: "https://www.instagram.com/p/Cw52hclogJl/"
        },
        {
            id: "18078460315393540",
            media_type: "CAROUSEL_ALBUM",
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/376061161_201866939568604_781541971237066820_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=6jrUMrCyzKcQ7kNvgEsrGOZ&_nc_oc=Adi87Vdf6y7f0eHoni6g0PFn89WL_sRgzlewxBtv4IMv2_LHNgCdWhn71gOK8NW6A30&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBirlzXuUzMcknSNVfgvkwC1m5yhl9VIqG6A8Db2epu7g&oe=67C68316",
            caption: "🎈🥰👍📸🌞.\n.\n.\n#фото #дети #детицветыжизни #счастье #прогулка #парк #photo #photography #grodno #nikon #d3500 #50mm #autumn #child #funny",
            timestamp: "2023-09-07T20:18:50+0000",
            permalink: "https://www.instagram.com/p/Cw51wZ1IvBv/",
            children: {
                data: [
                    {
                        media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/376061161_201866939568604_781541971237066820_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=6jrUMrCyzKcQ7kNvgEsrGOZ&_nc_oc=Adi87Vdf6y7f0eHoni6g0PFn89WL_sRgzlewxBtv4IMv2_LHNgCdWhn71gOK8NW6A30&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBirlzXuUzMcknSNVfgvkwC1m5yhl9VIqG6A8Db2epu7g&oe=67C68316",
                        permalink: "https://www.instagram.com/p/Cw51wSWoc8R/",
                        id: "17972633618573308"
                    },
                    {
                        media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/375531880_266332076236954_2349669412467320925_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=xkt8EzHonzIQ7kNvgHH4HfB&_nc_oc=Adhbq2EGDX9MrQUb6j6QpjfaIsKkyWTXjmr4ezYHZZqUWQppSKVGjduzE1sS9Zqd9BA&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBrFzrZmns2tNpSoq-0ImrZFgLaUGrA-tgPSPcXn5zysw&oe=67C68BA9",
                        permalink: "https://www.instagram.com/p/Cw51wSWoBdb/",
                        id: "17893793723870989"
                    }
                ]
            }
        },
        {
            id: "18380616964025549",
            media_type: "CAROUSEL_ALBUM",
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/371000304_334057882381165_8156869153846839759_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=Ez6h2dW6XukQ7kNvgGPzFWo&_nc_oc=AdhMNyD5HGdqebrIhXv6TySG8lmMToP2o1lPJd87cb3wN-FERqb19_xFRjDhTPDZ3w8&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYAm0qxHMpKL--9Jf-ZZWs_Acziposisdkc7WTUSkgBEwg&oe=67C680BC",
            caption: "Маленькие гимнасты🤸\n.\n.\n.\n#дети #деревня #фото #гимнастика #счастье #лето #краски #гудевичи #фитнес #деревнястайл #убабушки #photography #photo #nikon #d3500 #50mmf18 #funny #village #home #child #children #holiday #beautiful #august",
            timestamp: "2023-08-26T19:43:50+0000",
            permalink: "https://www.instagram.com/p/Cwa4NoCIbeZ/",
            children: {
                data: [
                    {
                        media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/371000304_334057882381165_8156869153846839759_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=Ez6h2dW6XukQ7kNvgGPzFWo&_nc_oc=AdhMNyD5HGdqebrIhXv6TySG8lmMToP2o1lPJd87cb3wN-FERqb19_xFRjDhTPDZ3w8&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYAm0qxHMpKL--9Jf-ZZWs_Acziposisdkc7WTUSkgBEwg&oe=67C680BC",
                        permalink: "https://www.instagram.com/p/Cwa4Ne6I96V/",
                        id: "17997076241306466"
                    },
                    {
                        media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/370522427_176164512163142_2319196231979727992_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=IL_IPe7mV9wQ7kNvgGJESZ2&_nc_oc=Adhb0Qa5fP16H_2DIAkiP0bBmxBgcrCgEY_Z7AKcUGL5iUQLER6ylFpAgKa2r3l6blA&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYDmUN6r-BX-5r5ZVxsjaLH9t0Knrp1RtvjalsD65TmiRQ&oe=67C68583",
                        permalink: "https://www.instagram.com/p/Cwa4Ne6IGEt/",
                        id: "18024771268623320"
                    },
                    {
                        media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/370575335_1118446939560186_987285632120583100_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=d7dYI8DRR1AQ7kNvgGHQ7yJ&_nc_oc=AdgDL3ykU7fCm0qWHXJMJk4BoWhGWzOj465QOMUVYAf15sBx9JQ9dGbzytgIvR1-TEI&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYCFtH0HQG3J9fIRaaFXc7mCKnI_lgzPu0mT1_SSCoMJog&oe=67C66F31",
                        permalink: "https://www.instagram.com/p/Cwa4Ne6I2qp/",
                        id: "18022845562578646"
                    },
                    {
                        media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/371169678_1049790896390813_145970962376334497_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=5h1_txSsPb4Q7kNvgHrTPWG&_nc_oc=Adg7OkEAQGmK_rDc6qAG1kEaW0IwAqYZHCKPOkyfIsqpUUxNQy7dMWXjDUqnabB-kcE&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYA4BMyMue9SURquSkZXPVzXvq9k5vzKtX5l4_LNXuK9fw&oe=67C690A4",
                        permalink: "https://www.instagram.com/p/Cwa4Ne8oE1I/",
                        id: "17933094815724091"
                    }
                ]
            }
        },
        {
            id: "17984563487197621",
            media_type: "VIDEO",
            media_url: "https://scontent-waw2-1.cdninstagram.com/o1/v/t16/f2/m86/AQNNp3dErqJQYHR7gUeAFOFQdW866w7Yonr3nJZXzWz-kL--2K5t3VHa_824q-R7LMXe9hN_usp2DAJ1kaiKlA-3763nDjV7mMqdwJM.mp4?efg=eyJ4cHZfYXNzZXRfaWQiOjgzMjI2MjQ0NTczMjg3MSwidmVuY29kZV90YWciOiJ4cHZfcHJvZ3Jlc3NpdmUuSU5TVEFHUkFNLkNMSVBTLkMzLjQzMi5kYXNoX2Jhc2VsaW5lXzNfdjEifQ&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_cat=110&vs=2d2d0725bab1855d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xMjQ3RENFNjEyRTkxMTY5RjkxQzM2N0NGQTMwMUQ5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBZmtpeHZqZWwwamd3UURBRHVKa3hpTmVhbE9icGt3QUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJo7QgLeGvPoCFQIoAkMzLBdAZ0LAgxJumBgSZGFzaF9iYXNlbGluZV8zX3YxEQB1_gcA&ccb=9-4&oh=00_AYBvJiuNuDRINMyEJaJOOpRyRX4IYznm5pE-ELDnNfBgHQ&oe=67C28EB2&_nc_sid=1d576d",
            timestamp: "2023-07-22T23:06:23+0000",
            thumbnail_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/361979906_311839367918646_6949158993380303406_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=3sI0x1l9sGcQ7kNvgFEDsKH&_nc_oc=AdjKG4bSL8utwr_c8vsTTJy3uheiWyZ7VwmfvYyFdqhhARtpG-8uOEntZCwcGFNLOfk&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBH0WNeel4TUZxMH7xC9NtfLcCOogI551Gl1vUhPkujoA&oe=67C67184",
            permalink: "https://www.instagram.com/reel/CvBHi5fIR07/"
        },
        {
            id: "17894686862745252",
            media_type: "IMAGE",
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345269088_771107604386232_2883800298046444035_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=0KBh1voB3CYQ7kNvgGW87ZF&_nc_oc=Adhemd3Bf36_LeqZvLZNco1jP93q8FodR5D9-iQEvx4o_YjFN1_1oTYpoxfM5z1fCR8&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYA68Hk0N9yzTQ6zUUf2ge48jffSxEMf6I0FBr0r9jsYeQ&oe=67C68F4D",
            caption: "Заборье. Дорога на малую родину.\n.\n.\n.\n#nikon #photo #photography #nature #may #road #green #фото #заборье #лес #малаяродина #зелень #весна",
            timestamp: "2023-05-07T21:37:42+0000",
            permalink: "https://www.instagram.com/p/Cr9RAaaoVD2/"
        },
        {
            id: "17994812434757814",
            media_type: "CAROUSEL_ALBUM",
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345195907_621416219581206_8046304521424312682_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=1zcO8-a3AeQQ7kNvgEu11t9&_nc_oc=AdiWUXaTBfujgQN4h-lO-EXlMtajNKGUoEPhfep0R7EX9VwfqHKRmTfYRG9R1u1wSuI&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBeaj_B-JZXp2lSNoFFLVFjHVzjs0vLe0PueqNhRmMUig&oe=67C6886E",
            caption: "☀️🪻📸🌳\n.\n.\n.\n#photo #photography #nikon #capture #captureone #nature #holiday #may #instagram #travelphotography #лес #фото #природа #деревня #дорога #малаяродина #я",
            timestamp: "2023-05-07T21:33:19+0000",
            permalink: "https://www.instagram.com/p/Cr9QgUfoa_X/",
            children: {
                data: [
                    {
                        media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345195907_621416219581206_8046304521424312682_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=1zcO8-a3AeQQ7kNvgEu11t9&_nc_oc=AdiWUXaTBfujgQN4h-lO-EXlMtajNKGUoEPhfep0R7EX9VwfqHKRmTfYRG9R1u1wSuI&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBeaj_B-JZXp2lSNoFFLVFjHVzjs0vLe0PueqNhRmMUig&oe=67C6886E",
                        permalink: "https://www.instagram.com/p/Cr9QgOvItt7/",
                        id: "17895871625740861"
                    },
                    {
                        media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345469424_1181466189182787_7226357818857874287_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=MtM2mRScXO0Q7kNvgHwAj0F&_nc_oc=AdjU2MVd1U_3oi65Sk87UGNcXcl3IVED0XGTtuCoWwQub9S2TGxxe3YtVNHup4jrw8E&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYAppWNvpeiwNOsRfY-79mfY00-kpZp3L1cG8MWnDXx8cQ&oe=67C6975D",
                        permalink: "https://www.instagram.com/p/Cr9QgOvos4D/",
                        id: "18033975964488513"
                    }
                ]
            }
        },
        {
            id: "18206474116221708",
            media_type: "IMAGE",
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/344791177_6534940506537361_683719268025998279_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=vRfiI9-c79QQ7kNvgG8Poxk&_nc_oc=AdiHYqCPMf8Bg3cyjPqstFI4xnwf614lw9Yxm2L4HyCU1kEcAOspTbO_DsaMKYlPVzo&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=AFMh5QUN0CFKi60egq9vKzx&oh=00_AYBD2qAyN63vP2rCmxpu5o637aCNec7YSlGN-53k4EPB7g&oe=67C677C4",
            caption: "Луна 🌒\n.\n.\n.\n#mobilephotography  #photo #moon #photography #photo #night #nightphotography #beautiful #луна #вечер",
            timestamp: "2023-05-05T21:33:30+0000",
            permalink: "https://www.instagram.com/p/Cr4G74aIVg8/"
        }
    ];

    ngOnInit() {
        this.bodyElement = document.body;

        // this.httpService.getDataInstagram()
        // .subscribe({
        //   next: (data: any) => {
        //     this.contentData = data;
        //   }
        // });

    }

}