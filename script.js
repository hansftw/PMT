function go()
{
    var v = document.getElementById("INv").value;
    var L = document.getElementById("INL").value;
    var t = L / v;
    document.getElementById("t1").innerHTML = t.toString() + "min";
}
function goAuftrag()
{
    document.getElementById("t2").innerHTML = ""; 

    var m = document.getElementById("INmges").value;
    var B = document.getElementById("INB").value;
    var FG = document.getElementById("INfgw").value;
    var rllmmin = document.getElementById("INrllmmin").value;
    var rllmmax = document.getElementById("INrllmmax").value;

    var rm = 4000 / 3; 
    var ber = rm / FG * 1000 / B * 100;
    var str = "3 Rll Tambour: "
    document.getElementById("t2").innerHTML += 
    "<p>" + str + Math.round(ber).toString() + "m, " + 
    Math.round(rm).toString() + "kg</p>";

    rm = 4000 / 2; 
    ber = rm / FG * 1000 / B * 100;
    str = "2 Rll Tambour: "
    document.getElementById("t2").innerHTML += 
    "<p>" + str + Math.round(ber).toString() + "m, " + 
    Math.round(rm).toString() + "kg</p>";

    rm = 4000 / 4; 
    ber = rm / FG * 1000 / B * 100;
    str = "4 Rll Tambour: "
    document.getElementById("t2").innerHTML += 
    "<p>" + str + Math.round(ber).toString() + "m, " + 
    Math.round(rm).toString() + "kg</p>";

    if (rllmmin != 0)
    {
        ber = rllmmin / FG * 1000 / B * 100;
        str = "Rll min: "
        document.getElementById("t2").innerHTML += 
        "<p>" + str + Math.round(ber).toString() + "m, " + 
        Math.round(rllmmin).toString() + "kg</p>";
    }

    if (rllmmax != 0)
    {
        ber = rllmmax / FG * 1000 / B * 100;
        str = "Rll max: "
        document.getElementById("t2").innerHTML += 
        "<p>" + str + Math.round(ber).toString() + "m, " + 
        Math.round(rllmmax).toString() + "kg</p>";
    }

    for (let i = 0; i < 100; i++)
    {
        var t = m / FG * 1000 / B * 100 / i;
        t = Math.round(t / 100) * 100;
        var mrll = t * FG / 1000 * B / 100;

        if ((mrll >= rllmmin && mrll <= rllmmax))
        document.getElementById("t2").innerHTML += 
            "<p>" + i + " Rollen à " + t.toString() + "m, " + 
            mrll.toString() + "kg</p>";
    }
}