/* NOTE: THIS IS A TEST FILE */

function get_elem(elem) {
	return document.getElementById(elem);
}

function imageValidation(src_image) {
	const file = src_image.split('/')[0];

		if ((!src_image.includes("jpg")) && (!src_image.includes("jpeg")
		&& (!src_image.includes("png")))) {
			alert("Invalid File: " + file);
			console.log("Invalid File: ", file);
		}
}

class ProcessedImage {
	invert(src_image, can) {
		var img = new Image();
		var canvas = can;
		var ctx = canvas.getContext("2d");

		// if the image does not work, alert an error message 
		imageValidation(src_image);

		img.onerror = function() {
			alert('Error Processing: ' + src_image);
			console.log("Error Processing: ", src_image)
			img.onerror=null;
		};

		img.onload = function() {
			var width = canvas.width;
			var height = canvas.height;

			ctx.drawImage(img, 0, 0, width, height);
			
			var rgb_info = ctx.getImageData(0, 0, width, height);
			var data = rgb_info.data;
			
			for (let i = 0, n = data.length; i < n; i +=4) {
				data[i] = 255 - data[i];
				data[i + 1] = 255 - data[i + 1];
				data[i + 2] = 255 - data[i + 2];		
			}

			ctx.putImageData(rgb_info, 0, 0);
			return canvas.toDataURL("image/jpeg");
		};

		img.src = src_image;
	}
	
	contrast(src_image, can, contrast) {
		var img = new Image();
		var canvas = can;
		var ctx = canvas.getContext("2d");

		imageValidation(src_image);

		img.onerror = function() {
			alert('Error Processing: ' + src_image);
			console.log("Error Processing: ", src_image)
			img.onerror=null;
		};
		
		img.onload = function() {
			var width = canvas.width;
			var height = canvas.height;

			ctx.drawImage(img, 0, 0, width, height);
			
			var rgb_info = ctx.getImageData(0, 0, width, height);
			var data = rgb_info.data;

			contrast *= 2.55; // or *= 255 / 100; scale integer percent to full range
    		var factor = (255 + contrast) / (255.01 - contrast);  //add .1 to avoid /0 error
		
			for (let i = 0, n = data.length; i < n; i +=4) {
				data[i] = factor * (data[i] - 128) + 128;     //r value
				data[i+1] = factor * (data[i+1] - 128) + 128; //g value
				data[i+2] = factor * (data[i+2] - 128) + 128; //b value
			}

			ctx.putImageData(rgb_info, 0, 0);
			return canvas.toDataURL("image/jpg");
		};

		img.src = src_image;
	}

	original(src_image, can) {
		var img = new Image();
		var canvas = can;
		var ctx = canvas.getContext("2d");

		imageValidation(src_image);

		img.onerror = function() {
			alert('Error Processing: ' + src_image);
			console.log("Error Processing: ", src_image)
			img.onerror=null;
		};
		
		img.onload = function() {
			var width = canvas.width;
			var height = canvas.height;

			ctx.drawImage(img, 0, 0, width, height);
			
			var rgb_info = ctx.getImageData(0, 0, width, height);

			ctx.putImageData(rgb_info, 0, 0);
			return canvas.toDataURL("image/jpg");
		};

		img.src = src_image;
	}

}

/*LOCATION TO ADD FILTER TO IMAGES*/
var benji = new ProcessedImage();
var doggo = new ProcessedImage();

var processed_benji = benji.invert("../images/test_pic.jpg", get_elem("dog"));
var processed_dog = doggo.contrast("../images/dog.png", get_elem("emoji"), 90);
