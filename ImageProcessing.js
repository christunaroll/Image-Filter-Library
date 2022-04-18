function get_elem(elem) {
	return document.getElementById(elem);
}

function imageValidation(src_image) {
	// split to get image name
	const file = src_image.split('/')[0];

	// if the file is not a jpg/jpeg/png, alert the user of invalid file
	if ((!src_image.includes("jpg")) && (!src_image.includes("jpeg") && (!src_image.includes("png")))) {
		alert("Invalid File: " + file);
		console.log("Invalid File: ", file);
	}
}

class ProcessedImage {
	invert(src_image, can) {
		//define image and canvas 
		var img = new Image();
		var canvas = can;
		var ctx = canvas.getContext("2d");

		// error validatoin: if the image does not work, alert an error message 
		imageValidation(src_image);

		img.onerror = function() {
			alert('Error Processing: ' + src_image);
			console.log("Error Processing: ", src_image)
			img.onerror=null;
		};

		// if image does process successfully
		img.onload = function() {
			var width = canvas.width;
			var height = canvas.height;

			// draw image onto canvas based on size of canvas
			ctx.drawImage(img, 0, 0, width, height);  
		
			// obtain an object containing a copy of the pixel data for a canvas context
			var rgb_info = ctx.getImageData(0, 0, width, height); 
			var data = rgb_info.data;
			var n = data.length;
			
			for (let i = 0; i < n; i +=4) { //each pixel has 4 data
				data[i] = 255 - data[i]; //invert red
				data[i + 1] = 255 - data[i + 1]; //invert green
				data[i + 2] = 255 - data[i + 2]; //invert  blue		
			}

			//paint pixel data into a context
			ctx.putImageData(rgb_info, 0, 0); 
			return canvas.toDataURL("image/jpg");
		};

		// lets you know which image you want to create in new Image()
		img.src = src_image;
	}
	
	contrast(src_image, can, contrast) {
		//define image and canvas 
		var img = new Image();
		var canvas = can;
		var ctx = canvas.getContext("2d");

		// error validation: if the image does not work, alert an error message
		imageValidation(src_image);

		img.onerror = function() {
			alert('Error Processing: ' + src_image);
			console.log("Error Processing: ", src_image)
			img.onerror=null;
		};
		
		// if image does process successfully
		img.onload = function() {
			var width = canvas.width;
			var height = canvas.height;

			// draw image onto canvas based on size of canvas
			ctx.drawImage(img, 0, 0, width, height);

			// obtain an object containing a copy of the pixel data for a canvas context
			var rgb_info = ctx.getImageData(0, 0, width, height);
			var data = rgb_info.data;
			var n = data.length;

			// determine factor to change image by based on selected contrast 
			contrast *= 2.55; // or *= 255 / 100
    		var factor = (255 + contrast) / (255.01 - contrast); 
		
			for (let i = 0; i < n; i +=4) {
				data[i] = factor * (data[i] - 128) + 128;     //red value
				data[i+1] = factor * (data[i+1] - 128) + 128; //green value
				data[i+2] = factor * (data[i+2] - 128) + 128; //blue value
			}

			//paint pixel data into a context
			ctx.putImageData(rgb_info, 0, 0);
			return canvas.toDataURL("image/jpeg");
		};

		// lets you know which image you want to create in new Image()	
		img.src = src_image;
	}

	original(src_image, can) {
		//define image and canvas 
		var img = new Image();
		var canvas = can;
		var ctx = canvas.getContext("2d");

		// error validation: if the image does not work, alert an error message
		imageValidation(src_image);

		img.onerror = function() {
			alert('Error Processing: ' + src_image);
			console.log("Error Processing: ", src_image)
			img.onerror=null;
		};

		// if image does process successfully
		img.onload = function() {
			var width = canvas.width;
			var height = canvas.height;

			// draw image onto canvas based on size of canvas
			ctx.drawImage(img, 0, 0, width, height);
			var rgb_info = ctx.getImageData(0, 0, width, height);

			//paint pixel data into a context
			ctx.putImageData(rgb_info, 0, 0);
			return canvas.toDataURL("image/jpg");
		};

		// lets you know which image you want to create in new Image()	
		img.src = src_image;
	}

}

/*ADD OBJECTS TO TRANSFORM IMAGES BELOW*/
