const linearProgressStyles = (fill) => {
  return `* {
        box-sizing: content-box;
      }

      .progress {
        position: relative;
        z-index: 5;
    
        background: #484848;
        border: 5px solid #282828;
        border-radius: 20px;
        display: inline-block;
      }
      .ProgressTitle {
        font-size: 25px;
    font-weight: 700;
    color: #000;
    margin: 0 0 10px;
      }
      .ProgressText {
        position: absolute;
        font: bold 14px/20px Arial;
        text-align: center;
        top: 0;
        left: 0;
      }
      .progress,
      .ProgressBars,
      .ProgressText {
        width: 200px;
        max-width: 200px;
        height: 20px;
      }
      .progress .ProgressText:first-child {
        z-index: 5;
        color: white;
      }
      .progress .ProgressText:last-child {
        z-index: 10;
        color: black;
      }
      .ProgressBars {
        overflow: hidden;
        position: relative;
        z-index: 10;
        border-radius: 12px;
        width: 50%;
        -moz-transition: width 0.2s linear;
        -webkit-transition: width 0.2s linear;
        -o-transition: width 0.2s linear;
        transition: width 0.2s linear;
      }
      
      /* Test Style */
      .progress.test .ProgressBars {
        background-color: #ddf7f7;
        background-image: -moz-linear-gradient(left, #d1fffb 0%, #00baba 100%);
        background-image: -webkit-linear-gradient(left, #d1fffb 0%, #00baba 100%);
        background-image: -o-linear-gradient(left, #d1fffb 0%, #00baba 100%);
        background-image: -ms-linear-gradient(left, #d1fffb 0%, #00baba 100%);
        background-image: linear-gradient(to right, #d1fffb 0%, #00baba 100%);
        background-size: 200px 20px;
    
        overflow: visible;
      }
      .progress.test .ProgressText:first-child {
        display: none;
      }
      .progress.test .ProgressText:last-child {
        left: auto;
        top: auto;
        bottom: -26px;
        right: -12px;
        display: block;
        background-color: #00baba;
        width: 40px;
        height: 20px;
        border-radius: 3px;
      }
      
      .test[data-width='0%'] .ProgressText:last-child {
        display: none;
      }
    
      .progress.test .ProgressText:last-child:before {
        position: absolute;
        left: 12px;
        top: -6px;
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 6px 6px 6px;
        border-color: transparent transparent #00baba transparent;
      }
      /* plain */
      .progress.plain .ProgressBars {
        background-color: ${fill ? `#${fill}` : "#8965e0"};
      }
      
      /* Copper style */
      .progress.copper .ProgressBars {
        background-color: #b68d4c;
        background-image: -moz-linear-gradient(
          top,
          #f3e2c7 0%,
          #b68d4c 51%,
          #e9d4b3 100%
        );
        background-image: -webkit-linear-gradient(
          top,
          #f3e2c7 0%,
          #b68d4c 51%,
          #e9d4b3 100%
        );
        background-image: -ms-linear-gradient(
          top,
          #f3e2c7 0%,
          #b68d4c 51%,
          #e9d4b3 100%
        );
        background-image: linear-gradient(
          to bottom,
          #f3e2c7 0%,
          #b68d4c 51%,
          #e9d4b3 100%
        );
        box-shadow: inset 2px 2px 3px 0 rgba(255, 255, 255, 0.75),
          inset -3px 0 3px 0 rgba(255, 255, 255, 0.75);
      }
      
      /*
       Style */
      .progress.aqua .ProgressBars {
        background-color: #00baba;
        background-image: -moz-linear-gradient(left, #d1fffb 0%, #00baba 100%);
        background-image: -webkit-linear-gradient(left, #d1fffb 0%, #00baba 100%);
        background-image: -o-linear-gradient(left, #d1fffb 0%, #00baba 100%);
        background-image: -ms-linear-gradient(left, #d1fffb 0%, #00baba 100%);
        background-image: linear-gradient(to right, #d1fffb 0%, #00baba 100%);
        background-size: 200px 20px;
      }
    
      /* Candystripe style */
      .progress.candy .ProgressBars {
        background-color: #d00;
        box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.3) inset;
        background-image: linear-gradient(
          -45deg,
          rgba(255, 255, 255, 0.35) 25%,
          rgba(255, 255, 255, 0) 25%,
          rgba(255, 255, 255, 0) 50%,
          rgba(255, 255, 255, 0.35) 50%,
          rgba(255, 255, 255, 0.35) 75%,
          rgba(255, 255, 255, 0) 75%,
          rgba(255, 255, 255, 0)
        );
        background-repeat: repeat-x;
        background-size: 20px 20px;
        -webkit-animation: candystripe 1s linear infinite;
        -moz-animation: candystripe 1s linear infinite;
        animation: candystripe 1s linear infinite;
      }
      @-webkit-keyframes candystripe {
        to {
          background-position: 20px 0;
        }
      }
      @-moz-keyframes candystripe {
        to {
          background-position: 20px 0;
        }
      }
      @keyframes candystripe {
        to {
          background-position: 20px 0;
        }
      }
    
      /* Pulsating Neon style */
      .progress.neon .ProgressBars {
        background-color: #fff;
        box-shadow: 0 0 5px #01fe32 inset, 0 0 16px #08ff35, 0 0 20px #08ff35,
          0 0 15px #08ff35;
        -webkit-animation: pulse 2s linear infinite;
        -moz-animation: pulse 2s linear infinite;
        animation: pulse 2s linear infinite;
      }
      @-webkit-keyframes pulse {
        50% {
          box-shadow: 0 0 5px #01fe32 inset, 0 0 10px #08ff35, 0 0 10px #08ff35,
            0 0 10px #08ff35;
        }
      }
      @-moz-keyframes pulse {
        50% {
          box-shadow: 0 0 5px #01fe32 inset, 0 0 10px #08ff35, 0 0 10px #08ff35,
            0 0 10px #08ff35;
        }
      }
      @keyframes pulse {
        50% {
          box-shadow: 0 0 5px #01fe32 inset, 0 0 10px #08ff35, 0 0 10px #08ff35,
            0 0 10px #08ff35;
        }
      }
    
      /* Shine style */
      .progress.shine .ProgressBars {
        background-color: #00ba0c;
        background-image: -moz-linear-gradient(
          left,
          #00ba0c 0%,
          #00ba0c 75%,
          #d7ffd1 80%,
          #00ba0c 85%,
          #00ba0c 100%
        );
        background-image: -webkit-linear-gradient(
          left,
          #00ba0c 0%,
          #00ba0c 75%,
          #d7ffd1 80%,
          #00ba0c 85%,
          #00ba0c 100%
        );
        background-image: -o-linear-gradient(
          left,
          #00ba0c 0%,
          #00ba0c 75%,
          #d7ffd1 80%,
          #00ba0c 85%,
          #00ba0c 100%
        );
        background-image: -ms-linear-gradient(
          left,
          #00ba0c 0%,
          #00ba0c 75%,
          #d7ffd1 80%,
          #00ba0c 85%,
          #00ba0c 100%
        );
        background-image: linear-gradient(
          to right,
          #00ba0c 0%,
          #00ba0c 75%,
          #d7ffd1 80%,
          #00ba0c 85%,
          #00ba0c 100%
        );
        background-size: 800px 20px;
        box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.5),
          inset 0 2px 2px rgba(255, 255, 255, 0.8);
        -webkit-animation: shine 2s linear infinite;
        -moz-animation: shine 2s linear infinite;
        animation: shine 2s linear infinite;
      }
    
      @-webkit-keyframes shine {
        to {
          background-position: 800px 0;
        }
      }
      @-moz-keyframes shine {
        to {
          background-position: 800px 0;
        }
      }
      @keyframes shine {
        to {
          background-position: 800px 0;
        }
      }
    
      /* Zigzag style */
      .progress.zigzag .ProgressBars {
        background-color: #efe743;
        background-image: -moz-linear-gradient(
            135deg,
            #ea0000 25%,
            rgba(234, 0, 0, 0) 25%
          ),
          -moz-linear-gradient(225deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          -moz-linear-gradient(315deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          -moz-linear-gradient(45deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%);
        background-image: -webkit-linear-gradient(
            135deg,
            #ea0000 25%,
            rgba(234, 0, 0, 0) 25%
          ),
          -webkit-linear-gradient(225deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          -webkit-linear-gradient(315deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          -webkit-linear-gradient(45deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%);
        background-image: -o-linear-gradient(
            135deg,
            #ea0000 25%,
            rgba(234, 0, 0, 0) 25%
          ),
          -o-linear-gradient(225deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          -o-linear-gradient(315deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          -o-linear-gradient(45deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%);
        background-image: -ms-linear-gradient(
            135deg,
            #ea0000 25%,
            rgba(234, 0, 0, 0) 25%
          ),
          -ms-linear-gradient(225deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          -ms-linear-gradient(315deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          -ms-linear-gradient(45deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%);
        background-image: linear-gradient(135deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          linear-gradient(225deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          linear-gradient(315deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%),
          linear-gradient(45deg, #ea0000 25%, rgba(234, 0, 0, 0) 25%);
        background-position: -10px 0, -10px 0, 0 0, 0 0;
        background-size: 20px 20px;
        -webkit-animation: zigzagmove 0.5s linear infinite;
        -moz-animation: zigzagmove 0.5s linear infinite;
        animation: zigzagmove 0.5s linear infinite;
      }
      
      @-webkit-keyframes zigzagmove {
        to {
          background-position: 10px 0, 10px 0, 20px 0, 20px 0;
        }
      }
      @-moz-keyframes zigzagmove {
        to {
          background-position: 10px 0, 10px 0, 20px 0, 20px 0;
        }
      }
      @keyframes zigzagmove {
        to {
          background-position: 10px 0, 10px 0, 20px 0, 20px 0;
        }
      }
    
      /* Diamond style */
      .progress.diamond .ProgressBars {
        background-color: #eee;
        background-image: -moz-linear-gradient(
            45deg,
            rgb(255, 0, 0) 25%,
            rgba(255, 0, 0, 0) 25%,
            rgba(255, 0, 0, 0) 75%,
            rgb(255, 0, 0) 75%,
            rgb(255, 0, 0)
          ),
          -moz-linear-gradient(-45deg, rgb(255, 0, 0) 25%, rgba(255, 0, 0, 0) 25%, rgba(
                  255,
                  0,
                  0,
                  0
                )
                75%, rgb(255, 0, 0) 75%, rgb(255, 0, 0));
        background-image: -webkit-linear-gradient(
            45deg,
            rgb(255, 0, 0) 25%,
            rgba(255, 0, 0, 0) 25%,
            rgba(255, 0, 0, 0) 75%,
            rgb(255, 0, 0) 75%,
            rgb(255, 0, 0)
          ),
          -webkit-linear-gradient(-45deg, rgb(255, 0, 0) 25%, rgba(255, 0, 0, 0) 25%, rgba(
                  255,
                  0,
                  0,
                  0
                )
                75%, rgb(255, 0, 0) 75%, rgb(255, 0, 0));
        background-image: -o-linear-gradient(
            45deg,
            rgb(255, 0, 0) 25%,
            rgba(255, 0, 0, 0) 25%,
            rgba(255, 0, 0, 0) 75%,
            rgb(255, 0, 0) 75%,
            rgb(255, 0, 0)
          ),
          -o-linear-gradient(-45deg, rgb(255, 0, 0) 25%, rgba(255, 0, 0, 0) 25%, rgba(
                  255,
                  0,
                  0,
                  0
                )
                75%, rgb(255, 0, 0) 75%, rgb(255, 0, 0));
        background-image: -ms-linear-gradient(
            45deg,
            rgb(255, 0, 0) 25%,
            rgba(255, 255, 255, 0) 25%,
            rgba(255, 0, 0, 0) 75%,
            rgb(255, 0, 0) 75%,
            rgb(255, 0, 0)
          ),
          -ms-linear-gradient(-45deg, rgb(255, 0, 0) 25%, rgba(255, 0, 0, 0) 25%, rgba(
                  255,
                  0,
                  0,
                  0
                )
                75%, rgb(255, 0, 0) 75%, rgb(255, 0, 0));
        background-image: linear-gradient(
            45deg,
            rgb(255, 0, 0) 25%,
            rgba(255, 0, 0, 0) 25%,
            rgba(255, 0, 0, 0) 75%,
            rgb(255, 0, 0) 75%,
            rgb(255, 0, 0)
          ),
          linear-gradient(
            -45deg,
            rgb(255, 0, 0) 25%,
            rgba(255, 0, 0, 0) 25%,
            rgba(255, 0, 0, 0) 75%,
            rgb(255, 0, 0) 75%,
            rgb(255, 0, 0)
          );
        background-size: 10px 10px;
        -webkit-animation: move 1.2s linear alternate infinite;
        -moz-animation: move 1.2s linear alternate infinite;
        animation: move 1.2s linear alternate infinite;
      }
      
      @-webkit-keyframes move {
        to {
          background-position: 5px -10px;
          background-size: 20px 20px;
        }
      }
      @-moz-keyframes move {
        to {
          background-position: 5px -10px;
          background-size: 20px 20px;
        }
      }
      @keyframes move {
        to {
          background-position: 5px -10px;
          background-size: 20px 20px;
        }
      }
    
      .progress.sparkle .ProgressBars {
        background-color: #f7a806;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABACAMAAADMI7KPAAACZFBMVEX////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////xG13JAAAAzHRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJytLua8SRAAASK0lEQVR42nXWWZMb12H28edsvQJoAINl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');
        box-shadow: inset 0 -2px 2px rgba(0, 0, 0, 0.5),
          inset 0 2px 2px rgba(255, 255, 255, 0.8);
        -webkit-animation: sparkle 1500ms linear infinite;
        -moz-animation: sparkle 1500ms linear infinite;
        -o-animation: sparkle 1500ms linear infinite;
        animation: sparkle 1500ms linear infinite;
      }
      
      @-webkit-keyframes sparkle {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 0 -64px;
        }
      }
      @-moz-keyframes sparkle {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 0 -64px;
        }
      }
      @-o-keyframes sparkle {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 0 -64px;
        }
      }
      @keyframes sparkle {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 0 -64px;
        }
      }
      
      .progress.hearts .ProgressBars {
        background-image: radial-gradient(
            circle closest-side at 60% 43%,
            #b03 26%,
            rgba(187, 0, 51, 0) 27%
          ),
          radial-gradient(
            circle closest-side at 40% 43%,
            #b03 26%,
            rgba(187, 0, 51, 0) 27%
          ),
          radial-gradient(
            circle closest-side at 40% 22%,
            #d35 45%,
            rgba(221, 51, 85, 0) 46%
          ),
          radial-gradient(
            circle closest-side at 60% 22%,
            #d35 45%,
            rgba(221, 51, 85, 0) 46%
          ),
          radial-gradient(
            circle closest-side at 50% 35%,
            #d35 30%,
            rgba(221, 51, 85, 0) 31%
          ),
          radial-gradient(
            circle closest-side at 60% 43%,
            #b03 26%,
            rgba(187, 0, 51, 0) 27%
          ),
          radial-gradient(
            circle closest-side at 40% 43%,
            #b03 26%,
            rgba(187, 0, 51, 0) 27%
          ),
          radial-gradient(
            circle closest-side at 40% 22%,
            #d35 45%,
            rgba(221, 51, 85, 0) 46%
          ),
          radial-gradient(
            circle closest-side at 60% 22%,
            #d35 45%,
            rgba(221, 51, 85, 0) 46%
          ),
          radial-gradient(
            circle closest-side at 50% 35%,
            #d35 30%,
            rgba(221, 51, 85, 0) 31%
          );
        background-color: #b03;
        background-position: 0 0, 0 0, 0 0, 0 0, 0 0, 20px 20px, 20px 20px, 20px 20px,
          20px 20px, 0 0;
        background-size: 40px 40px;
        -webkit-animation: heartmove 1.2s linear infinite;
        -moz-animation: heartmove 1.2s linear infinite;
        animation: heartmove 1.2s linear infinite;
      }
      @-webkit-keyframes heartmove {
        to {
          background-position: 20px 0;
        }
      }
      @-moz-keyframes heartmove {
        to {
          background-position: 20px 0;
        }
      }
      @keyframes heartmove {
        to {
          background-position: 40px 0, 40px 0, 40px 0, 40px 0, 40px 20px, 40px 20px,
            40px 20px, 40px 20px, 40px 20px, 40px 0px;
        }
      }
    `;
};
module.exports = linearProgressStyles;
