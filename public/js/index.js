$(document).ready(function() {
    $('#loadData').on('click', function() {
        $.get('/data', function(data){
            //console.log(data);
            // data es un array
            // cada elemento tiene un formato:
            // {
            //     text: $('#tweetContent')
            //      user: {
            //         "name": $('#demo')
            // }
            // }

            data.forEach(function(tweet){
                var elemHTML = $('<div></div>');
                elemHTML.html('User:' + tweet.user.name +
                    '<br>' + tweet.text);
                $('#contenedor .centre').append(elemHTML);
            });
            
        }).fail(function(err){
            console.log(err);
        });
    });


    $('#tweet').on('click', function(){
        // hacer post a /tweet con el formato
        //$( ".result" ).html( 
        // {
        //     text: $('#tweetContent')
        //      user: {
        //         "name": $('#demo')
        // }
        // });
    });
});
$(document).ready(function(){
    //pedir user
    //div con input que pida usuario

    var person=prompt("ingrese usuario");
    if (person != null) {
    document.getElementById("demo").innerHTML =
    '<i class="fa fa-user esp-ico"></i>'
    document.getElementById("demo-two").innerHTML =
    person;
}
});