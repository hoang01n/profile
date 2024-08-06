import styled from "styled-components";

export const TabOneContent = styled.div`
    margin-top: 10px;
    p {

        color: #717173;
        font-size: 18px;
        line-height: 30px;
    }

    ul{

        padding: 0;
        margin: 0;
        list-style: none;

        li{
            color: var(--txt);
            font-size: 16px;
            margin-bottom: 15px;

            p{
                font-weight: 600;
                display: block;
                color: #717173;

                span{
                    font-weight: 300;
                }
            }
        }
    }

`

export const TabOneWrap = styled.div`
    margin-top: 30px;

    .react-tabs__tab-list{
        display: flex;
        flex-wrap: wrap;
        margin-left: -20px;

        li{
            position: relative;
            display: inline-block;
            padding-bottom: 4px;
            margin: 0 20px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            color: var(--txt-title);
            margin-bottom: 10px;
            outline: none;

            &::before{
                position: absolute;
                content: "";
                width: 30px;
                background: rgba(198,201,216,.75);
                height: 2px;
                bottom: 0;
                transition: all .7s cubic-bezier(.19,1,.22,1) 0s;
            }

            &.react-tabs__tab--selected{
                color: var(--txt-primary);
                
                &::before{
                    width: 100%;
                    background: currentColor;
                }
            }
        }
    }


`

