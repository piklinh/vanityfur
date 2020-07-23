const petApp = {};

$(function() {
    //code goes here

    // On change, grab the selected item from input
    $('input').on('change', function(event) {
        console.log(this);

        // Grab the value that is selected e.g value=dog will show in console log 'dog'
        // Save the code below into variable to make it reusable 
        // Use const instead of namespace (not needed) because the value upon 'click/change'

        const grabItem = $(this).val();
        console.log(grabItem);

        // TO HIDE AND SHOW IMAGE UPON CHANGE.
        // $('.imageHidden').hide(grabItem);
        const showItem = $('.imageVisible').show(grabItem);
        console.log(showItem);


        // GRAB VALUE TO MATCH WITH CLASS
        // const showItem = $(grabItem).addClass('.imageVisible');
        // console.log(showItem); 

        // // $('.imageHidden').show(showItem);
    })
});

// HOMEWORK: <!-- Grab value/image to match with the 'class' -->
// HOMEWORK: <!-- CSS/HTML: imageHidden to display: none; when visible class is called in jquery then image will appear -->

// DONE // One big form that has listeners (on.Change) for each input field  
// DONE // Radial buttons, and apply (on.Change) on input field for each section
// DONE // Two options to switch the items and pets:
// a)	addClass or removeClass (display: none by default on the elements) 
// b)	jQuery method show/hide to hide the elements (e.g. hide: crown, etc)
// Will be using the if / else conditional statement to check and pass the value
