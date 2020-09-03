const componentNotFoundStyles = () => {
  return `#container {
        width: 200px;
        height: 200px;
        padding: 0;
        box-sizing: border-box;
        background: #424f6f;
        border-radius: 5px;
    }
    h3
    {
        font-family: sans-serif;
        color: white;
        padding: 0;
        margin: 0;
    }
    *:after,
    *:before {
        box-sizing: inherit;
    }
    
    #spooky {
        margin: 0 auto;
        width: 80%;
        height: 80%;
        animation: floaty 2s infinite;
        padding-top: 30px;
    }
    
    #spooky #body {
        position: relative;
        margin: 0px auto 0;
        width: 90px;
        height: 110px;
        background: #f2fbf1;
        border-top-left-radius: 45px;
        border-top-right-radius: 45px;
    }
    
    #spooky #body:before,
    #spooky #body:after {
        content: '';
        position: absolute;
        top: 65px;
        display: inline-block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #f2fbf1;
        animation: floaty .2s infinite;
    }
    
    #spooky #body:before {
        left: -9px;
    }
    
    #spooky #body:after {
        right: -9px;
    }
    
    #spooky #body #eyes {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding: 45px 0 0;
        width: 45px;
        height: 10px;
    }
    
    #spooky #body #eyes:before,
    #spooky #body #eyes:after {
        content: ' ';
        display: block;
        width: 15px;
        height: 15px;
        background: #252c49;
        border-radius: 50%;
    }
    
    #spooky #body #mouth {
        background: #252c49;
        margin: 12px auto 0;
        width: 30px;
        height: 30px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    #spooky #body #mouth:before {
        content: ' ';
        display: block;
        background: #fff;
        margin-left: 10px;
        width: 5px;
        height: 5px;
    }
    
    #spooky #body #feet {
        position: absolute;
        display: flex;
        bottom: -9px;
        width: 90px;
        height: 18px;
    }
    
    #spooky #body #feet > *,
    #spooky #body #feet::before,
    #spooky #body #feet::after {
        content: ' ';
        width: 18px;
        height: 18px;
        background: #f2fbf1;
        border-radius: 50%;
    }
    
    #shadow {
        margin: -36px auto 0;
        background: #252c49;
        width: 90px;
        height: 20px;
        border-radius: 50%;
        animation: zoomy 2s infinite;
    }

    @keyframes floaty {
        0%, 100% {
            transform: translateY(0);
        }
    
        50% {
            transform: translateY(-20px);
        }
    }
    
    @keyframes zoomy {
        0%, 100% {
            transform: scale(1);
        }
    
        50% {
            transform: scale(0.8);
        }
    }
    `;
};

module.exports = componentNotFoundStyles