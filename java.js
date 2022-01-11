var names=new Array();
names[0]="annie";
names[1]="Joy";
names[2]="rose";
names[3]="julie";
names[4]="fred";
names[5]="Jannet";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
