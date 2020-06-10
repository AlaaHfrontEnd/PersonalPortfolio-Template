
var send = function(){

    let name = $('#yourname').val();
    let mail = $('#yourmail').val();

    if(name == "" && mail == "")
    {
        $('#input1').text('Name must be filled out');
        $('#yourname').addClass('validation-border');

        $('#inp_2').text('E-mail must be filled out');
        $('#yourmail').addClass('validation-border');

    }else if(name == ''){
        $('#input1').text('Name must be filled out');
        $('#inp_2').text('');
        $('#yourname').addClass('validation-border');
        $('#yourmail').removeClass('validation-border');


    }else if(mail == ''){
        $('#inp_2').text('E-mail must be filled out');
        $('#input1').text(' ');

        $('#yourmail').addClass('validation-border');
        $('#yourname').removeClass('validation-border');


    }else{
        $('#input1').text(' ');
        $('#inp_2').text('');

        $('#yourname').removeClass('validation-border');
        $('#yourmail').removeClass('validation-border');


    }
}