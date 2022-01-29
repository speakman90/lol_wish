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

$("#yi").click(function(){
    var yi = "#yi";
    equipe(yi, yii);
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


let temps = 30;

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
        bleu.push(o);
    } else if (q <= 4) {
        $('#ar_red').append($(a))
        $(a).removeClass('blue')
        $(a).addClass("rouge")
        rouge.push(o);
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
    
    if((randItem() > 0 && randItem() < 1000) && temps == randItem_b()) {
        bleu.push(cleaver);
        $('#gauche').append("<div class='cleaver'></div>")
    } else if((randItem() > 0 && randItem() < 1000) && temps == randItem_r()) {
        rouge.push(cleaver);
        $('#droite').append("<div class='cleaver'></div>")
    }
}


function nivExp() {

    if (temps == randExp_b()) {
        $('#gauche').append("<h3 style='color:white'> ",randChamp()," prend 1 niveaux </h3>")
    }

    if (temps == randExp_r()) {
        $('#droite').append("<h3 style='color:white'> ",randChamp()," prend 1 niveaux </h3>")
        }
}


///////////////////////////////////////////////////////////////////////////////////////////////////
const champions = [xin=9.63, jinx=11.01, wukong=9.78, yii=10.41, garen=9.88, fizz=10.63, ezreal=12.51, tresh=3.61, ivern=4.6, yasuo=9.78];

const rouge = [];
const bleu = [];
///////////////////////////////////////////////////////////////////////////////////////////////////

function randItem() {
    const itemRand = Math.floor((Math.random() * 5000) + 1);
    return itemRand;
};

function randNiv() {
    const randNiv = Math.floor((Math.random() * 300) + 1);
    return randNiv;
}

function randChamp() {
    const champRand = champions[Math.floor(Math.random() * champions.length)];
    return champRand;
}

function randItem_r() {
    const randTime_item_r = Math.floor((Math.random() * 29) + 1);
    return randTime_item_r;
}

function randItem_b() {
    const randTime_item_b = Math.floor((Math.random() * 29) + 1);
    return randTime_item_b;
}

function randExp_r() {
    const randTime_exp_r = Math.floor((Math.random() * 29) + 1);
    return randTime_exp_r;
}

function randExp_b() {
    const randTime_exp_b = Math.floor((Math.random() * 29) + 1);
    return randTime_exp_b;
}



const items = [botte=2, cleaver=5]

})