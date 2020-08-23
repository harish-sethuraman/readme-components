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
    .header .repo{
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
    .header .repo-details{
    display: flex; flex-direction: column; margin-left: 12px;
    }
    .header .repo-details .name {
    font-weight: 500; color:#000; font-size: 12px;
    }
    .name:first-letter{
       text-transform: uppercase;
    } 
    .header .image{
    width: 18px; height: 18px; border-radius: 15%;
    }
    .header .github-icon{
    display: flex;
    font-size:10px;
    }

    .contributor{
    display: flex; align-items: center;
    justify-content: space-between;
    padding: 5px 17px  5px 17px;
    }
    .contributor .profile{
    display: flex;
    justify-content: space-around;
    align-items: center;
    }
    .contributor .userdetails{
    display: flex; flex-direction: column; margin-left: 12px
    }
    .contributor .userdetails .name {
    font-weight: 500; color:#ef8236; font-size: 12px;
    }
    .name:first-letter{
       text-transform: uppercase;
    }
    .contributor .userdetails .location{
    font-weight: 400; color: #586069; font-size: 11px
    }
    .contributor .image{
    width: 25px; height: 25px; border-radius: 50%;
    }
    .contributor .report{
    display: flex;
    font-size:10px;
    }
    .contributor .report .answers{
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .contributor .report .questions{
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .contributor .report .reached {
    display: flex;
    flex-direction: column;
    margin:0 5px;
    align-items: center;
    font-weight: 600;
    }
    .contributor .report .answers::after{
    content: "Answers"
    }
    .contributor .report .questions::after{
    content: "Questions"
    }
    .contributor .report .reached::after{
    content: "Profile views";
    white-space: nowrap;
    }
    .contributor .report .legend{
    	list-style-type: none;
    	margin: 0px;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }
    .contributor .report .legend li{
    	    display: inline-block;
    width: 10px;
    height: 10px;
    margin:1.5px;
    border-radius: 2px;
    box-shadow: inset 0 0 0 1px rgba(27,31,35,.04);
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
