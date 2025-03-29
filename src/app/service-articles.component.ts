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
  providers: [HttpService,]
})

export class ServiceArticlesComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private renderer: Renderer2,
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
      media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471767104_939564551646361_3165368067600805189_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=hkQ0Fzp0JE4Q7kNvgGTf5tA&_nc_oc=Adn6iOkek9ngY78nP83lOI3CKnl-kAVuGEHeGowU5gviNpoy1YK3sOnNaAXN9vC2TxI&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYElOoKuGn74FG7Nim1MDMTUVMfGa6VPTT4ZGmrl8yLQpA&oe=67ECC7BF",
      caption: "Всех с Новым 2025 годом! 🎉❄️🎁🎄",
      timestamp: "2025-01-01T10:36:40+0000",
      permalink: "https://www.instagram.com/p/DER6SOaod3C/",
      children: {
        data: [
          {
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471767104_939564551646361_3165368067600805189_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=hkQ0Fzp0JE4Q7kNvgGTf5tA&_nc_oc=Adn6iOkek9ngY78nP83lOI3CKnl-kAVuGEHeGowU5gviNpoy1YK3sOnNaAXN9vC2TxI&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYElOoKuGn74FG7Nim1MDMTUVMfGa6VPTT4ZGmrl8yLQpA&oe=67ECC7BF",
            permalink: "https://www.instagram.com/p/DER6SD1IUr6/",
            id: "18267407797249450"
          },
          {
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471957690_446651125184141_3422070135797629449_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=MvEtT_1pnO4Q7kNvgEOVJlS&_nc_oc=Adm7Xr80QUu4gaxZ72W4VL7CdI9G69U1DBBGBW-tEel2ucLlE2KuBY_viBYKC0a7sYI&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYGaa085SKHsbW0s1Qv6wHmNFvvtvbNr1q5QzDjMo1Rkng&oe=67ECD9A0",
            permalink: "https://www.instagram.com/p/DER6SDdo46Z/",
            id: "17888844132170249"
          },
          {
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/472062886_1882353092302553_2566240432190132665_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=uDsmiaurTAMQ7kNvgFGeZcL&_nc_oc=Adl_ntCgcDgtJy4sqdOQKA63l0QHhC8m4rTDwspSZ86ylmyfIEkic_iAmJyEaGcvAd8&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYE5-KDvcVPHzn9uc5FKVQ7wO2n1fbxwECBhaqNz_9agKw&oe=67ECCAB0",
            permalink: "https://www.instagram.com/p/DER6SDeI3_w/",
            id: "17956964465852489"
          },
          {
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/471994635_509868014808963_8092215235671953633_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=cnTKpaESdJwQ7kNvgHlXgkC&_nc_oc=Adl1T52HGizzo4MX_3L7avTnstRF-UcVzLjs7u78DpnxXjhbV5197QZYCXqXG8y-vgo&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYFRADyxnnJnviI2rz2Wuqd1UpBUJndBt6FjyWE_PTN35w&oe=67ECCA1E",
            permalink: "https://www.instagram.com/p/DER6SDdIcsd/",
            id: "18062650081803966"
          }
        ]
      }
    },
    {
      id: "17916673886840626",
      media_type: "IMAGE",
      media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/448189335_476537988068706_2209191964052686878_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=zLVp--2VNm4Q7kNvgFRgvlg&_nc_oc=AdmxSbBnka7-t9s2WKGu-17532QxzMrx_xOt44xCBLCLLM3NFA7nNizjjYNMuxcnA4A&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYFODzxooCucY6Uxhz-p_4IJ-MhkGge3eOVnRfrRnjQdgQ&oe=67ECE83D",
      caption: "Happy birthday @ulanovicholga 🥳🎉🍾\n.\n.\n#birthday #family #жена #happy #nikon #photo #photography #семья #love",
      timestamp: "2024-06-09T20:39:00+0000",
      permalink: "https://www.instagram.com/p/C8AjdnFI2oO/"
    },
    {
      id: "18019882112038289",
      media_type: "IMAGE",
      media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/444746290_465050319250052_7335869372692454760_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=p3-vH6CScegQ7kNvgE5ej7Z&_nc_oc=Adk-zzYgqYrU8MNDPQR55A8w0oYQ2-FjxlN1PEizKxjIbPL90Etc6n8bBCfSoo59gfc&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYGueq6PXG7UtOgeXjAPFgJyXe5w8s3E8q4Ug_pxwUMFlw&oe=67ECC105",
      caption: "🌱☺️🌺\n.\n.\n#зоопарк #гродно #весна #природа #май",
      timestamp: "2024-05-19T18:24:56+0000",
      permalink: "https://www.instagram.com/p/C7KPbTaIf1D/"
    },
    {
      id: "17982472802368803",
      media_type: "IMAGE",
      media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/405761583_701251658398857_6556893009137274340_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=yYGDM1TqyCMQ7kNvgFHwoBm&_nc_oc=Adnt1saCX8OzmdY1oXpee_RnEPijQt0JBMeHjI-gdgfBv7R_0jgRf9HfAflDDCVj6hs&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYFvkyeSLBdVt4MjRCHJcWWV9Hxzb5IvWTxBaQ2GN_QT8A&oe=67ECC9B2",
      caption: "❄️☃️🌨️\n.\n.\n.\n#зима #снег #прогулка #winter #snow #nikon #d3500 #photography #photo #child #family",
      timestamp: "2023-12-03T15:29:54+0000",
      permalink: "https://www.instagram.com/p/C0ZV2aOIili/"
    },
    {
      id: "17956078766572735",
      media_type: "CAROUSEL_ALBUM",
      media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/399921072_1224216945201360_8678906193340221156_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=L136BteXQ38Q7kNvgExsuEh&_nc_oc=Adk153vezGW9RnZ6ugIsL3sP193ZlPwQX1G_AFkExYtz3z_z-0OMJdmawrUUQ7vYFJY&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYFIxPCMdwHJIuDJLwV8xhBJKOuTu4uNScKmGOlSrp8hhw&oe=67ECE3CA",
      caption: "💐🪻🌷🌺🌹\n.\n.\n.\n.\n#осень #цветы #твойбукетгродно #др #краски #счастье #радость #flowers #happy #birthday #forwife #forwifebirthday #nikon #d3500 #photo #photography",
      timestamp: "2023-11-06T17:52:28+0000",
      permalink: "https://www.instagram.com/p/CzUEs74I_tf/",
      children: {
        data: [
          {
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/399921072_1224216945201360_8678906193340221156_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=103&ccb=1-7&_nc_sid=18de74&_nc_ohc=L136BteXQ38Q7kNvgExsuEh&_nc_oc=Adk153vezGW9RnZ6ugIsL3sP193ZlPwQX1G_AFkExYtz3z_z-0OMJdmawrUUQ7vYFJY&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYFIxPCMdwHJIuDJLwV8xhBJKOuTu4uNScKmGOlSrp8hhw&oe=67ECE3CA",
            permalink: "https://www.instagram.com/p/CzUEs2QIj7w/",
            id: "18008985572078892"
          },
          {
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/399033812_888143212870294_6932401434959038064_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=qiT0_81cOZYQ7kNvgFMdobB&_nc_oc=AdkdNprltj-RKjCwhMIrKU-Io1gTKaN7UGkdULe93gxDAtMfbwFsge6ZvRGD76MfNFc&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYHPOdMkKDn5HaKsV9nRKbH9tq5W1jPt4Aja7ox1J2BBqA&oe=67ECEA64",
            permalink: "https://www.instagram.com/p/CzUEs2QIRhp/",
            id: "18008921732056081"
          }
        ]
      }
    },
    {
      id: "18010086850844146",
      media_type: "IMAGE",
      media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/396734402_3590733904579345_4535457144012046396_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=4Xqn8Eduk7oQ7kNvgFV_prW&_nc_oc=Adn30qbagEvM6aw5TChJqHokXyVnaxuNpt6budvF6GaI_EKb-EyGBNqIPPANjMgHTI8&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYG5QX-a363T0o1335CmSoV7GSWZvKiFeShEMJbt3KgAjQ&oe=67ECDC59",
      caption: "С крестницей😁😉",
      timestamp: "2023-10-29T20:25:29+0000",
      permalink: "https://www.instagram.com/p/Cy_v2sEoDkt/"
    },
    {
      id: "18203019433276645",
      media_type: "CAROUSEL_ALBUM",
      media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/394302158_552158840409900_3324835255694903806_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ERmvEu9imlcQ7kNvgHhTC7V&_nc_oc=Adk-lHLGqlPKWqFdi8kAhgp0oo2eNNO4VQz22gD61q2264USxjmt3xbDNWB0ZPL1PPM&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYEv1cnlLM7gXhAJGx-dArZ-rbYT9xSoDgmlzdnh3hrh6g&oe=67ECE77F",
      caption: "Арсений 😉\n.\n.\n#лето #тепло #фото #никон #photo #photography #summer #nikon #children #child #love #beautiful",
      timestamp: "2023-10-23T21:31:18+0000",
      permalink: "https://www.instagram.com/p/CywanaUINy_/",
      children: {
        data: [
          {
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/394302158_552158840409900_3324835255694903806_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ERmvEu9imlcQ7kNvgHhTC7V&_nc_oc=Adk-lHLGqlPKWqFdi8kAhgp0oo2eNNO4VQz22gD61q2264USxjmt3xbDNWB0ZPL1PPM&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYEv1cnlLM7gXhAJGx-dArZ-rbYT9xSoDgmlzdnh3hrh6g&oe=67ECE77F",
            permalink: "https://www.instagram.com/p/CywanSTICon/",
            id: "17885174036947433"
          },
          {
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/394294516_702434521803543_4491712259966206837_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=E0lnbTAoaqkQ7kNvgGsQEAx&_nc_oc=Adn7r3NQETFLUrqq6z-s3RtoDwM4hPs0caia_6sVshJBaB4HPSuugYJ20VJcaDMX-Kg&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYFwZHOePyKE4pE9d_KMDEQELF97p_y-8fc3PSbw3cNr3w&oe=67ECE045",
            permalink: "https://www.instagram.com/p/CywanSToIRo/",
            id: "18244402537229936"
          }
        ]
      }
    },
    {
      id: "18029081788565662",
      media_type: "IMAGE",
      media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/385630732_284574787769784_7609287346603913349_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=eVfRN3aPZKQQ7kNvgHfH7J2&_nc_oc=AdkRhkUAQjR6bA6R3tnw-ZEgsVf27HQB6EtZJFEoGbLx5XsEl20luGsyncTBnHQ-8hw&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYG0Yr5OSrRTPZti1pqFQPCTVNyx_8u_wkbgaqd5r5LCVA&oe=67ECEC32",
      caption: "Осень🍂\n.\n.\n.\n.\n#осень #фото #тепло #парк #прогулка #nikon #photo #photography #d3500 #nature",
      timestamp: "2023-10-03T18:09:07+0000",
      permalink: "https://www.instagram.com/p/Cx8jlIjo9tO/"
    },
    {
      id: "18370840513066700",
      media_type: "IMAGE",
      media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/375488449_1483932322425760_6325126173978386399_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=5csgwW1xG7cQ7kNvgFIzjMl&_nc_oc=AdnTLka_7UCNP1JdU9b8JSSYmeMVL8i-dWeZaCgYbjnG7uDcqumHUhaAurmV-R5JJMg&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYEmzorZx61LmTSF9aFBXLnYgAJK0Z8rBlQT-JDSAS8ksQ&oe=67ECB93F",
      caption: "📸🌞👍😉💥",
      timestamp: "2023-09-07T20:25:31+0000",
      permalink: "https://www.instagram.com/p/Cw52hclogJl/"
    },
    {
      id: "18078460315393540",
      media_type: "CAROUSEL_ALBUM",
      media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/376061161_201866939568604_781541971237066820_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=fjSHguIsvfQQ7kNvgESJeVB&_nc_oc=AdlPZbZLKqLFLlPhZW9Zg8NqlUeOwmxkkTiWs-5qQWl6_BcPKImBcJfnqgktss3DKZs&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYF7vuRfpqtv-aXx0BTCVuQEHzkTlPe9vIFmmTlwmd7HgA&oe=67ECBE96",
      caption: "🎈🥰👍📸🌞.\n.\n.\n#фото #дети #детицветыжизни #счастье #прогулка #парк #photo #photography #grodno #nikon #d3500 #50mm #autumn #child #funny",
      timestamp: "2023-09-07T20:18:50+0000",
      permalink: "https://www.instagram.com/p/Cw51wZ1IvBv/",
      children: {
        data: [
          {
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/376061161_201866939568604_781541971237066820_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=fjSHguIsvfQQ7kNvgESJeVB&_nc_oc=AdlPZbZLKqLFLlPhZW9Zg8NqlUeOwmxkkTiWs-5qQWl6_BcPKImBcJfnqgktss3DKZs&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYF7vuRfpqtv-aXx0BTCVuQEHzkTlPe9vIFmmTlwmd7HgA&oe=67ECBE96",
            permalink: "https://www.instagram.com/p/Cw51wSWoc8R/",
            id: "17972633618573308"
          },
          {
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/375531880_266332076236954_2349669412467320925_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=yp51lOPaqZYQ7kNvgH2vZDu&_nc_oc=AdmhkyZxE_MUaDdXS6qNidNWibv3BLeGOnpQLl2cE9O8h1ZIO_61Z3mfpUanttXjnf8&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYFyVROXW0hahnaHkV2qD8HBwiy4SQt8Qp0nCkpUkEfn-g&oe=67ECC729",
            permalink: "https://www.instagram.com/p/Cw51wSWoBdb/",
            id: "17893793723870989"
          }
        ]
      }
    },
    {
      id: "18380616964025549",
      media_type: "CAROUSEL_ALBUM",
      media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/371000304_334057882381165_8156869153846839759_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=ci9ocX4Tb1QQ7kNvgEEivuF&_nc_oc=AdmrcT8WJqG0TQOuDsPHkVuOGQrn1sV4jeoUkwKaZkp95cfpciT5bL8ar2LSzuR9Wy0&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYEGzc5KIGRhWOUcMSugN9gMc-Y6TGC_08dHsWnnU2uOjA&oe=67ECBC3C",
      caption: "Маленькие гимнасты🤸\n.\n.\n.\n#дети #деревня #фото #гимнастика #счастье #лето #краски #гудевичи #фитнес #деревнястайл #убабушки #photography #photo #nikon #d3500 #50mmf18 #funny #village #home #child #children #holiday #beautiful #august",
      timestamp: "2023-08-26T19:43:50+0000",
      permalink: "https://www.instagram.com/p/Cwa4NoCIbeZ/",
      children: {
        data: [
          {
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/371000304_334057882381165_8156869153846839759_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=ci9ocX4Tb1QQ7kNvgEEivuF&_nc_oc=AdmrcT8WJqG0TQOuDsPHkVuOGQrn1sV4jeoUkwKaZkp95cfpciT5bL8ar2LSzuR9Wy0&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYEGzc5KIGRhWOUcMSugN9gMc-Y6TGC_08dHsWnnU2uOjA&oe=67ECBC3C",
            permalink: "https://www.instagram.com/p/Cwa4Ne6I96V/",
            id: "17997076241306466"
          },
          {
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/370522427_176164512163142_2319196231979727992_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=7uZMZhE2maYQ7kNvgHX2jZR&_nc_oc=AdkCJcemt3elma-7LAjcjRnPnTF2yb7n5vXh_qL8cNGpKoO2hrZGSTYFOqHzky8jBtA&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYF-N1Y0tZMwwVb31xl9pSp7QxZ8pOZs1BVa4sBtEqUcKQ&oe=67ECC103",
            permalink: "https://www.instagram.com/p/Cwa4Ne6IGEt/",
            id: "18024771268623320"
          },
          {
            media_url: "https://scontent-waw2-2.cdninstagram.com/v/t51.29350-15/370575335_1118446939560186_987285632120583100_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=4dcZuBnnWXsQ7kNvgFCcXIS&_nc_oc=Admci1a0gdePmUZCyeOXLYq_PiTr4DUMXc-0wesKgktBYi4K5gQSNK3S_OtxB3ULHPM&_nc_zt=23&_nc_ht=scontent-waw2-2.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYGihiAxxfufbBYP3Es7tjYCEUTOYi2KzErtBplLu5Tkig&oe=67ECE2F1",
            permalink: "https://www.instagram.com/p/Cwa4Ne6I2qp/",
            id: "18022845562578646"
          },
          {
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/371169678_1049790896390813_145970962376334497_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=rJbLz1j3mOYQ7kNvgG-KT3M&_nc_oc=Adn1wVypDfids-bGD66tP_VjLlNGO3z7mte2iYRpmkWdHS3Pe0B8nHvn3zOLkqdMGu8&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYFvweD9varLF_25lUGQGjSc2KkcviO4qcl93GfeqcZhGA&oe=67ECCC24",
            permalink: "https://www.instagram.com/p/Cwa4Ne8oE1I/",
            id: "17933094815724091"
          }
        ]
      }
    },
    {
      id: "17984563487197621",
      media_type: "VIDEO",
      media_url: "https://scontent-waw2-1.cdninstagram.com/o1/v/t2/f2/m86/AQNNp3dErqJQYHR7gUeAFOFQdW866w7Yonr3nJZXzWz-kL--2K5t3VHa_824q-R7LMXe9hN_usp2DAJ1kaiKlA-3763nDjV7mMqdwJM.mp4?_nc_cat=110&_nc_sid=5e9851&_nc_ht=scontent-waw2-1.cdninstagram.com&_nc_ohc=wJDNsvh7bJ0Q7kNvgFLD15c&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5JTlNUQUdSQU0uQ0xJUFMuQzMuNDMyLmRhc2hfYmFzZWxpbmVfM192MSIsInhwdl9hc3NldF9pZCI6ODMyMjYyNDQ1NzMyODcxLCJhc3NldF9hZ2VfZGF5cyI6NjE0LCJ2aV91c2VjYXNlX2lkIjoxMDEwMSwiZHVyYXRpb25fcyI6MTg2LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&vs=2d2d0725bab1855d&_nc_vs=HBksFQIYUmlnX3hwdl9yZWVsc19wZXJtYW5lbnRfc3JfcHJvZC8xMjQ3RENFNjEyRTkxMTY5RjkxQzM2N0NGQTMwMUQ5Ml92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dBZmtpeHZqZWwwamd3UURBRHVKa3hpTmVhbE9icGt3QUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJo7QgLeGvPoCFQIoAkMzLBdAZ0LAgxJumBgSZGFzaF9iYXNlbGluZV8zX3YxEQB1_gcA&_nc_zt=28&oh=00_AYG1AElC2gvODdzuIzpl18ByutK9OXV41FbVdfudiQBAjg&oe=67E8D457",
      timestamp: "2023-07-22T23:06:23+0000",
      thumbnail_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/361979906_311839367918646_6949158993380303406_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=rv4feJ-SaFIQ7kNvgGZ15fG&_nc_oc=AdkEcKi2_L284ObvK9vGXJ8sIi7ekCE-qrorLPhK2uo6ScMzGj1KNbVN5P71ZdummDY&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYHjWhuY6yGQrc5Rg45jqJQh6SWuySHEgy61Gf82H_7ZOg&oe=67ECE544",
      permalink: "https://www.instagram.com/reel/CvBHi5fIR07/"
    },
    {
      id: "17894686862745252",
      media_type: "IMAGE",
      media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345269088_771107604386232_2883800298046444035_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=q8bjpadIHOQQ7kNvgEfNOj7&_nc_oc=AdlJ0HRKhg6YS2-GWINhrsRPPAk4yhZmvrLWLRhGLKcrQh1Pw9oIoGNU4gtScUYUGWE&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYFzvWWxjF8nbeOfmAEnOCsyV4oA9sENr1BOP2yROJ7cVw&oe=67ECCACD",
      caption: "Заборье. Дорога на малую родину.\n.\n.\n.\n#nikon #photo #photography #nature #may #road #green #фото #заборье #лес #малаяродина #зелень #весна",
      timestamp: "2023-05-07T21:37:42+0000",
      permalink: "https://www.instagram.com/p/Cr9RAaaoVD2/"
    },
    {
      id: "17994812434757814",
      media_type: "CAROUSEL_ALBUM",
      media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345195907_621416219581206_8046304521424312682_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=gRDd8-ysqKwQ7kNvgFJ4eKP&_nc_oc=AdnXMb3HDkkQT1r6ebKCmJ5w0XzDU7sfr8w_WTJgICyzjZ6H5ejPmwtU5IVElxwcu3U&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYEdDTEgogxOOhqywjoZchHVYPabu2rCFAgxwIr7Ilw5bA&oe=67ECC3EE",
      caption: "☀️🪻📸🌳\n.\n.\n.\n#photo #photography #nikon #capture #captureone #nature #holiday #may #instagram #travelphotography #лес #фото #природа #деревня #дорога #малаяродина #я",
      timestamp: "2023-05-07T21:33:19+0000",
      permalink: "https://www.instagram.com/p/Cr9QgUfoa_X/",
      children: {
        data: [
          {
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345195907_621416219581206_8046304521424312682_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=gRDd8-ysqKwQ7kNvgFJ4eKP&_nc_oc=AdnXMb3HDkkQT1r6ebKCmJ5w0XzDU7sfr8w_WTJgICyzjZ6H5ejPmwtU5IVElxwcu3U&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYEdDTEgogxOOhqywjoZchHVYPabu2rCFAgxwIr7Ilw5bA&oe=67ECC3EE",
            permalink: "https://www.instagram.com/p/Cr9QgOvItt7/",
            id: "17895871625740861"
          },
          {
            media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/345469424_1181466189182787_7226357818857874287_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=18nZE-zAMRYQ7kNvgEEVKKz&_nc_oc=AdklZkz1T4FGfEEiPaFSa9elsna_snGsb43RAhKdTdcwSa2xfz0bYHZrQL9h9pCia-g&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYEWh7XBc7ITQrkbrAseS2oeMq6fTz4epckz_bRTqkF8GQ&oe=67ECD2DD",
            permalink: "https://www.instagram.com/p/Cr9QgOvos4D/",
            id: "18033975964488513"
          }
        ]
      }
    },
    {
      id: "18206474116221708",
      media_type: "IMAGE",
      media_url: "https://scontent-waw2-1.cdninstagram.com/v/t51.29350-15/344791177_6534940506537361_683719268025998279_n.webp?stp=dst-jpg_e35_tt6&_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=bpgh3mfrfzYQ7kNvgE7jOdb&_nc_oc=AdnKQBPYi8chsUbYxpvoQg_M95l69INvbqlngDlFQlrrwN31wT3lAKS5g-i4H8Vfn_Q&_nc_zt=23&_nc_ht=scontent-waw2-1.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=Afpe9P0AU8xSMjs2bb3Xuw&oh=00_AYGazKA7uNvHVrvgq3lgF64AnqzbSZj0ZuXJ_L9AWqXPEw&oe=67ECEB84",
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