$(document).ready(function(){
	
	function slider(id){
		
		this.pathArr = [];
		this.arrIndex = 0;
		this.length = this.pathArr.length;
		this.id = id;
		
		this.forwardButtonID = "Forward";
		this.backButtonID = "Back";
		
		this.imgContainerID = this.id;
		this.backButtonID = this.id + this.backButtonID;
		this.forwardButtonID = this.id + this.forwardButtonID;
		
		this.backButton = $("#" + this.backButtonID);
		this.forwardButton = $("#" + this.forwardButtonID);
			
		this.backButton.click($.proxy(function(){
			this.roundRobin("-");
			this.update();
		},this));
		
		this.forwardButton.click($.proxy(function(){
			this.roundRobin("+");
			this.update();
		},this));
		
		this.roundRobin = function(type){
			
			if(type === "-"){
				this.dec();
			} else if (type === "+"){
				this.inc();
			} else {
				console.log(this);
			}
		}
		
		this.inc = function(){
			
			if(this.length-1 > this.arrIndex){
				this.arrIndex++;
			} else if (this.length-1 <= this.arrIndex){
				console.log("its failing")
				this.arrIndex = 0;
			}
		}
		
		this.dec = function(){
			if(this.arrIndex !== 0){
				this.arrIndex--;
			} else if (this.arrIndex === 0){
				this.arrIndex = this.length-1;
			}
		}
		
		this.init = function(){
			this.length = this.pathArr.length;
			document.getElementById(this.imgContainerID).setAttribute("src",this.pathArr[this.arrIndex])
		}
		
		this.update = function(){
			document.getElementById(this.imgContainerID).setAttribute("src",this.pathArr[this.arrIndex])
		}
	
	}

	var example = new slider("example");

	example.pathArr.push("/SQUARE.gif");
	example.pathArr.push("/SQAURE2.jpg");
	example.init();
	
})
