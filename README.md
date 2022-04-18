# Image Processing Library
A JavaScript library to invert the colors of a photo or to adjust the contrast of a photo. 

To use the library, download the ```ImageProcessing.js``` into your project directory and include the file into the HTML Page you want to apply the filters. Then follow the [Usage Instructions](https://github.com/christunaroll/Image-Processing-Library/edit/main/README.md#usage) section below.

# Requirements and Restrictions

- This library has to be run on a web browser server and your DOM must loaded to use the functions.
- You must at least have a canvas element using the Canvas API.
- Images will only be proccessed successfuly if the image file is in a jpg, jpeg, or png format.

# Usage 
### HTML File
In the HTML file, create a canvas element where you want your processed image to be. In the canvas element, define the unique id, width, and height of your canvas. It should be in the format of:

*NOTE: < > is replaced with your desired name and values.*
```html
<canvas id="<unique_id>" width="<width_size>" height="<height_size>"></canvas>
```

Additionally, add the ```ImageProcessing.js``` script file into the HTML file. For example: 

```html
<html>
  <body>
    <canvas id="doggo" width="400" height="400"></canvas>
    
    <script src="./ImageProcessing.js"></script>
  </body>
</html>
```
### JS File
Below is a list of the methods the class has to offer:
- invert()
- contrast()
- original() 

Usage can be done in two ways, after all the functions in the JS file, or in a script tag in the HTML file. [Method 1](https://github.com/christunaroll/Image-Processing-Library/blob/main/README.md#method-1-create-objects-in-js-file) // [Method 2](https://github.com/christunaroll/Image-Processing-Library/blob/main/README.md#method-2-create-objects-in-html-file)

Create a new ImageProcessing() object in the global scope of the JavaScript file or script. 

Then, create a new variable with the object you just created and the desired method you want to impose onto the canvas image. 

The invert() and original() method takes two parameters, while contrast() takes 3 parameters. For both methods, the first two methods are the file path to the image and a more simplified version of document.getElementById(). The third argument of contrast() represents the contrast.

If an image did not process properly, it will alert the user with an error message on the console. A successful processing would result in the image being automatically transformed on the canvas. 

Below are examples of how each methods would be applied. 

### Using original() (takes two arguments)   
Example:
```javascript
var food = new ProcessedImage();

var cheddar = food.original("./images/cheese_block.jpg", get_elem("cheese"));
```
General:
```javascript
var <object_name> = new ProcessedImage();

var <variable_name> = <object_name>.original("<path_to_image_file>", get_elem("<unique_id>"));
```

### Using invert() (takes two arguments)   
Example:
```javascript
var dog = new ProcessedImage();

var processed_dog = dog.invert("./images/happy_poodle.jpg", get_elem("doggo"));
```
General:
```javascript
var <object_name> = new ProcessedImage();

var <variable_name> = <object_name>.invert("<path_to_image_file>", get_elem("<unique_id>"));
```

### Using contrast() (takes three arguments)  
Example: 
```javascript
var cat = new ProcessedImage();

var processed_cat = cat.contrast("./images/confused_cat.png", get_elem("kitty"), 60);
```
General: 
```javascript
var <object_name> = new ProcessedImage();

var <variable_name> = <object_name>.contrast("<path_to_image_file>", get_elem("<unique_id>"), <contrast_value>);
```

The value of contrast will be in the range of -255 to +255. Negative values will decrease the amount of contrast, while positive values will increase the amount of contrast.

# Different Ways to Create Objects for ImageProcessing()
### Method 1: Create Objects in JS File 
Create your objects in the global scope of the Javascript File and underneath all of the functions and classes.

```javascript
function get_elem(elem) {
	...
}

function imageValidation(src_image) {
  ...
}

class ProcessedImage {
	...
}

/*LOCATION TO ADD FILTER TO IMAGES*/
var <object_name> = new ProcessedImage();

var <variable_name> = <object_name>.contrast("<path_to_image_file>", get_elem("<unique_id>"), <contrast_value>);
```

### Method 2: Create Objects in HTML File
Include a script tag with a JavaScript type in the tag. Place your object and variable in between the script tag. Make sure your source script preceeds this tag. 

```html
<html>
  <body>
    <canvas id="doggo" width="400" height="400"></canvas>
    
    <script src="./ImageProcessing.js"></script>
	  
    <script type="text/javascript">
          var dog = new ProcessedImage();
          var processed_dog = dog.contrast("sleepy_dog.jpeg", get_elem("doggo"), 100);
     </script>
  </body>
</html>
```
# Example with Images
Before Transformation Image   
![Screen Shot 2022-04-18 at 3 03 21 AM](https://user-images.githubusercontent.com/90123164/163792797-37a90841-6f43-49a5-9f62-837adc985917.png)

Image After Transformation (on Canvas)
![Screen Shot 2022-04-18 at 3 04 26 AM](https://user-images.githubusercontent.com/90123164/163792967-88f612cf-8f5e-4355-9051-f472d035e158.png)


# Support / Issues
If you have any questions, suggestions, or usage issues, please contact christina.vo2001@gmail.com

Thanks for choosing to use this library!
