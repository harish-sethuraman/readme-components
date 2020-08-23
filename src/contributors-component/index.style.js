const constributorsStyle = () => {
  return `		   
  a{
    text-decoration: none;
    color:inherit;
    }
    .container{
    font-family: Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    line-height: 1.5;
    border-radius: 4px;
    background: #fafafa;
    max-width: 405px;
    margin:12px;
    font-size: 13px;
    color: #24292e;
    box-shadow:0 2px 10px 3px rgb(0 0 0 / 0.2);
    }
        .header{
        	border-top-right-radius:4px;
        	border-top-left-radius:4px;
    display: flex; align-items: center;
    justify-content: space-between;
    background-color: #cccccc;
    padding:8px 17px;
    }
    .header .profile{
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
    .header .userdetails{
    display: flex; flex-direction: column; margin-left: 12px;
    }
    .header .userdetails .name {
    font-weight: 500; color:#000; font-size: 12px;
    }
    .name:first-letter{
       text-transform: uppercase;
    }
    .header .userdetails .location{
    font-weight: 400; color: #586069; font-size: 11px
    }
    .header .image{
    width: 18px; height: 18px; border-radius: 15%;
    }
    .header .report{
    display: flex;
    font-size:10px;
    }
    .header .report .answers{
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .header .report .questions{
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .header .report .reached {
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .header .report .answers::after{
    content: "Answers"
    }
    .header .report .questions::after{
    content: "Questions"
    }
    .header .report .reached::after{
    content: "Profile views";
    white-space: nowrap;
    }





    .section1{
    display: flex; align-items: center;
    justify-content: space-between;
    padding: 5px 17px  5px 17px;
    }
    .section1 .profile{
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
    .section1 .userdetails{
    display: flex; flex-direction: column; margin-left: 12px
    }
    .section1 .userdetails .name {
    font-weight: 500; color:#ef8236; font-size: 12px;
    }
    .name:first-letter{
       text-transform: uppercase;
    }
    .section1 .userdetails .location{
    font-weight: 400; color: #586069; font-size: 11px
    }
    .section1 .image{
    width: 25px; height: 25px; border-radius: 50%;
    }
    .section1 .report{
    display: flex;
    font-size:10px;
    }
    .section1 .report .answers{
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .section1 .report .questions{
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .section1 .report .reached {
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .section1 .report .answers::after{
    content: "Answers"
    }
    .section1 .report .questions::after{
    content: "Questions"
    }
    .section1 .report .reached::after{
    content: "Profile views";
    white-space: nowrap;
    }
    .section1 .report .legend{
    	list-style-type: none;
    	margin: 0px;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }
    .section1 .report .legend li{
    	    display: inline-block;
    width: 10px;
    height: 10px;
    margin:1.5px;
    border-radius: 2px;
    box-shadow: inset 0 0 0 1px rgba(27,31,35,.04);
    }
    .section2{
    margin-top: 12px; display: flex; justify-content: space-between; align-items: center;
    }
    .section2 .reputation{
    display: flex; flex-direction: column;
    }
    .section2 .reputation .text{
    font-size: 10px; font-weight: 500; color: #586069;
    }
    .section2 .reputation .value{
    font-weight: 600; color:#211F1F; font-size: 30px; line-height: 1;
    }
    .section2 .badges{
    display: flex; flex-direction: column; margin-top: -4px;
    }
    .section2 .badges .text{
    font-size: 11px; font-weight: 500; color: #586069;
    }
    .section2 .badges .badgeicon{
    display: flex; flex-direction: row; font-weight: 400; color: #211F1F; font-size: 10px; margin-top: 2px;
    }
    .section2 .badges .badgeicon .gold {
    display: flex;
    min-width: 45px; text-align: center; padding: 4px 4px 4px 0px; background-color: #fff4d1; border: 1px solid #f1b600; border-radius: 5px
    }
    .section2 .badges .badgeicon .silver::before{
    content: '';
    margin: auto 10px;
    border-radius: 50%;
    background-color: #9e9e9e;
    height: 7.5px;
    width: 7.5px;
    }
    .section2 .badges .badgeicon .silver{
    display: flex;
    min-width: 45px; text-align: center; padding: 4px 4px 4px 0px; background-color: #e8e8e8; margin: 0 4px 0 4px; border: 1px solid #9a9c9f; border-radius: 5px;
    }
    .section2 .badges .badgeicon .gold::before{
    content: '';
    margin: auto 10px;
    border-radius: 50%;
    background-color: #FFC107;
    height: 7.5px;
    width: 7.5px;
    }
    .section2 .badges .badgeicon .bronze{
    display: flex;
    min-width: 45px; text-align: center; padding: 4px 4px 4px 0px; background-color: #f2e9e1; border: 1px solid #ab825f; border-radius: 5px;
    }
    .section2 .badges .badgeicon .bronze::before{
    content: '';
    margin: auto 10px;
    border-radius: 50%;
    background-color: #c68d79;
    height: 7.5px;
    width: 7.5px;
    }
    .dark-card{
        color:#f6f6f6;
        background-color:#2a2a2a;
        border:2px solid #2a2a2a;
    }
    .dark-text{
        color:white !important;
    }       
    .divider{
    	height:0.7px;
    	width: 100%;
    	background-color: #c6c6c6;
    	margin:5px 0px;

    }`;
};

module.exports = contributorsStyle;
