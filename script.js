var calculate = document.getElementById("calculate")
var output = document.getElementById("output")

calculate.addEventListener('click', () => {
    var dobe = document.getElementById("dob").value;
    var dob_date = document.getElementById("dob").value.slice(8, 10);
    var dob_month = document.getElementById("dob").value.slice(5, 7);
    var dob_year = document.getElementById("dob").value.slice(0, 4);

    var now = new Date;
    var today_date = now.getDate()
    var today_month = (now.getMonth()) + 1
    var today_year = now.getFullYear()
    var month = [31, 28, , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    console.log(dobe)
    if (dobe == "") {
        output.innerHTML = `🙁 Select Your DOB`;
    }
    else if((today_year < dob_year)||((today_year == dob_year) && (today_month < dob_month))||((today_year == dob_year)&&(today_month == dob_month)&&(today_date < dob_date))){
        output.innerHTML = `😍 Welocme Time Travellor`;
    }
   
    else if(today_month > dob_month) {
        if (today_date >= dob_date) {
            var total_years = (today_year - dob_year);
            var total_month = (today_month - dob_month);
            var total_day = today_date - dob_date;
        }
        else {
            var total_years = (today_year - dob_year);
            var total_month = (today_month - dob_month) - 1;
            var total_day = (today_date + (month[today_month - 2]) - dob_date)

        }
        output.innerHTML = ` ${total_years} Years &nbsp;${total_month} Month &nbsp; ${total_day} Day `;
    }
    else {
        if (today_date > dob_date) {
            var total_years = (today_year - dob_year) - 1;
            var total_month = ((12 - dob_month) + today_month - 1);
            var total_day = today_date - dob_date;
        }
        else {
            var total_years = (today_year - dob_year) - 1;
            var total_month = ((12 - dob_month) + today_month - 1);
            var total_day = (today_date + (month[today_month - 2]) - dob_date)
        }
        output.innerHTML = ` ${total_years}Years &nbsp;&nbsp;${total_month}Month &nbsp;&nbsp; ${total_day}Day `;
    };
    

})
