var students = [];
var num = 0;

function get(x){
	return document.getElementById(x);
}

function addmarks(){
	if (get("math").value == "" || get("science").value == "" ||get("english").value == "" || get("punjabi").value == "" || get("hindi").value == "" || get("sst").value == "") {
		get("info").innerText = `Please enter the marks.`;
	} else {
		if (get('math').value>100  || get('science').value>100 || get('english').value>100  || get('punjabi').value>100 || get('hindi').value>100  || get('sst').value>100 || get('math').value<0 || get('science').value<0 || get('english').value<0 || get('punujabi').value<0 || get('hindi').value<0 || get('sst').value<0 ) {
			get("info").innerText='Marks should be between 0 and 100.';
		} else {
			window['student'+num] = {
                	name: (get("name").value).toLowerCase(),
                	math: get('math').value,
                	science: get('science').value,
                	english: get('english').value,
					punjabi: get('punjabi').value,
					hindi: get('hindi').value,
					sst: get('sst').value,
            	}
    		students.push(window['student'+num]);
			num++;
			get("info").innerText = `Marks of ${num} student/s entered!`;
			get("math").value = "";
			get("science").value = "";
			get("english").value = "";
			get("punjabi").value = "";
			get("hindi").value = "";
			get("sst").value = "";
		}
	}
}

//Display student info
function result(){
	var input = get("stuname").value.toLowerCase();
	var output = get("output");

	for (var i=0; i < students.length; i++) {
		if (students[i].name === input) {
			var avgmarks = Math.round((Number(students[i].math) + Number(students[i].science) + Number(students[i].english) + Number(students[i].punjabi) + Number(students[i].hindi) + Number(students[i].sst))/6);
			output.innerHTML=`<h4>Math: ${students[i].math}</h4>
			<h4>Science: ${students[i].science}</h4>
			<h4>English: ${students[i].english}</h4>
			<h4>Punjabi: ${students[i].punjabi}</h4>
			<h4>Hindi: ${students[i].hindi}</h4>
			<h4>Sst: ${students[i].sst}</h4>
			<h4>Average Marks: ${avgmarks}</h4>`;
			break;
		}
		else{
			output.innerHTML="<h4>No student found</h4>"
		}
	}
}