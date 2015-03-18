/**
 * Created by siobhan on 15/03/18.
 */

//simulating click on input link when button is pressed
//done to remove need for ugly standard "new file" button
$('#change-btn').click(function(){
    $('#change-input').click();
});

//getting the file selected by the user
$('#change-input').change(function(e) {

    //file & reading in variables
    var currentFile = this.files[0];
    var reader = new FileReader();

    //once reader is loaded, fill preview and favicon with uploaded image
    reader.onloadend = function(){
        var result = reader.result;
        $('#preview').attr('src', result);
        $('#favicon').attr('href', result);
    }

    //if file exists, read in from it
    if(currentFile){
        if(checkExtension(currentFile.name)){
            reader.readAsDataURL(currentFile);
        }
    }
    else {
        printAlert("The file you selected does not exist.");
    }

});

//making sure only images are selected.
function checkExtension(filename) {

    var fileSplit = filename.split(".");
    var extension = fileSplit[fileSplit.length - 1];

    if (extension == 'ico' || extension == 'jpg' || extension == 'jpeg' || extension == 'gif' || extension == 'png'){
        return true;
    }

    printAlert("Your file type is invalid. Please only use ico, jpg, jpeg, gif or png files!");
    return false;

}

//creates a dismissable alert with given message
function printAlert(message){
    var warning = ''
        +' <div id="error-alert" class="alert alert-dismissible alert-danger">'
        + '<button type="button" class="close" data-dismiss="alert">×</button>'
        +'<strong>Oh snap!</strong> ' + message
        + '</div>';

    $('#error-alert').append(warning);
}