//Question No. 1

function describeValue(value) {
    return `${typeof value} | ${value ? "truthy" : "falsy"}`;
}

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
console.log(describeValue(true));
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue("0"));
console.log(describeValue(NaN));










//Question No. 2

function getDayType(day){
    const dayCase = day.toLowerCase();

    switch(dayCase){
         case 'sunday':
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
            return "Working Day";
           

        case 'friday':
        case 'saturday':
            return 'Weekend';
      

        default:
            return 'Invalid Day';
    }
}

console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"))










//Question No. 3

function validateUsername (username){
    const userNameCase = username.toLowerCase();
    if(userNameCase.length < 4){
        return "Too Short";
    }

    else if(userNameCase.includes(" ")){
        return "No Space Allowed";
    }

    else if ( userNameCase.includes("admin")){
        return "Reserved Word"
    }

    else{
        return "Available"
    }
}


console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));    
console.log(validateUsername("superadmin99"));    
console.log(validateUsername("Admin_Rahim"));    










//Question No. 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let totalCost = 0;

    const initialCost = 50

    if (distance <= 2) {
        totalCost = initialCost;
    }
    else {
        const remainingDistance = distance - 2;

        totalCost = totalCost + initialCost + (remainingDistance * 15);



    }


    if (waitingMinutes > 0) {
        totalCost = totalCost + (waitingMinutes * 2);
    }

    if (isNight) {
        totalCost = totalCost + (totalCost * 0.2);
    }

    return totalCost;


}



console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true, 10));









//Question No. 5


const getChaseVerdict = (target, scored, ballsLeft)=>{
    let runNeeded = target - scored;

    if(runNeeded <= 0){
        return "Won";
    }

    else if(ballsLeft <= 0){
        return "Lost";
    }

    else{
        let requiredRate = (runNeeded/ ballsLeft) * 6;

        if(requiredRate <= 6){
            return `Need ${runNeeded} runs in ${ballsLeft} balls | Comfortable`;
        }

        else if(requiredRate > 6 && requiredRate <= 12){
            return `Need ${runNeeded} runs in ${ballsLeft} balls | Tough`;
        }

        else{
            return `Need ${runNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
        }
    }
};


console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));
