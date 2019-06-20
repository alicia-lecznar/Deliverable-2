


function what_to_wear() {
    var tempFahr = prompt("What is the temperature?");
    var eventType = prompt("Is the event casual, semi-formal, or formal?");

    var dressLevel;
    var jacketType;

    if (eventType === "casual") {
        dressLevel = "something comfy";
    }
    if (eventType === "semi-formal") {
        dressLevel = "a polo";
    }
    if (eventType === "formal") {
        dressLevel = "a suit";
    }

    if (tempFahr < 54) {
        jacketType = "a coat";
    }
    if (54 <= tempFahr < 70) {
        jacketType = "a jacket";
    }
    if (tempFahr > 70) {
        jacketType = "no jacket";
    }

 alert("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + dressLevel + " and " + jacketType );

    return (result);

}

    console.log(what_to_wear());





