const petApp = {};

// On click, button to smooth scroll to the main part of the page
petApp.scroll = function(event) {
    $('button').on('click', function(event) {
    
        $('html').animate( {
            scrollTop: $('main').offset().top}, 1000);
    });
};

// On change, to display the selected items from all four of the radio button sets
petApp.displayImage = function() {

    // On change, grab the selected item from input
    $('input').on('change', function(event) {
        const grabItem = $(this).val();

        // $(`.${grabItem}`) connects the value to a class 
        // '.' + grabItem (concat) and $`.${grabItem}` (temlit) is the same thing

        // toggleClass / addClass & removeClass at the same time
        // Upon click, $(`.${grabItem}`) adds the 'imageVisible' class to the selected value
        // It also removes the 'imageVisible' class from the rest of the siblings

        $(`.${grabItem}`).addClass('imageVisible');
        $(`.${grabItem}`).siblings().removeClass('imageVisible');
    });

    // When User clicked on the input of 'pickPet', the input that is checked will return a value
    // The value will be stored in a variable called radioValu

    $("input[name='pickPet']").click(function() {
        const radioValue = $("input[name='pickPet']:checked").val();

        // If the radioValue is equal to 'cat', it will display the following css items (cat's accessories)
        // Else if the radioValue is equal to 'dog', it will display the following css items (dog's accessories) 
        
        if(radioValue === 'cat') {
            $('.topHat').css({"width": "40%", "left":"15%", "bottom":"70%"});
            $('.crown').css({"width": "30%", "left":"20%", "bottom":"75%"});
            $('.flower').css({"width": "30%", "left":"35%", "bottom":"67%"});
            $('.scarf').css({"width": "50%", "left":"10%", "bottom":"5%"});
            $('.collar').css({"width": "50%", "left":"12%", "bottom":"27%"});
            $('.ribbon').css({"width": "50%", "left":"11%", "bottom":"22%"});
            $('.ball').css({"width": "30%", "left": "60%", "bottom": "0%"});
            $('.bear').css({"width": "30%", "left": "60%", "bottom":"0%"});
            $('.bowl').css({"width": "50%", "left": "50%", "bottom":"0%"});
        } else if (radioValue === 'dog') {
            $('.topHat').css({"width": "40%", "left":"30%", "bottom":"80%"});
            $('.crown').css({"width": "30%", "left":"35%", "bottom":"80%"});
            $('.flower').css({"width": "40%", "left":"43%", "bottom":"70%"});
            $('.scarf').css({"width": "50%", "left":"25%", "bottom":"5%"});
            $('.collar').css({"width": "50%", "left":"25%", "bottom":"28%"});
            $('.ribbon').css({"width": "50%", "left":"25%", "bottom":"25%"});
            $('.ball').css({"width": "30%", "left": "60%", "bottom": "0%"});
            $('.bear').css({"width": "30%", "left": "60%", "bottom":"0%"});
            $('.bowl').css({"width": "50%", "left": "50%", "bottom":"0%"});
        }
    }); 
};


// Initiate the app
petApp.init = function() {
    petApp.scroll();
    petApp.displayImage();
}

// Document ready - load HTML/CSS, then initialize JQ!
$(function() {
    petApp.init();
})