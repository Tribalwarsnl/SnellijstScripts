javascript: $("#gss").remove(); 
function numberWithCommas(x) { 
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 
} 
$.ajax({ 
    url: "game.php?mode=awards&screen=info_player", 
}).done(function (data) { 
    var plunderVandaag = $('strong:contains("Plunderaar")', data).first().closest('div').text().match(/\d+\.\d+\.\d+\.\d+|\d+\.\d+\.\d+|\d+\.\d+|\d+/g); 
    var roverVandaag = $('strong:contains("Rover")', data).first().closest('div').text().match(/\d+\.\d+\.\d+\.\d+|\d+\.\d+\.\d+|\d+\.\d+|\d+/g); 
    var plunderNumbers = $('strong:contains("Plunderaar")', data).last().closest('div').text().match(/\d+\.\d+\.\d+\.\d+|\d+\.\d+\.\d+|\d+\.\d+|\d+/g); 
    var roverNumbers = $('strong:contains("Rover")', data).last().closest('div').text().match(/\d+\.\d+\.\d+\.\d+|\d+\.\d+\.\d+|\d+\.\d+|\d+/g); 
    var vrover = roverVandaag[roverVandaag.length - 2].replace(/\./g,''); 
    var vplunderaar = plunderVandaag[plunderVandaag.length - 2].replace(/\./g,''); 
    if (roverNumbers.length == 3) { 
        var rover = roverNumbers[roverNumbers.length - 1].replace(/\./g,''); 
    } else { 
        var rover = roverNumbers[roverNumbers.length - 2].replace(/\./g,''); 
    } 
    if (plunderNumbers.length == 3) { 
        var plunderaar = plunderNumbers[plunderNumbers.length - 1].replace(/\./g,''); 
    } else { 
        var plunderaar = plunderNumbers[plunderNumbers.length - 2].replace(/\./g,''); 
    } 
    $("#content_value").prepend("<div id=\"gss\" style=\"background-color:#F4E4BC;display:none;\"><h4 style='background-image: url(\"http://cdn.tribalwars.net/graphic/screen/tableheader_bg3.png\");background-repeat: repeat-x;font-size: 9pt;font-weight: 700;font-style:normal;'>Farmstats</h4><p>Forum/PM BBcode<pre></pre></p><p>Plain text:<textarea style='display:block;' rows='10' cols='40' id='pt'>Aantal dorpen vandaag: " + numberWithCommas(vplunderaar) + "\nAantal Gefarmd vandaag: " + numberWithCommas(vrover) + "\nGemiddelde buit per aanval: " + numberWithCommas(Math.round(vrover / vplunderaar)) + "\n\nAantal dorpen altijd: " + numberWithCommas(plunderaar) + "\nAantal Gefarmd altijd: " + numberWithCommas(rover) + "\nGemiddelde buit per aanval: " + numberWithCommas(Math.round(rover / plunderaar)) + "</textarea></p><a href=\"javascript:void($('#gss').slideUp());\">Sluiten</a></div>"); 
    $("#gss").slideDown(); 
}); 
void(0);
