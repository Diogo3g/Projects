//Which generation are you?

function generation(a, b){
    let c = a + b;
    
    switch(c){
        case "m-3":
            console.log("Great Grandfather");
            break;
        case "f-3":
            console.log("Great Grandmother");
            break;
        case "m-2":
            console.log("Grandfather");
            break;
        case "f-2":
            console.log("Grandmother");
            break;
        case "m-1":
            console.log("Father");
            break;
        case "f-1":
            console.log("Mother");
            break;  
        case "m0":
            console.log("Me!");
            break;
        case "f0":
            console.log("Me!");
            break;
        case "m1":
            console.log("Son");
            break;
        case "f1":
            console.log("Daughter");
            break;
        case "m2":
            console.log("Grandson");
            break;
        case "f2":
            console.log("Granddaughter");
            break;
        case "m3":
            console.log("Great Grandson");
            break;
        case "f3":
            console.log("Great Granddaughter");
            break;   
        default:
            console.log("Something went wrong");
            break;
    };
    
};

generation("m", 0);



