# jQuery images queue
Simple script that allows loading images one by one instead of everything at once. It's mostly usefull for large image gallerys. 

There's a [blog post at michalp.net/blog](http://michalp.net/blog/posts/podstawy-jquery-5) describing the scipt in details. Post is written in polish.

## Usage

Images that you want to be loaded in queue should have class `image_post_load` and `data-img-src` attribute with the real source of the image. As shown in the example *index.html* you can use teporary image as `src` as a placeholder.
