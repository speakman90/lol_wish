$(function(){


$("#xin").click(function(){
    var x = "#xin";
    equipe(x, xin);
});

$("#jinx").click(function(){
    var j = "#jinx";
    equipe(j, jinx);
});

$("#wukong").click(function(){
    var w = "#wukong";
    equipe(w, wukong);
});

$("#master").click(function(){
    var m = "#master";
    equipe(m, master);
});

$("#garen").click(function(){
    var g = "#garen";
    equipe(g, garen);
});

$("#fizz").click(function(){
    var f = "#fizz";
    equipe(f, fizz);
});

$("#ezreal").click(function(){
    var e = "#ezreal";
    equipe(e, ezreal);
});

$("#tresh").click(function(){
    var t = "#tresh";
    equipe(t, tresh);
});

$("#ivern").click(function(){
    var i = "#ivern";
    equipe(i, ivern);
});

$("#yasuo").click(function(){
    var y = "#yasuo";
    equipe(y, yasuo);
    
});


let temps = 5;

$("#go").click(function(){

    $("#go").prop('disabled', true);
    const interval = setInterval(timer, 1000)

    function timer() {
        $("#timer").html(temps)
        temps--;
        nivExp()
        spawnitem()
            if (temps == -1) {
                clearInterval(interval)
                $("#timer").css("visibility", "hidden")
                runbagare();
            }
        }
    
    
})

$('#resett').click(function(){
    location.reload()
})


/////////////////////////////////////////////////////////////////

function equipe(a,o) {
    var m = $(".blue").length;
    var q = $(".rouge").length;
    var a;
    var o;

    $(a).removeClass('champs')
    $(a).addClass('blue')

    if (m < 5) {
        $('#ar_blue').append($(a))
        bleu.push(o.attaque);
        bleup.push(o.pseudo);
        console.log(bleu)
    } else if (q <= 4) {
        $('#ar_red').append($(a))
        $(a).removeClass('blue')
        $(a).addClass("rouge")
        rouge.push(o.attaque);
        rougep.push(o.pseudo)
    }
    
    if (m == 5 && q == 4) {
        $("#go").removeClass("run")
        $('#title-gen').text("Bienvenue sur league of legend du pauvre")
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
    
    if((randItem() > 0 && randItem() < 4999) && temps == randItem_b()) {
        bleu.push(botte);
        $('#gauche').append("<div class='botte'></div>")
    }else if ((randItem() > 0 && randItem() < 4999) && temps == randItem_r()) {
        rouge.push(botte);
        $('#droite').append("<div class='botte'></div>")
    }
    if((randItem() > 0 && randItem() < 4999) && temps == randItem_b()) {
        bleu.push(cleaver);
        $('#gauche').append("<div class='cleaver'></div>")
    } else if((randItem() > 0 && randItem() < 4999) && temps == randItem_r()) {
        rouge.push(cleaver);
        $('#droite').append("<div class='cleaver'></div>")
    }
}


function nivExp() {

    if (temps == randExp_b()) {
        $('#gauche').append("<h3> ",randChamp_b()," prend 1 niveaux </h3>").css("color","white")
    }
    if (temps == randExp_r()) {
        $('#droite').append("<h3 style='color:white'> ",randChamp_r()," prend 1 niveaux </h3>").css("color","white")
    }
}




///////////////////////////////////////////////////////////////////////////////////////////////////

let xin = new Object()
    xin.pseudo= "xin";
    xin.attaque= 9.63;

let jinx = new Object();
    jinx.pseudo= "jinx";
    jinx.attaque= 11.01;

let wukong = new Object();
    wukong.pseudo= "wukong";
    wukong.attaque= 9.78;

let master = new Object();
    master.pseudo= "maître yi";
    master.attaque= 10.41;

let garen = new Object();
    garen.pseudo= "garen";
    garen.attaque= 9.88;

let fizz = new Object();
    fizz.pseudo= "fizz";
    fizz.attaque= 10.63;

let ezreal = new Object();
    ezreal.pseudo= "ezreal";
    ezreal.attaque= 12.51;

let tresh = new Object();
    tresh.pseudo= "tresh";
    tresh.attaque= 3.61;

let ivern = new Object();
    ivern.pseudo= "ivern";
    ivern.attaque= 4.6;

let yasuo = new Object();
    yasuo.pseudo= "yasuo";
    yasuo.attaque= 9.78;

const rouge = [];
const rougep = [];
const bleu = [];
const bleup = [];
///////////////////////////////////////////////////////////////////////////////////////////////////

function randItem() {
    const itemRand = Math.floor((Math.random() * 5000) + 1);
    return itemRand;
};

function randChamp_b() {
    const champRand_b = bleup[Math.floor(Math.random() * bleup.length)];
    return champRand_b;
}

function randChamp_r() {
    const champRand_r = rougep[Math.floor(Math.random() * rougep.length)];
    return champRand_r;
}

function randItem_r() {
    const randTime_item_r = Math.floor((Math.random() * 4) + 1);
    return randTime_item_r;
}

function randItem_b() {
    const randTime_item_b = Math.floor((Math.random() * 4) + 1);
    return randTime_item_b;
}

function randExp_r() {
    const randTime_exp_r = Math.floor((Math.random() * 4) + 1);
    return randTime_exp_r;
}

function randExp_b() {
    const randTime_exp_b = Math.floor((Math.random() * 4) + 1);
    return randTime_exp_b;
}



const items = [botte=2, cleaver=5]

})