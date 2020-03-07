//function loadjson(file,callback){
//var xhr= new XMLHttpRequest();
/*	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status===200){
			callback(xhr.responseText);
	}
};
xhr.send(null);
}

loadjson("data.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	basics(data.details);
})*/
function loadjson(file)
{
	return new promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else
			{
				reject(new error('error'));
			}
		})
	})
}
var newfile=loadjson("data.json");
newfile.then(data=>{
	console.o(data);
	basics?(data.details)
})
var ch=document.querySelector(".child1");
function basics(det){
	var img= document.createElement("img")
	img.src="Chrysanthemum.jpg";
	img.alt="picture";
	ch.appendchild(img);
	var s=document.createElement("h2")
	s.textContent=det.name;
	var email=document.createElement("a");
	email.href="mailto:sistubindu2001@gmail.com"
	email.textContent="sistubindu2001@gmail.com"
	ch.appendChild(email);
	var c=document.createElement("p");
	c.textContent=det.number;
	ch.appendChid(c);
}
var ch2=document.querySelector(".child2");
function careerinfo(infodata){
	var h1=document.createElement("p");
	h1.textContent=infodata.info;
	ch.appendChid(h2);
}
function educationdetails(edu){
	var table1=document.createElement("table");
	table1.border='1';
	ch2.appendChid(table1);


	tabledata="";
	for(i=0;i<edu[i].length;i++){
		tabledata+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passoutyear +"</td></tr>";

	}
	table1.innerHTML=tabledata;
}
	

