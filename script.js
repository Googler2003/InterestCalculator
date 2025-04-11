function calculate(){
    var principalElement = document.getElementById("principal");
    var interestElement = document.getElementById("interest");
    var yearsElement = document.getElementById("years");
    var totalElement = document.getElementById("total");
    var interestEarned = document.getElementById("interest-earned");
    var principle = document.getElementById("principle");
    var p = Number(principalElement.value);
    var r = Number(interestElement.value);
    var t = Number(yearsElement.value);

    if(p < 0 || isNaN(p)){
        // alert("Please enter valid amount !");
        p = 0;
        principalElement.value = 0;
    }

    if(t < 0 || isNaN(t)){
        t = 0;
        yearsElement.value = 0;
        // alert("Please enter valid value for years !");
    }

    if(r < 0 || isNaN(r)){
        r = 0;
        interestElement.value = 0;
        // alert("Please enter valid interest rate !");
    }

    var interestAmt = Number((p * t * r) / 100);
    var totalAmount = Number(interestAmt + p);

    principle.textContent = principalElement.value;
    totalElement.textContent = totalAmount.toLocaleString(undefined, {style: "currency", currency: "INR"});
    interestEarned.textContent = interestAmt.toLocaleString(undefined, {style: "currency" , currency: "INR"});
}
