

// Javascript file to retrieve the data from Dom
$(document).ready(function(){

    $allPanels = $('.panel');
    $allSteps  = $('.steps');


    $('.btn-next').click(nextPanel);
    $('.btn-secondry').click(nextPanel);
    $('.btn-prev').click(prevPanel);


    var idSelectedImages = [];
    var idSelectedColors = [];
    var imagesChoosen = [];
    var colorsChoosen = [];
    var $owlStage = $('.owl-cards-menu');
    var $packageName;
    var $packagePrice;
    var $clickedItem = $('.sample');
    var selectedImages = imagesChoosen.length;
    var selectedColors = colorsChoosen.length;
    var $pricingCard = $('.pricing-card');
   
    $clickedItem.click(addItemToCart);
    $pricingCard.click(selectPackage);

    // ******************************
    // Panel Triggers
    // ******************************


    // ******************************
    // Owl Stage Selected Item Removing
    // ******************************
        

    

    // ******************************
    // Function defenations
    // ******************************    
function selectPackage(e) {
    e.preventDefault();
    if($(this).hasClass('active-package')) {
        $(this).removeClass('active-package');
        $packagePrice = '';
        $packageName = '';
    } else {
        $('.pricing-card.active-package').removeClass('active-package');
        $(this).addClass('active-package');
        $packagePrice = $(this).find('.price>span').text();
        $packageName = $(this).find('.package-name>h3').text();
        console.log($packagePrice);
        console.log($packageName);
    }
    
}       
function nextPanel(e) {
    e.preventDefault();

    $currentActivePanel = $allPanels.filter('.panel-active');
    $nextActivePanel = $currentActivePanel.next();

    

    $doneTab = $currentActivePanel.attr('id');
    $currentActiveStep = $allSteps.filter('[data-active="1"]');
    $nextActiveStep = $currentActiveStep.next();

    $currentActiveStep.attr('data-active','0');
    $currentActiveStep.attr('data-selected','1');
    $nextActiveStep.attr('data-selected','0');
    $nextActiveStep.attr('data-active','1');



    console.log($nextActiveStep);

    $currentActivePanel.removeClass('panel-active');
    $nextActivePanel.addClass('panel-active');


}
function prevPanel(e) {
    e.preventDefault();

    $currentActivePanel = $allPanels.filter('.panel-active');
    $prevActivePanel = $currentActivePanel.prev();

    $currentActiveStep = $allSteps.filter('[data-active="1"]');
    $prevActiveStep = $currentActiveStep.prev();

    $currentActiveStep.attr('data-active','0');
    $currentActiveStep.attr('data-selected','0');
    $prevActiveStep.attr('data-selected','0');
    $prevActiveStep.attr('data-active','1')




    $currentActivePanel.removeClass('panel-active');
    $prevActivePanel.addClass('panel-active');



}

    function addItemToCart(e) {
        e.preventDefault();
        
        var $parentItemId = $allPanels.filter('.panel-active').attr('id');

        console.log($parentItemId);


        var src = $(this).find('img').attr('src');
        var id = $(this).find('span').text();

        if($parentItemId === 'designPane') {

            if($(this).hasClass('active')){
                $(this).removeClass('active');
                removeItemFromCart(src,id,$parentItemId);
                // displayCart($parentItemId);
    
            } else {
                $owlStage.filter('[data-stage= "designPane"]').addClass('stage-active');
                $(this).addClass('active');
                imagesChoosen.push(src);
                idSelectedImages.push(id);
                selectedImages  = imagesChoosen.length;
                // selected++;
                displayCart($parentItemId);
            }
        } else {
            selectedColors = colorsChoosen.length;


            if($(this).hasClass('active')){
                $(this).removeClass('active');
                removeItemFromCart(src,id,$parentItemId);    
               } else {

                $owlStage.filter('[data-stage= "colorsScheme"]').addClass('stage-active');
                $(this).addClass('active');
                colorsChoosen.push(src);
                idSelectedColors.push(id);
                selectedColors  = colorsChoosen.length;
                // selected++;
                displayCart($parentItemId);

        }
        
        // hideButtons();
    }

    function displayCart(pId) {
        var output = "";


        if(pId === 'designPane') {
            if(selectedImages === 0) {
                $('#cart-stage[data-stage = "designPane"]').children().remove();
                $owlStage.filter('[data-stage= "designPane"]').removeClass('stage-active');


                $('.btn-next[rel = "designPane"]').css({display:'none'});
                $('.btn-secondry[rel = "designPane"]').css({display:'inline-flex'});
                // hideButtons();

            } else {

                    $('.btn-next[rel = "designPane"]').css({display:'inline-flex'});
                    $('.btn-secondry[rel = "designPane"]').css({display:'none'});
    
                    for(var i in imagesChoosen) {
                        output += "<div class='selected-image-cover' >"
                        +"<img src= '"+imagesChoosen[i]+"' data-id='"+idSelectedImages[i]+"'>"
                        +"<a class='remove'>"
                        +"<i class='material-icons '>clear</i>"
                        +"</a>"
                        +"</div>";
                        // $('#cart-stage[data-stage = "colorsScheme"]').css({display:'none'});
                        $('#cart-stage[data-stage = "designPane"]').html(output);     
                     }
            }
        } else {
            if(selectedColors === 0) {

                $('#cart-stage[data-stage = "colorsScheme"]').children().eq(1).remove();
                $owlStage.filter('[data-stage= "colorsScheme"]').removeClass('stage-active');

                $('.btn-next[rel = "colorsScheme"]').css({display:'none'});
                $('.btn-secondry[rel = "colorsScheme"]').css({display:'inline-flex'});
                // hideButtons();
            
            } else {

                for(var i in colorsChoosen) {

                    $('.btn-next[rel = "colorsScheme"]').css({display:'inline-flex'});
                    $('.btn-secondry[rel = "colorsScheme"]').css({display:'none'});

                    output += "<div class='selected-image-cover' >"
                    +"<img src= '"+colorsChoosen[i]+"' data-id='"+idSelectedColors[i]+"'>"
                    +"<a class='remove'>"
                    +"<i class='material-icons '>clear</i>"
                    +"</a>"
                    +"</div>";
                    // $('#cart-stage[data-stage = "designPane"]').css({display:'none'});
                    // $('#cart-stage[data-stage = "colorsScheme"]').css({display:'flex'});
                    $('#cart-stage[data-stage = "colorsScheme"]').html(output);     
                 
                }
            }
                
            
        }
        
        
    }   
    function removeItemFromCart(src,id,pId) {

        if(pId === 'designPane') {
            for(var i in imagesChoosen) {
                if (imagesChoosen[i] === src) {
                    imagesChoosen.splice( i, 1 );
                    selectedImages  = imagesChoosen.length;
                    displayCart(pId); 
                }
                if(idSelectedImages[i] === id) {
                    idSelectedImages.splice(i,1);
                    break;
                }    
            }
        } else {

            for(var i in colorsChoosen) {
                if (colorsChoosen[i] === src) {
                    colorsChoosen.splice( i, 1 );
                    selectedColors  = colorsChoosen.length;
                    displayCart(pId); 
                }
                if(idSelectedColors[i] === id) {
                    idSelectedColors.splice(i,1);
                    break;
                }    
            }

        }       
        
    }
}
});