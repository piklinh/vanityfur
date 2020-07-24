const petApp = {};

$(function() {

    // On change, grab the selected item from input
    $('input').on('change', function(event) {
        // console.log(this);

        const grabItem = $(this).val();
        console.log(grabItem);

        // $(`.${grabItem}`) connects the value to a class 
        // '.' + grabItem (concat) and $`.${grabItem}` (temlit) is the same thing

        // toggleClass / addClass & removeClass at the same time
        // Upon click, $(`.${grabItem}`) adds the 'imageVisible' class to the selected value
        // It also removes the 'imageVisible' class from the rest of the siblings

        $(`.${grabItem}`).addClass('imageVisible');
        $(`.${grabItem}`).siblings().removeClass('imageVisible');    
        

    })
});


// PSEUDO CODE
// DONE // One big form that has listeners (on.Change) for each input field  
// DONE // Radial buttons, and apply (on.Change) on input field for each section
// DONE // Two options to switch the items and pets:
// a)	addClass or removeClass (display: none by default on the elements) 
// b)	jQuery method show/hide to hide the elements (e.g. hide: crown, etc)
// Will be using the if / else conditional statement to check and pass the value


// TEST DIFFERENT METHODS

// const showItem = $(grabItem).addClass('.imageVisible');
// console.log(showItem);

// Grab the value that is selected e.g value=dog will show in console log 'dog'
// Save the code below into variable (const) to make it reusable. 
// Use const instead of namespace (not needed) because the value upon 'click/change'

// if ( $(this).attr('name') === 'pickPet') {
        //     $('.petOptions .imageVisible').removeClass('imageVisible');
        
        // }