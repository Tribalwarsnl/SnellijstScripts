javascript:

//fake script by Sophie "shinko to kuma"
//Validation tribalwars.nl: 13415382

var backgroundColor = "#36393f";
var borderColor = "#3e4147";
var headerColor = "#202225";
var titleColor = "#ffffdf";
var fake_limit = getFakeLimit();


var fakeHtml = `<div id="fakeScript" class="ui-widget-content" style="position:absolute;z-index:50;background-color:${backgroundColor};cursor:move">
<table id="tableBarbShaper" class="vis" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor}">
<tr>
    <tr>
        <td colspan="10" id="fakeScriptTitle" style="text-align:center; width:auto; background-color:${headerColor}">
        <h2>
            <center style="margin:10px"><u>
                    <font color="${titleColor}">Fake Script</font>
                </u>
            </center>
        </h2>
    </td>
    </tr>
    <tr style="background-color:${backgroundColor}">
    <td colspan="10"><textarea id="fakeField" cols="60" rows="12" style="background-color:${backgroundColor};color:${titleColor}" placeholder="Enter coordinates to fake here"></textarea></td>
    </tr>
<tr style="background-color:${backgroundColor}">
<td colspan= "10" style="text-align:center; width:auto; background-color:${backgroundColor}"><input type="button"  class="btn evt-confirm-btn btn-confirm-yes" id="addCoords" href="/game.php?village=6050&amp;screen=place&amp;target=6119&amp;" onclick="storeCoords()" value="Save coordinates" ">
</td></tr>
<tr style="background-color:${backgroundColor}">
     <td style="text-align:center;background-color:${headerColor}" colspan="15"><h2><center style="margin:10px"><u><font color="${titleColor}">Select unit types to fake with</font></u></center></h2></td>
    </tr>
  <tr id="imgRow">
    </tr>
  <tr id="checkboxRow">
  </tr>
  </tr>

</table>
<hr>
<center><img class="tooltip-delayed" title="Sophie -Shinko to Kuma-" src="https://dl.dropboxusercontent.com/s/0do4be4rzef4j30/sophie2.gif" style="cursor:help; position: relative"></center>
<br>
<center>
<p><font color="${titleColor}">Creator: </font><a href="https://forum.tribalwars.net/index.php?members/shinko-to-kuma.121220/" style="text-shadow:-1px -1px 0 ${titleColor},1px -1px 0 ${titleColor},-1px 1px 0 ${titleColor},1px 1px 0 ${titleColor};" title="Sophie profile" target="_blank">Sophie "Shinko to Kuma"</a>
</p>
</center>
</div>`;


if (window.location.href.indexOf('&screen=place') > -1) {

    if ($('#fakeScript').length < 1) {
        openUI();
        $('#fakeScript')[0].style.display = "none";
        $("#contentContainer").before(`<input type="button"  class="btn evt-confirm-btn btn-confirm-yes" id="toggleUI" onclick="$('#fakeScript').toggle()" value="Toggle UI" ">`);
        $("#goTo").after(`<input type="button"  class="btn evt-confirm-btn btn-confirm-yes" id="refill" onclick="fillInTroops()" value="Refill rally point" ">`);
        $('#goTo')[0].style.display = "none";
        $('#addCoords')[0].style.display = "none";
        $('#keepCoords')[0].style.display = "none";
        $('#fakeField')[0].style.display = "none";
    }


    var troopCounts = {};
    $('a[id^=units_entry_all_]').each(function (i, el) {
        var id = $(el).attr('id');
        var unit = id.match(/units_entry_all_(\w+)/)[1];
        var count = $(el).text();
        count = count.match(/\((\d+)\)/)[1];
        troopCounts[unit] = parseInt(count);
    });

    console.log('Got troop counts: ', troopCounts);
    fillInTroops();

}
else {

    openUI();
}

