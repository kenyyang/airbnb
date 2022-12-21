import styled from "styled-components";

export const PictureBrowerWrapper = styled.div`

    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgb(33,33,33);
    opacity: 1;
    display: flex;
    flex-direction: column;

    .top{
        position: relative;
        height: 86px;

        .close-btn{
            position: absolute;
            top: 15px;
            right: 25px;
            cursor: pointer;
        }
    }

    .slide{
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1;
        overflow: hidden;

        .picture{
            position: relative;
            height: 100%;
            overflow: hidden !important;
            width: 100% ;
            max-width: 105vh ;

            img{
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                margin: 0 auto;
                height: 100%;
                user-select: none;
            }

            /* 动画的样式 */
            .pic-enter{
                transform: translate(${props => props.isNext ? "100%" : "-100%"});
                opacity: 0;
                transition: all 200ms ease;
            }
            .pic-enter-active{
                transform: translate(0);
                opacity: 1;
                transition: all 200ms ease;
            }
            .pic-exit{
                opacity: 1;
            }
            .pic-exit-active{
                opacity: 0;
                transition: all 200ms ease;
            }
        }

        .control{
            position: absolute;
            z-index: 1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            display: flex;
            justify-content: space-between;
            bottom: 0;
            color: #fff;

            .btn{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 83px;
                height: 100%;
                cursor: pointer;
            }
        }

        /* .fade-enter{
            transform: translate(${props => props.isNext ? "100%" : "-100%"});
            opacity: 0;
        }

        .fade-enter-active{
            opacity: 1;
            transform: translate(0);
            transition: all 150ms ease;
        }

        .fade-exit{
            opacity: 1;
        }

        .fade-exit-actiive{
            opacity: 0;
            transition: all 150ms ease;
        } */
    }

    .preview{
        display: flex;
        justify-content: center;
        height: 100px;
        margin-top: 10px;

        .info{
            position: absolute;
            bottom: 20px;
            max-width: 105vh;
            color: #fff;

            .desc{
                display: flex;
                justify-content: space-between;

                .toggle{
                    cursor: pointer;
                }
            }
            .list{
                height: ${props => props.showList ? '67px' : 0};
                margin-top: 3px;
                overflow: hidden;
                transition: height 300ms ease;

                .item{
                    margin-right: 15px;
                    cursor: pointer;

                    img{
                        height: 67px;
                        opacity: 0.5;
                    }

                    &.active{
                        img{
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
`