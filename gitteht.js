function jarkka(){
    var luk1, luk2, luk3
    luk1 = parseInt(document.getElementById(eka).value);
    luk2 = parseInt(document.getElementById(toka).value);
    luk3 = parseInt(document.getElementById(kolmas).value);
    document.write("annetut lvut olivat:"+ luku1 + "" + luku2 + "" + luku3 + "<br>");
    if (luku1 < luku2 && luku1 < luku3)
    {
        if (luku2 < luku3)
        {
            document.write("lukujen järjestys on" + luku1 + "" + luku2 + "" + luku3);
        }
        else {
            document.write("lukujen järjestys on" + luku1 + "" + luku3 + "" + luku2);
        }
    }
        else if (luku2 < luku1 && luku2 < luku3){
        if (luku2 < luku3){
            document.write("lukujen järjestys on" + luku2 + "" + luku1 + "" + luku3);
        }
        else{
            document.write("lukujen järjestys on" + luku2 + "" + luku3 + "" + luku1);
        }
    }
    else if(luku3 < luku1 && luku3 < luku2){
        if (luku1 < luku2){
            document.write("lukujen järjestys on" + luku3 + "" + luku1 + "" + luku2);
        }
        else{
            document.write("lukujen järjestys on" + luku3 + "" + luku2 + "" + luku1);
        }
    }
}



function valitse(){
    var num1, num2, num3, num4, num5, suuri;
    num1 = parseInt(document.getElementById(ensimmäinen).value);
    num2 = parseInt(document.getElementById(toinen).value);
    num3 = parseInt(document.getElementById(kolmass).value);
    num4 = parseInt(document.getElementById(neljäs).value);
    num5 = parseInt(document.getElementById(viides).value);
    if (num1 < num2 && num3 < num2 && num4 < num2 && num5 < num2)
    {
        suurin = num2;
    }
    else if (num1 < num3 && num4 < num3 && num5 < num3)
    {
        suurin = num3;
    }
    else if (num1 < num4 && num5 < num4)
    {
        suurin = num4;
    }
    else if (num1 < num5)
    {
        suurin = num5;
    }
    else
    {
        suurin = num1;
    }
    cosument.write("annoit numerot" + num1 + "" + num2 + "" + num3 + "" + num4 + "" + num5)
    document.write("suurin on" + suurin)
}
function oddeven(){
    var luku;
    luku = parseInt(document.getElementById("arvo").value);
    document.write("antamasi luku on" + luku);
    if(luku%2 == 0){
            document.write("<br> luku"+ luku +"on parillinen")
    }
    else{
        document.write("<br> luku"+ luku +"on pariton")
    }

}