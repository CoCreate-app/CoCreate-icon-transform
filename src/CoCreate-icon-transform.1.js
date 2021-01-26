	/*!
 * https://cocreate.app
 * https://github.com/CoCreate-app/Icon_Transform
 * Released under the MIT license
 * https://github.com/CoCreate-app/Icon_Transform/blob/master/LICENSE
 //*/	

 //var list_icon_transform = document.querySelectorAll("i[data-transform_to]")
 //for (var icon of list_icon_transform) {
 //     icon.addEventListener("click", function(e) {
	// 		if(typeof this.dataset.transform_to != 'undefined'){
	// 			var transform_to = this.dataset.transform_to;
	// 			var class_name = this.className;
	// 			this.className = transform_to;
	// 			this.dataset.transform_to = class_name;
	// 		}
	// 		e.preventDefault();
 //     });
 //}
 
document.addEventListener('click', function(e) {
	if (e.target && e.target.tagName == "I" && e.target.getAttribute('data-transform_to')) {
		let t_icon = e.target;
		
		if(typeof t_icon.dataset.transform_to != 'undefined'){
			var transform_to = t_icon.dataset.transform_to;
			var class_name = t_icon.className;
			t_icon.className = transform_to;
			t_icon.dataset.transform_to = class_name;
		}
		e.preventDefault();
		
	}
})
