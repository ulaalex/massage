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
    elementTarget!: HTMLElement;


    openArticle(dataArticle: Content, e: Event) {
        this.elementTarget = e.target as HTMLElement;
        this.windowOffsetTop = window.scrollY;

        this.renderer.addClass(this.bodyElement, 'hidden_scroll_body');
        this.renderer.setStyle(this.bodyElement, 'top', `${-this.windowOffsetTop}px`);

        this.stateArticle = true;
        this.dataArticle = dataArticle;
    }

    closeArticle() {
        this.stateArticle = false;
        this.renderer.removeClass(this.bodyElement, 'hidden_scroll_body');
        this.renderer.setStyle(this.bodyElement, 'top', '');
        this.elementTarget.scrollIntoView({
            block: "center",
            behavior: "instant"
        });
    }



    contentData = [

        {
          id: "18017219309441773",
          media_type: "CAROUSEL_ALBUM",
          media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471767104_939564551646361_3165368067600805189_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=zDhpkXs1WHwQ7kNvgHmo-am&_nc_oc=Adnl1yoyfAW9fVLOGT6PKJ5vT5M88WZ9c1igdLcrz-BG4ZaT_IdZ2_U6ar40wymr8ss&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYFNWKVZmXxWTRp-vIX1kOdFAEGPQ5ToGYueyUI-faBTJA&oe=67E38D3F",
          caption: "Всех с Новым 2025 годом! 🎉❄️🎁🎄",
          timestamp: "2025-01-01T10:36:40+0000",
          permalink: "https://www.instagram.com/p/DER6SOaod3C/",
          children: {
            data: [
              {
                media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471767104_939564551646361_3165368067600805189_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=zDhpkXs1WHwQ7kNvgHmo-am&_nc_oc=Adnl1yoyfAW9fVLOGT6PKJ5vT5M88WZ9c1igdLcrz-BG4ZaT_IdZ2_U6ar40wymr8ss&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYFNWKVZmXxWTRp-vIX1kOdFAEGPQ5ToGYueyUI-faBTJA&oe=67E38D3F",
                permalink: "https://www.instagram.com/p/DER6SD1IUr6/",
                id: "18267407797249450"
              },
              {
                media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471957690_446651125184141_3422070135797629449_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=0bBjzxOxz1kQ7kNvgFTxXRk&_nc_oc=Adm78cw6UnxG1nUAukLz7POhrwSNTvMGqtrFlEX-PCo_gqMshGoNHNoYukAcRhTHd-o&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYFG1kyethcMfJWVvNKdbBf3_FvbqyHr_jDLAvuDBe4ktw&oe=67E39F20",
                permalink: "https://www.instagram.com/p/DER6SDdo46Z/",
                id: "17888844132170249"
              },
              {
                media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/472062886_1882353092302553_2566240432190132665_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=RiGGDpVTeUoQ7kNvgFucelD&_nc_oc=AdnrI7WOBw2HU_7crra0spOfoccf6eZD6ROdwWq2BL2FIyMoW8gPVkZ3falEo3Wy-vc&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYF5GMPayProoWSdkQDOAD42TKt8Hd8SHZIMITSu7tH3cQ&oe=67E39030",
                permalink: "https://www.instagram.com/p/DER6SDeI3_w/",
                id: "17956964465852489"
              },
              {
                media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471994635_509868014808963_8092215235671953633_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=OW4IqRlF5AoQ7kNvgGgnpMp&_nc_oc=Adldn2RQxhZq5a4izXdnXLuaSV8w4YByO8UMfKhKLCQkQ5aT3ZT-agkNRJY9N_ykKDQ&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYHQDpN6K9rHMqjxXEqfpzCks5UBW0v_zxNajJKNunVtlw&oe=67E38F9E",
                permalink: "https://www.instagram.com/p/DER6SDdIcsd/",
                id: "18062650081803966"
              }
            ]
          }
        },
        {
          id: "17916673886840626",
          media_type: "IMAGE",
          media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/448189335_476537988068706_2209191964052686878_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=NHN-2g9j8ukQ7kNvgHVexEK&_nc_oc=AdnyifS0yigPK3DjY5xSuCKq8rDxIlRXD-0_j2DIaDQfIXH6BrogzyStoGPb5TP9_yA&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYFrWHCkabzHYcL1NSNE4X0Ao1wWYiXF-wd1PdH1hSjldQ&oe=67E3ADBD",
          caption: "Happy birthday @ulanovicholga 🥳🎉🍾\n.\n.\n#birthday #family #жена #happy #nikon #photo #photography #семья #love",
              timestamp: "2024-06-09T20:39:00+0000",
          permalink: "https://www.instagram.com/p/C8AjdnFI2oO/"
        },
        {
          id: "18019882112038289",
          media_type: "IMAGE",
          media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/444746290_465050319250052_7335869372692454760_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=3A9MvGXPw1UQ7kNvgGGH3jJ&_nc_oc=AdkJwRp7CMJPWIWY1f7DKDYFc--56Y-iCxw1PA-QH77f4jnb02g6HGVO935gcsddk5k&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYHeGuZcV0XGaYc_dYcxuoFzl51Y007B9GtRztmzmIJ7rA&oe=67E3BEC5",
          caption: "🌱☺️🌺\n.\n.\n#зоопарк #гродно #весна #природа #май",
              timestamp: "2024-05-19T18:24:56+0000",
          permalink: "https://www.instagram.com/p/C7KPbTaIf1D/"
        },
        {
          id: "17982472802368803",
          media_type: "IMAGE",
          media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/405761583_701251658398857_6556893009137274340_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=jhnld43ah2gQ7kNvgG7Zzcn&_nc_oc=AdkbM4bnTbHS4ZrysNelxy7EqW2qtdHvXJfoXHvsjd2RgJi-oBW-lI-IwRAhqghAwjk&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYG-BH12NgVtItOgDM0DEl16zU5SDePaBtOi6rapTtH7HA&oe=67E38F32",
          caption: "❄️☃️🌨️\n.\n.\n.\n#зима #снег #прогулка #winter #snow #nikon #d3500 #photography #photo #child #family",
              timestamp: "2023-12-03T15:29:54+0000",
          permalink: "https://www.instagram.com/p/C0ZV2aOIili/"
        },
        {
          id: "17956078766572735",
          media_type: "CAROUSEL_ALBUM",
          media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/399921072_1224216945201360_8678906193340221156_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=YV8_28kczFEQ7kNvgGF1FKj&_nc_oc=AdlR1IUyygxW4s6r1zK_R5BBlAIIAocIeDrhTomEiZC4DMUn3VpbHuXbjeQbsd8K4hc&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYG2bsHC-VNh5W8aVsK-8oF3TWWsDoWRViT4-MVh7vAz6A&oe=67E3A94A",
          caption: "💐🪻🌷🌺🌹\n.\n.\n.\n.\n#осень #цветы #твойбукетгродно #др #краски #счастье #радость #flowers #happy #birthday #forwife #forwifebirthday #nikon #d3500 #photo #photography",
              timestamp: "2023-11-06T17:52:28+0000",
          permalink: "https://www.instagram.com/p/CzUEs74I_tf/",
          children: {
            data: [
              {
                media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/399921072_1224216945201360_8678906193340221156_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=YV8_28kczFEQ7kNvgGF1FKj&_nc_oc=AdlR1IUyygxW4s6r1zK_R5BBlAIIAocIeDrhTomEiZC4DMUn3VpbHuXbjeQbsd8K4hc&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYG2bsHC-VNh5W8aVsK-8oF3TWWsDoWRViT4-MVh7vAz6A&oe=67E3A94A",
                permalink: "https://www.instagram.com/p/CzUEs2QIj7w/",
                id: "18008985572078892"
              },
              {
                media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/399033812_888143212870294_6932401434959038064_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=aCVNHZlBJVwQ7kNvgG_QwR6&_nc_oc=AdnAwSaRlfka-y-eLsXjB1rt2Uu_0L2ErCogfjz2t95tWBapgJ48ESr9aprfQbZgctw&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYHu-Y39N0acy4F5lY45Ymg349s97k5eg97ne4TVZK15PA&oe=67E3AFE4",
                permalink: "https://www.instagram.com/p/CzUEs2QIRhp/",
                id: "18008921732056081"
              }
            ]
          }
        },
        {
          id: "18010086850844146",
          media_type: "IMAGE",
          media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/396734402_3590733904579345_4535457144012046396_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=rTzr_aALXOEQ7kNvgHBfux0&_nc_oc=AdnEv2GWMmLIV2orl-wJOunHf4qB_HU5-yYFjYqXOadqA7p8rr_CJibNCDC7eT_CXSg&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYFhmASYDaou14QK9tvCPI1pzO3VBpBMpZaB8_vXmm3G1g&oe=67E3A1D9",
          caption: "С крестницей😁😉",
          timestamp: "2023-10-29T20:25:29+0000",
          permalink: "https://www.instagram.com/p/Cy_v2sEoDkt/"
        },
        {
          id: "18203019433276645",
          media_type: "CAROUSEL_ALBUM",
          media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/394302158_552158840409900_3324835255694903806_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=OsVsz0R6TGUQ7kNvgG_dU-g&_nc_oc=AdltAr4kHnf0YpJxhOgUMVNgkOU5gYNRT68UoUmUTS3M-wu3RGm1Zp_zLXSE6GATpFI&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYHVL3WNoiDcPJxDrURmpY5w_Hy9D5OABjRPBzCCan7p6A&oe=67E3ACFF",
          caption: "Арсений 😉\n.\n.\n#лето #тепло #фото #никон #photo #photography #summer #nikon #children #child #love #beautiful",
              timestamp: "2023-10-23T21:31:18+0000",
          permalink: "https://www.instagram.com/p/CywanaUINy_/",
          children: {
            data: [
              {
                media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/394302158_552158840409900_3324835255694903806_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=OsVsz0R6TGUQ7kNvgG_dU-g&_nc_oc=AdltAr4kHnf0YpJxhOgUMVNgkOU5gYNRT68UoUmUTS3M-wu3RGm1Zp_zLXSE6GATpFI&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYHVL3WNoiDcPJxDrURmpY5w_Hy9D5OABjRPBzCCan7p6A&oe=67E3ACFF",
                permalink: "https://www.instagram.com/p/CywanSTICon/",
                id: "17885174036947433"
              },
              {
                media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/394294516_702434521803543_4491712259966206837_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=Y--NyfObZ2gQ7kNvgEYlH1F&_nc_oc=Adk1_8XlY-MV9dicauJAMrVkqvb1heeRpAfVccHdFK2ERuFS0o0f3ussZm2KqDJrYuw&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYE3P5ePXJO9tlxsn7q5a6BG3ktlow_vJ1VJuU1GtCIUiA&oe=67E3A5C5",
                permalink: "https://www.instagram.com/p/CywanSToIRo/",
                id: "18244402537229936"
              }
            ]
          }
        },
        {
          id: "18029081788565662",
          media_type: "IMAGE",
          media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/385630732_284574787769784_7609287346603913349_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=O6xPeJRXaGMQ7kNvgELLjcO&_nc_oc=AdlYanKzXafptAEp8808dmX8DuHdk7oIpC2EzL07wePU0Txme-JHk9nilW6KnxOb1to&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYFHrl0uH1hApppLkY7JhcmCKgMUV0DH4P_1A9Bls0mijQ&oe=67E3B1B2",
          caption: "Осень🍂\n.\n.\n.\n.\n#осень #фото #тепло #парк #прогулка #nikon #photo #photography #d3500 #nature",
              timestamp: "2023-10-03T18:09:07+0000",
          permalink: "https://www.instagram.com/p/Cx8jlIjo9tO/"
        },
        {
          id: "18370840513066700",
          media_type: "IMAGE",
          media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/375488449_1483932322425760_6325126173978386399_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=WYyDi8OxtnwQ7kNvgFNK8TV&_nc_oc=AdlnE6gbxWxM-SPSxQ-6xsMNqswel0IR0fiFr1x6lXobVXdVkjiOn2q6bVNdChoSOJE&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYF5yxTFXcnRe_Nl-biGMpxfVZ-eTZjzyMFcE7t-Sqd09w&oe=67E3B6FF",
          caption: "📸🌞👍😉💥",
          timestamp: "2023-09-07T20:25:31+0000",
          permalink: "https://www.instagram.com/p/Cw52hclogJl/"
        },
        {
          id: "18078460315393540",
          media_type: "CAROUSEL_ALBUM",
          media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/376061161_201866939568604_781541971237066820_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=WSOpYspGWF4Q7kNvgFrBtL7&_nc_oc=AdlF_783vr0wjosiXmnBXPhzjyPPjuWiXovSQqTiuZWsSoq0DE1ODyqvPXSTBXoZlQc&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYGNVUXwTjhTpkEAru8cMemiUObDhrnXWWJ1qMd4-E1eRA&oe=67E3BC56",
          caption: "🎈🥰👍📸🌞.\n.\n.\n#фото #дети #детицветыжизни #счастье #прогулка #парк #photo #photography #grodno #nikon #d3500 #50mm #autumn #child #funny",
              timestamp: "2023-09-07T20:18:50+0000",
          permalink: "https://www.instagram.com/p/Cw51wZ1IvBv/",
          children: {
            data: [
              {
                media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/376061161_201866939568604_781541971237066820_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=WSOpYspGWF4Q7kNvgFrBtL7&_nc_oc=AdlF_783vr0wjosiXmnBXPhzjyPPjuWiXovSQqTiuZWsSoq0DE1ODyqvPXSTBXoZlQc&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYGNVUXwTjhTpkEAru8cMemiUObDhrnXWWJ1qMd4-E1eRA&oe=67E3BC56",
                permalink: "https://www.instagram.com/p/Cw51wSWoc8R/",
                id: "17972633618573308"
              },
              {
                media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/375531880_266332076236954_2349669412467320925_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=Nt9LaL54Z0EQ7kNvgG7EWUZ&_nc_oc=AdkmTGMKf0KiYbQRCV5r0jke0QFrAC4hqUCiSSkpWlndx0e6stnVLc8w-uezNJUdrkI&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYFmu0jiKpTbY4VLAf_eUYJcJMZ3HFVFt2Ckqz5LpLdt_w&oe=67E38CA9",
                permalink: "https://www.instagram.com/p/Cw51wSWoBdb/",
                id: "17893793723870989"
              }
            ]
          }
        },
        {
          id: "18380616964025549",
          media_type: "CAROUSEL_ALBUM",
          media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/371000304_334057882381165_8156869153846839759_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=5uYZ6urNonUQ7kNvgGQYFLb&_nc_oc=AdmWu68lNseWa1Aemr8mU4WrhvOAhX6qR6OSUepAKTuLxwmFWHdt5fdBzcMal3ww_Ts&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYF-sR_Tr8sRHXHOqEGyFj6KIdCo-9OBT_fLpV4APRtDpA&oe=67E3B9FC",
          caption: "Маленькие гимнасты🤸\n.\n.\n.\n#дети #деревня #фото #гимнастика #счастье #лето #краски #гудевичи #фитнес #деревнястайл #убабушки #photography #photo #nikon #d3500 #50mmf18 #funny #village #home #child #children #holiday #beautiful #august",
              timestamp: "2023-08-26T19:43:50+0000",
          permalink: "https://www.instagram.com/p/Cwa4NoCIbeZ/",
          children: {
            data: [
              {
                media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/371000304_334057882381165_8156869153846839759_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=5uYZ6urNonUQ7kNvgGQYFLb&_nc_oc=AdmWu68lNseWa1Aemr8mU4WrhvOAhX6qR6OSUepAKTuLxwmFWHdt5fdBzcMal3ww_Ts&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYF-sR_Tr8sRHXHOqEGyFj6KIdCo-9OBT_fLpV4APRtDpA&oe=67E3B9FC",
                permalink: "https://www.instagram.com/p/Cwa4Ne6I96V/",
                id: "17997076241306466"
              },
              {
                media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/370522427_176164512163142_2319196231979727992_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=qzpAv0N3iSoQ7kNvgHthJTW&_nc_oc=Adk6XPUUykzR9FkD_Wj0A3nE1LbbgCOPZXG1NEnR4C-LNcyU4ZjG5AcgREj6KNmI3c8&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYGZMPun8j_729z5MZETc2YKq1hczr1fvoUzoqgMOFrsjQ&oe=67E3BEC3",
                permalink: "https://www.instagram.com/p/Cwa4Ne6IGEt/",
                id: "18024771268623320"
              },
              {
                media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/370575335_1118446939560186_987285632120583100_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=4UdNflU5a_sQ7kNvgFLZKTb&_nc_oc=AdlI9Rbah8tgsWuVdY3EcpJPEyieEaodKnj0dSEa4H-bQzaJeUrreYA4nvHsdVCcqTg&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYEA9vLng0AtJevpYWp97gysr_FTM7qTykI5YiFcyHxYtQ&oe=67E3A871",
                permalink: "https://www.instagram.com/p/Cwa4Ne6I2qp/",
                id: "18022845562578646"
              },
              {
                media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/371169678_1049790896390813_145970962376334497_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=Ctrj4t3tnnAQ7kNvgG-Jt3u&_nc_oc=Adn9yxVD5xzS8LiZARIEErbaVO5JUn15wf3KhKaQEZdIuNuoMXMJS6kXgoTmcuwHDK0&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYHiZn93fkFw-S-O9cxE4ZBkg3Xs9QOgwNrBIhKMQoFVJg&oe=67E391A4",
                permalink: "https://www.instagram.com/p/Cwa4Ne8oE1I/",
                id: "17933094815724091"
              }
            ]
          }
        },
        {
          id: "17984563487197621",
          media_type: "VIDEO",
          media_url: "https://scontent-waw2-1.cdninstagram.com/o1/v/t2/f2/m86/AQNNp3dErqJQYHR7gUeAFOFQdW866w7Yonr3nJZXzWz-kL--2K5t3VHa_824q-R7LMXe9hN_usp2DAJ1kaiKlA-3763nDjV7mMqdwJM.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_ohc=0HfH_nn7AcYQ7kNvgEYVr6U&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNDMyLmRhc2hfYmFzZWxpbmVfM192MSIsInhwdl9hc3NldF9pZCI6ODMyMjYyNDQ1NzMyODcxLCJhc3NldF9hZ2VfZGF5cyI6NjA3LCJ2aV91c2VjYXNlX2lkIjoxMDEwMSwiZHVyYXRpb25fcyI6MTg2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=2d2d0725bab1855d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xMjQ3RENFNjEyRTkxMTY5RjkxQzM2N0NGQTMwMUQ5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBZmtpeHZqZWwwamd3UURBRHVKa3hpTmVhbE9icGt3QUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJo7QgLeGvPoCFQIoAkMzLBdAZ0LAgxJumBgSZGFzaF9iYXNlbGluZV8zX3YxEQB1_gcA&_nc_zt=28&oh=00_AYGDKPI0WR7OLolgJaq5-1NNc0tEOGUdKyasHAxXr2d0pA&oe=67DF99D7",
          timestamp: "2023-07-22T23:06:23+0000",
          thumbnail_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/361979906_311839367918646_6949158993380303406_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=r29q0-UCsZQQ7kNvgE10T-g&_nc_oc=AdnMVFR0OU_2OWjJjCYmGLkLOOHPtptcZyobgWo_oNDDppB77Z6UBIR4APIpsZyrJs4&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYGIJwGLc3m4WSfLxaL96MLEoAoS-wiGoHyhUvQ8PWKrUA&oe=67E3AAC4",
          permalink: "https://www.instagram.com/reel/CvBHi5fIR07/"
        },
        {
          id: "17894686862745252",
          media_type: "IMAGE",
          media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345269088_771107604386232_2883800298046444035_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=7og65yTRPyoQ7kNvgEcnc5i&_nc_oc=AdlWIXL7if1-bKLbslkzlpGJQRjpwZjRHDjRq-Srk8h7A59pjOfmAwDVwB6qh7j4EVw&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYHsuCu3cGJ1LnWRs8lq_2lvyE_borUB7RfHjAWG_BRdQg&oe=67E3904D",
          caption: "Заборье. Дорога на малую родину.\n.\n.\n.\n#nikon #photo #photography #nature #may #road #green #фото #заборье #лес #малаяродина #зелень #весна",
              timestamp: "2023-05-07T21:37:42+0000",
          permalink: "https://www.instagram.com/p/Cr9RAaaoVD2/"
        },
        {
          id: "17994812434757814",
          media_type: "CAROUSEL_ALBUM",
          media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345195907_621416219581206_8046304521424312682_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=c-O3VWij_i0Q7kNvgEiN3uV&_nc_oc=AdmODM5CgoTbjYtq4SgN2x8vGNNlUJ8tCvLUkCVTF2d9jc8P3ax68sWyFH5SbwzxFwc&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYFOdAiez0TtHhBfU15xbqHqvQHYIWqMNewA0nqeRVdOpA&oe=67E3896E",
          caption: "☀️🪻📸🌳\n.\n.\n.\n#photo #photography #nikon #capture #captureone #nature #holiday #may #instagram #travelphotography #лес #фото #природа #деревня #дорога #малаяродина #я",
              timestamp: "2023-05-07T21:33:19+0000",
          permalink: "https://www.instagram.com/p/Cr9QgUfoa_X/",
          children: {
            data: [
              {
                media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345195907_621416219581206_8046304521424312682_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=c-O3VWij_i0Q7kNvgEiN3uV&_nc_oc=AdmODM5CgoTbjYtq4SgN2x8vGNNlUJ8tCvLUkCVTF2d9jc8P3ax68sWyFH5SbwzxFwc&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYFOdAiez0TtHhBfU15xbqHqvQHYIWqMNewA0nqeRVdOpA&oe=67E3896E",
                permalink: "https://www.instagram.com/p/Cr9QgOvItt7/",
                id: "17895871625740861"
              },
              {
                media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345469424_1181466189182787_7226357818857874287_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=x9zQzih9IdYQ7kNvgGcXKKp&_nc_oc=AdkwTfL27t7AeF1sDDJ6cuRnX6LNOGXOO5HPPZw4B8_GTNxVUERYvwb2BioYwmCyUIg&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYG-Lrmkk0l6FU3XT5pKQ9J6lOyTu7KEid8BrKH99wEN4A&oe=67E3985D",
                permalink: "https://www.instagram.com/p/Cr9QgOvos4D/",
                id: "18033975964488513"
              }
            ]
          }
        },
        {
          id: "18206474116221708",
          media_type: "IMAGE",
          media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/344791177_6534940506537361_683719268025998279_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=ayTPkddvedcQ7kNvgG6jkhB&_nc_oc=AdmJAtswBeCgzVDL4XbHDPD1yoHOpHo9bHB0l8LQ1tiYE2famhJY8cruBJ8ztHdGkXs&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=E_4gVYP1wlaoGTDFLMlO3A&oh=00_AYGxI70TZ5egJOrnVNI1yp32cK15C7h0R70edB10XXsLDg&oe=67E3B104",
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