
//syntax of switch case in js:-

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break; // if break ni lagate..to jha v switch case match hota uske bad ka sara agey ka cases print ho jata except default. isliye hm break lagate hai after every case
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}