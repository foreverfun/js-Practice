
// Part I: 
// 1. create an html page with a button 
// 2. add a click event handler so that when you click the button a message is printed to the console
// 3. change the behavior of the click handler to append some text to the body element
// 4. add another button with a click handler that appends an h1 element with some text to the body element
// 5. add another button with a click handler that append an unorder list with three list items to the body element

// Part II:
// 1. create an html page with some filter content including some paragraphs, headings, and links
// 2. when a paragraph is moused over, turn the text of that paragraph pink
// 3. add an exclamation point to the end of each heading
// 4. when a link is clicked, confirm that the user wants to navigate to that url. If the user clicks OK, allow the default behavior of the link to be executed. If the user clicks cancel, cancel the default browser behavior by specifing return false
// 5. when a link is clicked and the user chooses not to go to the url, remove the link from the DOM


// Part III:
// 1. Create an HTML page with one, giant button in the center
// 2. When the giant button is clicked, a popup is created. The popup is simply a div containing some HTML content, which has a class applied making it appear with position fixed in the middle of the page. The popup should not exist in your HTML page. It is created entirely with jQuery.
// 3. Add a close button to the popup. When clicked, the popup should be removed from the DOM.


$(document).on("ready", function() {
	
	//================================================================
	// Part III
	// create via jquery
	$(".btnBig").on("click", function() {
		
		//$('body').append('<div class="myPopup"><button class="myXBtn">X</button><br/><br/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit commodi, dolore nam praesentium sed officia labore laborum reprehenderit blanditiis placeat harum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit commodi, dolore nam praesentium sed officia labore laborum reprehenderit blanditiis placeat harum</p></div>');
		
		var popup = $('<div>')
			.addClass('myPopup')
			.append($('<button>').addClass("myXBtn").text('X'))
			.append($('<br/><br/>'))
			.append($('<p>').text(
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis architecto laboriosam libero molestias ratione rerum quidem impedit iusto veritatis deserunt, illo, quam accusantium? Eveniet quod delectus porro quisquam sapiente sint?"));
		//console.log(popup);
		$('body').append(popup);
		
		$('.myPopup').css({
			backgroundColor:'pink', 
			width: 300,
			height: 300,
			padding: 20,
			position:'fixed',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)'
		});
		$('.myXBtn').css({
			float:'right',	
		});
		$('.myXBtn').on("click", function() {
			$('.myPopup').remove();
		});
	});	

	// create via javascript dom
	/*
	$(".btnBig").on("click", function() {
		var div = document.createElement('div');
		div.id = "popupStyle";
		document.body.appendChild(div);
		
		var p = document.createElement('p');
		var strLorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit commodi, dolore nam praesentium sed officia labore laborum reprehenderit blanditiis placeat harum Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit commodi, dolore nam praesentium sed officia labore laborum reprehenderit blanditiis placeat harum";
		txt = document.createTextNode(strLorem);
		p.appendChild(txt);
		document.getElementById("popupStyle").appendChild(p);

		var btn =document.createElement('button');
		btn.id = "popupClose";
		txtBtn = document.createTextNode("close");
		btn.appendChild(txtBtn);
		document.getElementById("popupStyle").appendChild(btn);
		
		document.getElementById("popupStyle").style.position = "fixed";
		document.getElementById("popupStyle").style.left = "50%";
		document.getElementById("popupStyle").style.top = "50%";
		document.getElementById("popupStyle").style.width = "300px";
		document.getElementById("popupStyle").style.height = "300px"
		document.getElementById("popupStyle").style.background = "pink";
		document.getElementById("popupStyle").style.transform = "translate(-50%, -50%)";

		$("#popupClose").on("click",function() {
			//console.log("test");
			$("#popupStyle").remove();
		});

	});
	*/
	
	//================================================================
	// Part II
	// 2.2 mouseover
	$("#para1").on("mouseover", function() {
		$("#para1").css("background","pink");
	});

	// // 2.3 add exclamation to the end of each heading
	$(".myHeadings").on("click", function() {
		$(".myHeadings").append("!");
	});

	// 2.4
	$("#link2Google").on("click", function(e){
		var userInput = confirm("Do you want to go to Google?");
		if (!userInput) {
			$(this).replaceWith($(this).text());
			//$(this).replaceWith("replace");
			//$(this).html()
			return false;			
		}
	});


	//================================================================
	// Part I
	// 1.2. click 
	$("#btnPrint2Console").click(function(){
		console.log("this is a test!");
		//console.log("this is a test 2!", this); // show all html statement
		//console.log("this is a test 2!", $(this)); // show jquery wrap object
	});


	// e is event, contain about the event itslef, where is the mouse when it is clicked
	// $("#btnPrint2Console").click(function(e){
	// 	console.log(e); 
	// });

	// 1.3. append text
	$("#btnAppendText").click(function(){
		$("body").append("<p>this is using append() method to add some text</p>");
	});

	// 1.4. append h1
	$("#btnAppendHeading").click(function() {
		$("body").append("<h1>this is using append() method to add to h1 tag</h1>")
	});

	// 1.5. append an unorder list with three list itmes
	$("#btnAppendulandli").click(function() {
			$("body").append("<ul>");
			for (var i=0; i<3;i++) {
				$("ul").append("<li>itemString" + i + "</li>");
			};
			$("body").append("</ul>");
	});

	//================================================================
	// // Experiments
	// $("#link2Google").on("click", function(e) {
	// 	// 2 ways to not behavior the default
	// 	// a: is using preventDefault() method
	// 	//e.preventDefault(); 
	// 	console.log("clicked the google link!")
	// 	// b: is return false for the function, same as e.preventDefault()
	// 	return false;
	// });

});	