function openUI() {
    $("#contentContainer").before(fakeHtml);
    $("#fakeScript").draggable();
    localUnitNames = [];
    worldUnits = game_data.units;
    for (var i = 0; i < worldUnits.length; i++) {
        if (worldUnits[i] != "militia" && worldUnits[i] != "snob") {
            localUnitNames.push(worldUnits[i]);
        }
    }
    for (var i = 0; i < localUnitNames.length; i++) {
        $("#imgRow").eq(0).append(`<td style="text-align:center;background-color:${headerColor}" ><a href="#" class="unit_link" data-unit="${localUnitNames[i]}"><img src="https://dsen.innogamescdn.com/asset/cf2959e7/graphic/unit/unit_${localUnitNames[i]}.png" title="${localUnitNames[i]}" alt="" class=""></a></td>
`);
        $("#checkboxRow").eq(0).append(`<td align="center" style="background-color:${backgroundColor}"><input type="checkbox" ID="${localUnitNames[i]}" name="${localUnitNames[i]}" checked = "checked" ></td>
`);
    }
    $("#addCoords").after(`<input type="button"  class="btn evt-confirm-btn btn-confirm-yes" id="goTo" onclick="goToRally()" value="Go to rally point" ">`);
    if (localStorage.hasOwnProperty('fakeCoords')) {
        //append button "keep previous coords"
        $("#addCoords").after(`<input type="button"  class="btn evt-confirm-btn btn-confirm-yes" id="keepCoords" onclick="keepCoords()" value="Keep previous coordinates" ">`);
        $("#fakeField")[0].value=localStorage.getItem('fakeCoords');
    }
    else
    {
        $("#goTo").hide();
    }  



    //adding listeners to checkboxes
    if ("checkboxFakeScript" in localStorage) {
        checkboxFakeScript = JSON.parse(localStorage.getItem('checkboxFakeScript'));
        $checkboxes = $("#tableBarbShaper :checkbox");
        for (key in checkboxFakeScript) {
            $("#" + key).prop('checked', checkboxFakeScript[key]);
        }


    }
    else {
        $checkboxes = $("#tableBarbShaper :checkbox");
        checkboxFakeScript = {};
    }
    $checkboxes.on("change", function () {
        console.log("adding listener");
        $checkboxes.each(function () {
            checkboxFakeScript[this.id] = this.checked;
        });
        localStorage.setItem("checkboxFakeScript", JSON.stringify(checkboxFakeScript));
        $.each(checkboxFakeScript, function (key, value) {
            $("#" + key).prop('checked', value);
        });
    });

}

function storeCoords() {
    coordinates = $("#fakeField")[0].value.match(/\d+\|\d+/g);
    localStorage.setItem("fakeCoords", coordinates);
    $("#goTo").show();
}

function getCoords() {
    coords = localStorage.getItem("fakeCoords");
    return coords;
}

function keepCoords() {
    //move on to the next part keeping old coords
    getCoords();
    goToRally();
}
function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].world === nameKey) {
            return myArray[i];
        }
    }
}

function getFakeLimit() {
    fakeLimit = JSON.parse(localStorage.getItem("fakeLimit"));
    // search for key
    if (fakeLimit != null) {
        exists = search(game_data.world, fakeLimit);
    }
    else {
        exists = undefined;
    }
    if (exists != undefined) {
        //return value here
        console.log("Found fake limit in storage: " + exists["Fake Limit"]);
        return exists["Fake Limit"];
    }
    else {
        //grab config and store fake limit into var limit
        var fakeLimit = [];
        var limit = 0;
        $.get("interface.php?func=get_config", function (config) {
            limit = $(config).find("fake_limit")[0].innerHTML;
            fakeLimit.push({ "world": game_data.world, "Fake Limit": limit });
            localStorage.setItem("fakeLimit", JSON.stringify(fakeLimit));
            console.log("Searched for fake limit: " + limit);
            return limit;
        });
    }
}

function getTroopPreferences() {
    //get the status of the checkboxes
    unitsAvailable = JSON.parse(localStorage.getItem("checkboxFakeScript"));
    return unitsAvailable;
}

function goToRally() {
    window.location.assign(game_data.link_base_pure + "place");
}

function fillInTroops() {
    /*
 ATTENTION!! : NEED TO ADD FAKE LIMIT INCASE var fake_limit=1
 so far this script is only dynamic on non-fake limit worlds
    */

    troopArray = getTroopPreferences();
    for (key in game_data.units) {
        document.forms[0][key].value = "";
    }
    console.log(troopArray);
    coords = getCoords();
    var doc = document;
    if (window.frames.length > 0 && window.main != null) doc = window.main.document;
    coords = coords.split(',');
    index = Math.round(Math.random() * (coords.length - 1));
    coordsSplit = coords[index].split('|');
    doc.forms[0].x.value = coordsSplit[0];
    doc.forms[0].y.value = coordsSplit[1];
    $('#place_target').find('input').val(coordsSplit[0] + '|' + coordsSplit[1]);
    for (key in troopArray) {
        console.log(key + ": " + troopArray[key]);
        if (troopArray[key] == true) {
            //check if we can use this one, then fill in and end if we can
            if (troopCounts[key] > 0) {
                doc.forms[0][key].value = 1;
                if (troopArray["spy"] == true && key != "spy") {
                    console.log("Scouts enabled");
                    doc.forms[0].spy.value = 1;
                    break;
                }
            }
        }
    }
}
