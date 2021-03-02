function calcTip() {
    var cost_input = document.getElementById('cost').value;
    var service_input = document.getElementById('service').value;
    var people_input = document.getElementById('people').value;

    var tip_each = ((cost_input * service_input) / (people_input));
    document.getElementById('tip').innerHTML = "Rs " + tip_each;
}



