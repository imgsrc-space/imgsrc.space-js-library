Using our JS library
====================

> &lt;script src="https://cdn.jsdelivr.net/gh/imgsrc-space/imgsrc.space-js-library/index.js" &gt; &lt;/script&gt;


Copy and paste the above script tag at the END of your html page, and that's it.

### USAGE

Below are the different options you get with our javascript library.

##### Getting a specific image

To get a specific image just enter the search word in the image source after a dot and a space

> &lt;img src=". cow" &gt;

> &lt;img src=". architecture" &gt;

> &lt;img src=". cute dog" &gt;

  

##### Resizing images

Imgsrc.space can also resize the images for you. To enter your desired dimensions put an "?" at the end of the search term and then your enter your desired height and width. Here "h" stands for height and w stands for width. They must be separated by an &

> &lt;img src=". cow?h=500&w=70" >

> &lt;img src=". architecture?h=250&w=250" >

  

###### AutoResizing images

If you only provide a single dimension parameter (i.e only height or width) Imgsrc.Space would automatically resize the other parameters accordingly

> &lt;img src=". cat?h=500" >

> &lt;img src=". sunset?w=700" >

  
  

##### Getting a specific Video

To get a specific image just enter the search word in the image source after a dot and a space followed by an **\-v**

> &lt;video> &lt;source src=". car-v" type="video/mp4"> &lt;/video>

> &lt;video> &lt;source src=". big mountain-v" type="video/mp4"> &lt;/video>

> &lt;video> &lt;source src=". river-v" type="video/mp4"> &lt;/video>

  

### Common errors and trouble shooting

#### Images are not loading?

*   Make sure that you are strictly following the syntax. Your image source must start with an "dot" and be followed by an "space" character. After that you can enter your search term
*   Try using some other search words, there is an possibility that a there are no search results for a given term.

#### Images are not resizing?

*   Make sure that use the "?" question mark symbol at the end of the search term. Use h for setting the height and w for setting the width. Make sure that there is an & symbol between them.

#### Videos are not loading?

*   Make sure that you are strictly following the syntax. Your video source must start with an "dot" and be followed by an "space" character. After that you can enter your search term, followed by an "-v"
*   Try using some other search words, there is an possibility that a there are no search results for a given term.
