$(function(){


$("#xin").click(function(){
    var x = $("#xin");
    equipe(x, xin);
    showButton(); 
});

$("#jinx").click(function(){
    var j = $("#jinx");
    equipe(j, jinx);
    showButton();
});

$("#wukong").click(function(){
    var w = $("#wukong");
    equipe(w, wukong);
    showButton();
});

$("#yi").click(function(){
    var yi = $("#yi");
    equipe(yi, yii);
    showButton();
});

$("#garen").click(function(){
    var g = $("#garen");
    equipe(g, garen);
    showButton();
});

$("#fizz").click(function(){
    var f = $("#fizz");
    equipe(f, fizz);
    showButton();
});

$("#ezreal").click(function(){
    var e = $("#ezreal");
    equipe(e, ezreal);
    showButton();
});

$("#tresh").click(function(){
    var t = $("#tresh");
    equipe(t, tresh);
    showButton();
});

$("#ivern").click(function(){
    var i = $("#ivern");
    equipe(i, ivern);
    showButton();
});

$("#yasuo").click(function(){
    var y = $("#yasuo");
    equipe(y, yasuo);
    showButton();
});


$("#go").click(function(){

    const interval = setInterval(timer, 1000)
    var i = 30;

        function timer() {
            $("#timer").html(i);
            i--
                if (i == -1) {
                    clearInterval(interval)
                    $("#timer").css("visibility", "hidden")
                    spawnitem()
                    runbagare();
                }
            }
})

$('#resett').click(function(){
    location.reload()
})


/////////////////////////////////////////////////////////////////
function showButton () {
var r = $(".rouge").length;
var b = $(".blue").length;

if (r == 5 && b == 5) {
        $("#go").removeClass("run")
        $('#title-gen').text("Bienvenue sur league of legend du pauvre")
    }
}

function equipe(a,o) {
    var n = $(".champs").length;
    var m = $(".blue").length;
    var q = $(".rouge").length;
    var a;
    var o;

    $(a).removeClass("champs")
    $(a).addClass('blue')

    if (m <= 4) {
        $('#ar_blue').append($(a))
        bleu.push(o.attaque);
    } else if (q <= 4) {
        $('#ar_red').append($(a))
        $(a).removeClass('blue')
        $(a).addClass("rouge")
        rouge.push(o.attaque);
    }
}

function runbagare() {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    if (bleu.reduce(reducer) < rouge.reduce(reducer)){
            $('#victory').text("ROUGE GAGNE").css("visibility", "visible").addClass("roug");
    } else {
            $('#victory').text("BLEU GAGNE").css("visibility", "visible").addClass("ble");
    }
}

function spawnitem() {
    if(rand > 0 && rand < 4999) {
        bleu.push(item.botte);
        rouge.push(item.botte);
        $('#gauche').append("<div class='botte'></div>")
        $('#droite').append("<div class='botte'></div>")
    }
    
    if(rand > 500 && rand < 1000) {
        bleu.push(item.cleaver);
        $('#gauche').append("<div class='cleaver'></div>")
    } 
    
    if(rand > 0 && rand < 500) {
        rouge.push(item.cleaver);
        $('#droite').append("<div class='cleaver'></div>")
    }
}



///////////////////////////////////////////////////////////////////////////////////////////////////

const xin = {
    attaque: 9.63
}

const jinx = {
    attaque: 11.01
}
const wukong = {
    attaque: 9.78
}
const yii = {
    attaque: 10.41
}
const garen = {
    attaque: 9.88
}
const fizz = {
    attaque: 10.63
}
const ezreal = {
    attaque: 12.51
}
const tresh = {
    attaque: 3.61
}
const ivern = {
    attaque: 4.6
}
const yasuo = {
    attaque: 9.78
}

var rouge = [];
var bleu = [];
///////////////////////////////////////////////////////////////////////////////////////////////////

var rand = Math.floor((Math.random() * 5000) + 1);


const item = {
    botte: 2,
    cleaver: 5
}

})