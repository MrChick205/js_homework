var id = 0;
function sell() {
    id++;
    var pname = document.form.pn.value;
    var qty = parseFloat(document.form.qty.value);
    var price = parseFloat(document.form.up.value);
    var dc = parseFloat(document.form.dc.value);

    if (!pname || isNaN(qty) || isNaN(price) || isNaN(dc)) {
        alert("Please enter valid information.");
        return;
    }
    var sub = qty * price * (1 - dc / 100);
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + dc + "</td>";
    row += "<td>" + sub + "</td>";
    row += "</tr>";
    document.getElementById("tbl").innerHTML += row;
    clearForm();
}

function clearForm() {
    document.form.pn.value = '';
    document.form.qty.value = '';
    document.form.up.value = '';
    document.form.dc.value = '';
}