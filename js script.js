var names = new Array();
names[0] = "Adam";
names[1] = "Ewe";
names[2] = "John";
names[3] = "Isaya";
names[4] = "Caleb";
names[5] = "Jonatan";
names[6] = "Rut";
names[7] = "Noah";
names[8] = "job";
names[9] = "Danyel";

for (var i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === 'J' || names[i].charAt(0) === 'j') {
        console.log("Goodbye " + names[i])
    }
    else {
        console.log("Hello " + names[i])
    }
}