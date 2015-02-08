function loadImage(img){
    $img=$(img);
    $img.attr("src", $img.attr("data-img-src")).load(function(){
        $next = $img.next("img.image_post_load");
        if($next.size()){
            loadImage($next);
        }
    });
}

$(function(){
    $(document).on("click", "a.load_trigger", function(e){
        loadImage("img.image_post_load:first");
        e.preventDefault();
    });
});
