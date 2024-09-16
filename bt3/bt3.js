var no = 0;
var totalAmount = 0;
function add() {
    no++;
    var pname = document.form.pn.value;
    var qty = document.form.qty.value;
    var price = document.form.up.value;
    if (!pname || isNaN(qty) || isNaN(price)) {
        alert("Please enter valid information.");
        return;
    }
    var sub = qty * price;
    totalAmount += sub;
    var row = "<tr>";
    row += "<td>" + no + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + sub + "</td>";
    row += "</tr>";
    document.getElementById("table-body").innerHTML += row;
    document.getElementById("total").innerHTML = totalAmount;
    document.form.pn.value = '';
    document.form.qty.value = '';
    document.form.up.value = '';
}