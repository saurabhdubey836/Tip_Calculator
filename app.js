function calculate(){
    var amount= parseInt(document.getElementById("billamt").value);
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople= parseInt(document.getElementById("peopleAmt").value);
    var totalAmount = 0


    if(isNaN(amount) || amount=="" ){
        alert("Please Enter a valid number and the number should be numeric")
        document.getElementById("billamt").focus();
    }else if(serviceQual =="0"){
        alert("Please select the valid service");
        document.getElementById("serviceQual").focus();
    } else if (amount <=1){
        amount = 1;
        document.getElementById("billamt").value = 1;
    }

    if(numOfPeople=="" || numOfPeople<=1){
        numOfPeople=1;
        document.getElementById("peopleAmt").value=1;
    }

    totalAmount = (amount * serviceQual) / numOfPeople;
    var total = Math.round(totalAmount*100)/100;

    if(isNaN(total)){
        console.log(total);
    }else{
        document.getElementById("result").innerHTML ="<sup>$</sup>"+"<span>"+total+"</span>";
    }
}