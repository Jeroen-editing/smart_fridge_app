let date = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
const months = ["january", "february", "march", "april", "mei", "june", "july",
                "august", "september", "october", "november", "december" ]; 


const time = () => {
    let hour = `${date.getHours() < 10 ? '0' : ''}${date.getHours()}`;
    let minutes = `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;

    let dayAndTime = `${days[date.getDay()]}, ${hour}:${minutes}`;
    
    document.getElementById("dayTime").innerHTML = dayAndTime;
    document.getElementById("dayAndTime").innerHTML= dayAndTime;
    document.getElementById("timeDay").innerHTML = dayAndTime;
    document.getElementById("formTime").innerHTML = dayAndTime;
}


const copyRight = () => {
    let today = `${date.getDate()} ${months[date.getMonth()]} &nbsp;&nbsp; ${date.getFullYear()}`;

    document.getElementById("copyRights").innerHTML = `&copy;&nbsp;&nbsp; Antwerp:&nbsp;&nbsp; ${today}`;
}

time();
copyRight();