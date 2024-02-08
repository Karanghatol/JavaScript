function convert() {
    let num = parseFloat(document.getElementById("num").value);
    const select = document.getElementById("select");
    const select2 = document.getElementById("select2");

    if (select.value === "usa" && select2.value === "rupee") {
        num *= 85;
        document.getElementById("output").innerHTML = num + " Rs";
    } else if (select.value === "euro" && select2.value === "rupee") {
        num *= 89.3422;
        document.getElementById("output").innerHTML = num + " Rs";
    } else if (select.value === "rupee" && select2.value === "rupee") {
        document.getElementById("output").innerHTML = num + " Rs";
    } else if (select.value === "usa" && select2.value === "euro") {
        num *= 0.9288; // 1 / 1.0765
        document.getElementById("output").innerHTML = num + " Euro";
    } else if (select.value === "usa" && select2.value === "rupee") {
        num *= 85;
        document.getElementById("output").innerHTML = num + " Rs";
    } else if (select.value === "euro" && select2.value === "usa") {
        num *= 1.0765;
        document.getElementById("output").innerHTML = num + " USD";
    } else if (select.value === "euro" && select2.value === "rupee") {
        num *= 85; // Adjust the conversion rate as needed
        document.getElementById("output").innerHTML = num + " Rs";
    } else if (select.value === "rupee" && select2.value === "euro") {
        num *= 0.0117; // 1 / 85
        document.getElementById("output").innerHTML = num + " Euro";
    } else if (select.value === "rupee" && select2.value === "usa") {
        num *= 0.0117; // 1 / 85
        document.getElementById("output").innerHTML = num + " USD";
    }
}
