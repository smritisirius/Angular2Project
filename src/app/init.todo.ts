export class Init {

	load() {
		if(localStorage.getItem('todos') === null || 
			localStorage.getItem('todos') == undefined) {
			console.log("No todos found... creating one");

			var todos = [
		      {
		         text: "Pick chukti from office"
		      },
		      {
		        text: "Meet her after office"
		      },
		      {
		        text: "Dinner at office"
		      }
		    ];

		    localStorage.setItem('todos', JSON.stringify(todos));
		    return;
		}
		else {
			console.log("found todos");
		}
	}
}