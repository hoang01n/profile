import {createGlobalStyle} from "styled-components";
// import { modernNormalize } from "styled-modern-normalize";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

    .light {
        --txt: #717173;
        --txt-title: #1f1f25;
        --txt-primary: #f9004d;
        --txt-primary-active: #fff;
        --bg: #fff;
        --bg-primary: #fafafa;
        --bg-secondary: #f8f9fc;
        --bg-modal: #100d19;
        --bg-border: #f61b10; 
        --bg-shadow: #f61b10;
        --backdrop: rgba(0, 0, 0, 0.75);
        --social-icon: #1f1f25;
        --modal-border: none;
        --preloader: #fafafa;
        --logo-primary: #f9004d;
        --border-bottom: #333;
        --border: #ebebeb;
        --btn-primary: #f9004d;
        --btn-border: #1f1f25;
        --btn-icon: #1f1f25;
        --tags-txt: #fff;
        --tags-bg: #f9004d;
    }
      
    .dark {
        --txt: rgba(198,201,216,.75);
        --txt-title: #fff;
        --txt-primary: #f9004d;
        --txt-primary-active: #fff;
        --bg: #101010;
        --bg-primary: #181a27;
        --bg-secondary: #191919;
        --bg-modal: #100d19;
        --bg-border: #f61b10;
        --bg-shadow: #f61b10;
        --backdrop: rgba(0, 0, 0, 0.75);
        --social-icon: #c5c8d8;
        --modal-border: #100D19;
        --preloader: #0c0513;
        --logo-primary: #f9004d;
        --border-bottom: #333;
        --border: #ebebeb;
        --btn-primary: #f9004d;
        --btn-border: #f9004d;
        --btn-icon: rgba(198,201,216,.75);
        --tags-txt: #fff;
        --tags-bg: #f9004d;
    }

    *,
    *::before,
    *::after{
        box-sizing:border-box;
    }
    a {
        text-decoration:none;
        color:inherit;
        cursor:pointer;
    }
    ul, ol, dd{
        margin:0; padding:0; list-style:none;
    }
    h1, h2, h3, h4, h5, h6{
        margin: 0;
        font-weight: inherit;
        line-height: 1.4;
    }
    
    p{
        margin:0;
    }

    body{
        font-family: 'Montserrat', sans-serif; 
        font-size: 14px;
        line-height: 1.7;
        font-weight: 500;
    }

    .overflow-hidden {
        overflow: hidden;
    }

    .slider-in__right{

        &-enter{
            transform: translateX(100%);
            opacity: 0;

            &-active{
                transform: translateX(0%);
                opacity: 1;
                transition: all 300ms;
            }
        }

        &-exit{
            transform: translateX(0%);
            opacity: 1;

            &-active{
                transform: translateX(100%);
                opacity: 0;
                transition: all 300ms;
            }
        }
    }

    .modal{

        &-enter{
            transform: translateY(160px);
            opacity: 0;

            &-active{
                transform: translateY(0px);
                opacity: 1;
                transition: all 300ms;
            }
        }
        
        &-exit{
            transform: translateY(0px);
            opacity: 1;

            &-active{
                transform: translateY(160px);
                opacity: 0;
                transition: all 300ms;
            }
        }
    }
`;
