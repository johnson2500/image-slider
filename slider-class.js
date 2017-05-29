$(document).ready(function(){
	// This is the generic Class
	function slider(id){
		
		this.pathArr = []; // contains the pathes of the images you have 
		this.arrIndex = 0; // counter for array of pathnames
		this.length = this.pathArr.length;
		this.id = id;
		
		this.forwardButtonID = "Forward"; // forward in array see html
		this.backButtonID = "Back"; // this will be for the back button see html
		
		this.imgContainerID = this.id;
		this.backButtonID = this.id + this.backButtonID;
		this.forwardButtonID = this.id + this.forwardButtonID;
		
		this.backButton = $("#" + this.backButtonID);
		this.forwardButton = $("#" + this.forwardButtonID);
		
		// this will got back one image
		this.backButton.click($.proxy(function(){
			this.roundRobin("-");
			this.update();
		},this));
		
		// this will go forward one image 
		this.forwardButton.click($.proxy(function(){
			this.roundRobin("+");
			this.update();
		},this));
		
		// checks the status of array index 
		this.roundRobin = function(type){
			
			if(type === "-"){
				this.dec();
			} else if (type === "+"){
				this.inc();
			} else {
				console.log(this);
			}
		}
		
		// inc array 
		this.inc = function(){
			
			if(this.length-1 > this.arrIndex){
				this.arrIndex++;
			} else if (this.length-1 <= this.arrIndex){
				console.log("its failing")
				this.arrIndex = 0;
			}
		}
		
		// decrement the arrray 
		this.dec = function(){
			if(this.arrIndex !== 0){
				this.arrIndex--;
			} else if (this.arrIndex === 0){
				this.arrIndex = this.length-1;
			}
		}
		
		//initializes the array, and set the image to the first item 
		this.init = function(){
			this.length = this.pathArr.length;
			document.getElementById(this.imgContainerID).setAttribute("src",this.pathArr[this.arrIndex]);
		}
		// updates the 
		this.update = function(){
			document.getElementById(this.imgContainerID).setAttribute("src",this.pathArr[this.arrIndex]);
		}
	
	}

	var example = new slider("example"); // create instance of object

	example.pathArr.push("/SQUARE.gif"); // push the images you want in the slider
	example.pathArr.push("/SQAURE2.jpg");
	example.init(); // this will initiallze and setup the images in the slider
	
})
