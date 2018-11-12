<template style="font-size: 24px">
    <div id="board">
        <img src="./images/background.jpg" alt="bg">
        <div
            v-tooltip="{
                content: `<p>${i.name}<p>`,
                placement: 'bottom-center',
                classes: ['info'],
                targetClasses: ['tip'],
                offset: 10,
            }" 
            v-for="(i,index) in players" 
            :key="index" 
            :style="`top:calc(${i.top} - 1rem);right:calc(${i.right} - 1rem)`"  
            class="player">
            <span>
                {{i.num}}
            </span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import 'normalize.css'
import Vue from 'vue'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

export default{
    data() {
        return {
            players: [
                {
                    num: 10,
                    name: '梅西',
                    pos: 'RW',
                    top: '80%',
                    right: '26%',
                },
                {
                    num: 8,
                    name: '库蒂尼奥',
                    pos: 'LW',
                    top: '20%',
                    right: '26%',
                },
                {
                    num: 9,
                    name: '苏亚雷斯',
                    pos: 'ST',
                    top: '50%',
                    right: '20%',
                }
            ]
        }
    },
}
</script>

<style lang="scss">
    html{
        font-size: 24px;
    }
    html, body{
        height: 100%;
    }
    #board{
        position: relative;
        box-sizing: border-box;
        display: flex;
        justify-items: center;
        align-items: center;
        img{
            width: 100%;
            opacity: 0.75;
        }
        .player{
            position: absolute;
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            opacity: 0.7;
            background: darkblue;
            text-align: center;
            &:hover{
                background: blue - 50%;
            }
            span{
                color: white;
                line-height: 2rem;
            }
        }
    }
    .tooltip {
        p{
            margin: 0;
        }
        opacity: 0.6;
        &.info {
            $color: darkblue;
            .tooltip-inner {
                background: $color;
                color: white;
                padding: 0.5rem;
                border-radius: 5px;
                box-shadow: 0 5px 30px rgba(black, .1);
                max-width: 250px;
            }
            .tooltip-arrow {
                border-color: $color;
            }
        }
    }
</style>
