function main (){
    $('.running1').hide();
    //$('.Standing').hide();
    $('.running2').hide();
    $('.running3').hide();
    $('.Plant').hide();
    $('.PlantA').hide();
    $('.Headleft').hide();
    $('.runningleft1').hide();
    $('.powerUp').hide();
    $('.powerUpA').hide();
    $('.powerUpB').hide();
    $('.powerUpC').hide();
    $('.Standingleft').hide();
    $('.runningleft2').hide();
    $('.runningleft3').hide();
    
// Moving left
    
    $('.leftside').on('click', function(){
        $('.running1').hide();
        $('.running2').hide();
        $('.running3').hide();
        $('.Standing').hide();
        $('.Standingleft').hide();
        $('.runningleft1').show();
        $('.Mariohead').hide();
        $('.Headleft').show();
        $('.Pipe').animate({left: "+=2em"});
        $('.PipeA').animate({left: "+=2em"});
        $('.Cloud').animate({left: "+=1em"});
        $('.Cloud2').animate({left: "+=1em"});
        $('.Cloud3').animate({left: "+=1em"});
        $('.Menu.item').animate({left: "+=2em"});
        $('.Menu.item2').animate({left: "+=2em"});
        $('.menu.text').animate({left: "+=0.3em"});
        $('.menu.text2').animate({left: "+=0.3em"});
        $('.Plant').animate({left: "+=2em"});
        $('.PlantA').animate({left: "+=2em"});
        $('.leftside1').css("zIndex", "+=1");
        $('.road').animate({'background-position-x': "+=2em"});
        $('.Goomba').animate({left: "+=3em"});
        $('.Goomba2').animate({left: "+=3em"});
        $('.Goomba3').animate({left: "+=3em"});
        $('.powerUp').animate({left: "+=2em"});
        $('.powerUpA').animate({left: "+=2em"});
        $('.powerUpB').animate({left: "+=2em"});
        $('.powerUpC').animate({left: "+=2em"});
    });    
    $('.leftside1').on('click', function(){
        $('.Standing').hide();
        $('.running1').hide();
        $('.running2').hide();
        $('.running3').hide();
        $('.runningleft1').hide();
        $('.runningleft2').show();
        $('.Mariohead').hide();
        $('.Headleft').show();
        $('.Pipe').animate({left: "+=2em"});
        $('.PipeA').animate({left: "+=2em"});
        $('.Cloud').animate({left: "+=1em"});
        $('.Cloud2').animate({left: "+=1em"});
        $('.Cloud3').animate({left: "+=1em"});
        $('.Menu.item').animate({left: "+=2em"});
        $('.Menu.item2').animate({left: "+=2em"});
        $('.menu.text').animate({left: "+=0.3em"});
        $('.menu.text2').animate({left: "+=0.3em"});
        $('.Plant').animate({left: "+=2em"});
        $('.PlantA').animate({left: "+=2em"});
        $('.leftside2').css("zIndex", "+=1");
        $('.road').animate({'background-position-x': "+=2em"});
        $('.Goomba').animate({left: "+=3em"});
        $('.Goomba2').animate({left: "+=3em"});
        $('.Goomba3').animate({left: "+=3em"});
        $('.powerUp').animate({left: "+=2em"});
        $('.powerUpA').animate({left: "+=2em"});
        $('.powerUpB').animate({left: "+=2em"});
        $('.powerUpC').animate({left: "+=2em"});
    });
    $('.leftside2').on('click', function(){
        $('.Standing').hide();
        $('.running1').hide();
        $('.running2').hide();
        $('.running3').hide();
        $('.runningleft2').hide();
        $('.runningleft3').show();
        $('.Mariohead').hide();
        $('.Headleft').show();
        $('.Pipe').animate({left: "+=2em"});
        $('.PipeA').animate({left: "+=2em"});
        $('.Cloud').animate({left: "+=1em"});
        $('.Cloud2').animate({left: "+=1em"});
        $('.Cloud3').animate({left: "+=1em"});
        $('.Menu.item').animate({left: "+=2em"});
        $('.Menu.item2').animate({left: "+=2em"});
        $('.menu.text').animate({left: "+=0.3em"});
        $('.menu.text2').animate({left: "+=0.3em"});
        $('.Plant').animate({left: "+=2em"});
        $('.PlantA').animate({left: "+=2em"});
        $('.leftside3').css("zIndex", "+=1");
        $('.road').animate({'background-position-x': "+=2em"});
        $('.Goomba').animate({left: "+=3em"});
        $('.Goomba2').animate({left: "+=3em"});
        $('.Goomba3').animate({left: "+=3em"});
        $('.powerUp').animate({left: "+=2em"});
        $('.powerUpA').animate({left: "+=2em"});
        $('.powerUpB').animate({left: "+=2em"});
        $('.powerUpC').animate({left: "+=2em"});
    });
    $('.leftside3').on('click', function(){
        $('.Standing').hide();
        $('.running1').hide();
        $('.running2').hide();
        $('.running3').hide();
        $('.runningleft3').hide();
        $('.Standingleft').show();
        $('.Mariohead').hide();
        $('.Headleft').show();
        $('.Pipe').animate({left: "+=2em"});
        $('.PipeA').animate({left: "+=2em"});
        $('.Cloud').animate({left: "+=1em"});
        $('.Cloud2').animate({left: "+=1em"});
        $('.Cloud3').animate({left: "+=1em"});
        $('.Menu.item').animate({left: "+=2em"});
        $('.Menu.item2').animate({left: "+=2em"});
        $('.menu.text').animate({left: "+=0.3em"});
        $('.menu.text2').animate({left: "+=0.3em"});
        $('.Plant').animate({left: "+=2em"});
        $('.PlantA').animate({left: "+=2em"});
        $('.leftside').css("zIndex", "+=1");
        $('.road').animate({'background-position-x': "+=2em"});
        $('.Goomba').animate({left: "+=3em"});
        $('.Goomba2').animate({left: "+=3em"});
        $('.Goomba3').animate({left: "+=3em"});
        $('.powerUp').animate({left: "+=2em"});
        $('.powerUpA').animate({left: "+=2em"});
        $('.powerUpB').animate({left: "+=2em"});
        $('.powerUpC').animate({left: "+=2em"});
    });
    
    
    // Moving Right
    
        
    $('.rightside').on('click', function(){
        $('.Standingleft').hide();
        $('.runningleft1').hide();
        $('.runningleft2').hide();
        $('.runningleft3').hide();
        $('.Headleft').hide();
        $('.Mariohead').show();
        $('.Standing').hide();
        $('.running1').show();
        $('.Pipe').animate({left: "-=2em"});
        $('.PipeA').animate({left: "-=2em"});
        $('.Cloud').animate({left: "-=1em"});
        $('.Cloud2').animate({left: "-=1em"});
        $('.Cloud3').animate({left: "-=1em"});
        $('.Menu.item').animate({left: "-=2em"});
        $('.Menu.item2').animate({left: "-=2em"});
        $('.menu.text').animate({left: "-=0.3em"});
        $('.menu.text2').animate({left: "-=0.3em"});
        $('.Plant').animate({left: "-=2em"});
        $('.PlantA').animate({left: "-=2em"});
        $('.rightside1').css("zIndex", "+=1");
        $('.road').animate({'background-position-x': "-=2em"});
        $('.Goomba').animate({left: "-=3em"});
        $('.Goomba2').animate({left: "-=3em"});
        $('.Goomba3').animate({left: "-=3em"});
        $('.powerUp').animate({left: "-=2em"});
        $('.powerUpA').animate({left: "-=2em"});
        $('.powerUpB').animate({left: "-=2em"});
        $('.powerUpC').animate({left: "-=2em"});
    });    
    $('.rightside1').on('click', function(){
        $('.Standingleft').hide();
        $('.runningleft1').hide();
        $('.runningleft2').hide();
        $('.runningleft3').hide();
        $('.Headleft').hide();
        $('.Mariohead').show();
        $('.running1').hide();
        $('.running2').show();
        $('.Pipe').animate({left: "-=2em"});
        $('.PipeA').animate({left: "-=2em"});
        $('.Cloud').animate({left: "-=1em"});
        $('.Cloud2').animate({left: "-=1em"});
        $('.Cloud3').animate({left: "-=1em"});
        $('.Menu.item').animate({left: "-=2em"});
        $('.Menu.item2').animate({left: "-=2em"});
        $('.menu.text').animate({left: "-=0.3em"});
        $('.menu.text2').animate({left: "-=0.3em"});
        $('.Plant').animate({left: "-=2em"});
        $('.PlantA').animate({left: "-=2em"});
        $('.rightside2').css("zIndex", "+=1");
        $('.road').animate({'background-position-x': "-=2em"});
        $('.Goomba').animate({left: "-=3em"});
        $('.Goomba2').animate({left: "-=3em"});
        $('.Goomba3').animate({left: "-=3em"});
        $('.powerUp').animate({left: "-=2em"});
        $('.powerUpA').animate({left: "-=2em"});
        $('.powerUpB').animate({left: "-=2em"});
        $('.powerUpC').animate({left: "-=2em"});
    });
    $('.rightside2').on('click', function(){
        $('.Standingleft').hide();
        $('.runningleft1').hide();
        $('.runningleft2').hide();
        $('.runningleft3').hide();
        $('.Headleft').hide();
        $('.Mariohead').show();
        $('.running2').hide();
        $('.running3').show();
        $('.Pipe').animate({left: "-=2em"});
        $('.PipeA').animate({left: "-=2em"});
        $('.Cloud').animate({left: "-=1em"});
        $('.Cloud2').animate({left: "-=1em"});
        $('.Cloud3').animate({left: "-=1em"});
        $('.Menu.item').animate({left: "-=2em"});
        $('.Menu.item2').animate({left: "-=2em"});
        $('.menu.text').animate({left: "-=0.3em"});
        $('.menu.text2').animate({left: "-=0.3em"});
        $('.Plant').animate({left: "-=2em"});
        $('.PlantA').animate({left: "-=2em"});
        $('.rightside3').css("zIndex", "+=1");
        $('.road').animate({'background-position-x': "-=2em"});
        $('.Goomba').animate({left: "-=3em"});
        $('.Goomba2').animate({left: "-=3em"});
        $('.Goomba3').animate({left: "-=3em"});
        $('.powerUp').animate({left: "-=2em"});
        $('.powerUpA').animate({left: "-=2em"});
        $('.powerUpB').animate({left: "-=2em"});
        $('.powerUpC').animate({left: "-=2em"});
    });
    $('.rightside3').on('click', function(){
        $('.Standingleft').hide();
        $('.runningleft1').hide();
        $('.runningleft2').hide();
        $('.runningleft3').hide();
        $('.Headleft').hide();
        $('.Mariohead').show();
        $('.running3').hide();
        $('.Standing').show();
        $('.Pipe').animate({left: "-=2em"});
        $('.PipeA').animate({left: "-=2em"});
        $('.Cloud').animate({left: "-=1em"});
        $('.Cloud2').animate({left: "-=1em"});
        $('.Cloud3').animate({left: "-=1em"});
        $('.Menu.item').animate({left: "-=2em"});
        $('.Menu.item2').animate({left: "-=2em"});
        $('.menu.text').animate({left: "-=0.3em"});
        $('.menu.text2').animate({left: "-=0.3em"});
        $('.Plant').animate({left: "-=2em"});
        $('.PlantA').animate({left: "-=2em"});
        $('.rightside').css("zIndex", "+=1");
        $('.road').animate({'background-position-x': "-=2em"});
        $('.Goomba').animate({left: "-=3em"});
        $('.Goomba2').animate({left: "-=3em"});
        $('.Goomba3').animate({left: "-=3em"});
        $('.powerUp').animate({left: "-=2em"});
        $('.powerUpA').animate({left: "-=2em"});
        $('.powerUpB').animate({left: "-=2em"});
        $('.powerUpC').animate({left: "-=2em"});
    });
    $('.Pipe').on('click', function(){
        $('.Plant').show();
        $('.Plant').animate({top: "-=12em"});
    });
        $('.Plant').on('click', function(){
            $(this).animate({top: "+=12em"});
            $(this).hide();
    });
    $('.PipeA').on('click', function(){
        $('.PlantA').show();
        $('.PlantA').animate({top: "-=12em"});
    });
        $('.PlantA').on('click', function(){
            $(this).animate({top: "+=12em"});
            $(this).hide();
    });
    $('.menu.text').hover(function () {
        $('.powerUp').show();
        $('.powerUpA').show();
    }, function(){
        $('.powerUp').hide();
        $('.powerUpA').hide();
    });
    $('.menu.text2').hover(function () {
        $('.powerUpB').show();
        $('.powerUpC').show();
    }, function(){
        $('.powerUpB').hide();
        $('.powerUpC').hide();
    });
    
};
$(document).ready(main);