function beautify(){
    try{
        $("#jsoninput").val(JSON.stringify(JSON.parse($("#jsoninput").val()), null, 4))
        message("Success", "green")
    }
    catch(e){
        message(e, "red")
    }
}
function message(m, color){
    $("#error").text(m).css("color", color)
}