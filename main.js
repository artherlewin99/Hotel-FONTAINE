// Identifying the DOM elements

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const adultInput = document.getElementById("adult");
const childrenInput = document.getElementById("child");
const chekinInput = document.getElementById("checkInDate");
const chekoutInput = document.getElementById("checkOutDate");
const numberofdaysoutput = document.getElementById("numofDays");
const roomTypeInput = document.getElementById("roomtype");
const numRoomsInput = document.getElementById("numberofRooms");
const wifiInput = document.getElementById("wifi");
// const extraallInput = document.getElementByName("extrareq");
const poolInput = document.getElementById("pool");
const poolview = document.getElementById("poolview");
const gardenview = document.getElementById("gardenview");
const extrabdInput = document.getElementById("extrabd");
const bookbtn = document.getElementById("roombookbtn");
const popUpoutput = document.getElementById("popup");
const addfavbtn = document.getElementById("addfavbtn");
const cheakfavbtn = document.getElementById("cheakfavbtn");
const promocodeInput = document.getElementById("promocode");
const adventureInput = document.getElementById("adventure_selection");
const guideInput = document.getElementsByName("guidence");
const bookadventurebtn = document.getElementById("adventurebookbtn");
const adventureaddfavbtn = document.getElementById("adventurefavbtn");
const adventurecheakfavbtn = document.getElementById("adventurecheakfavbtn");

const promoButton = document.getElementById("checkPromo");
const bookButton = document.getElementById("roombookbtn");
const outputText1 = document.getAnimations("output1");

const localAdultInput = document.getElementById("total_adults");
const localKidsInput = document.getElementById("total_children");
const foreignerAdultInput = document.getElementById("total_aduls_forign");
const foreignerKidsInput = document.getElementById("total_children_forign");









// Declaring Variables

let total;
let room;
let numofRooms;
let roomcost;
let numberofadults;
let numberofChildren;
let numberOfDays;
let promoCode;
let advCost;
let guide;
let guideCost;
let guide1;
let guide2;
let extraRequirements;
let wifi;
let poolView;
let promoCost;
let finalCost;
let finalPayable;
let differenceindays;
let adventurevarious;
let adventurePeople1;
let adventurePeople2;
let adventurePeople3;
let adventurePeople4;

let numberDaysCal;
let adventureType;

let bedCost;

//local&foreign 
let foreignKidCost;
let foreignAdultCost;
let localKidCost;
let localAdultCost;

// Event listners


//  .addEventListener("click", outputfunction);

chekinInput.addEventListener("input", dateCalFunction);
chekoutInput.addEventListener("input", dateCalFunction);
// extraallInput.forEach(item =>item.addEventListener("change", extrareqFunction));
adventureInput.addEventListener("change" , adventureFunction);
guideInput.forEach((item) => item.addEventListener("change", guideCalFunction));
roomTypeInput.addEventListener("change",roomTypeFunction);
addfavbtn.addEventListener("click", addFavFunction);

numRoomsInput.addEventListener("input", numberofroomsfunction);

extrabdInput.addEventListener("change", extraBedFunction);
promoButton.addEventListener("click", promoButtonFunction);

bookButton.addEventListener("click", bookButtonFunction);


//local and foreigner adventure part

localAdultInput.addEventListener("input", localAdultFunction);
localKidsInput.addEventListener("input",localKidsFunction);
foreignerAdultInput.addEventListener("input",foreignerAdultFunction);
foreignerKidsInput.addEventListener("input", foreignerKidsFunction);








// Event listner functions


function initialize(){
    total = 0;
    roomcost = 0;
    room = "";
    numberofChildren = 0;
    numberofadults = 1;
    numberOfDays = 1;
    promoCode = "";
    advCost = 0;
    guide = "";
    guide1 = "";
    guide2 = "";
    guideCost = 0;
    extraRequirements = "";
    wifi = "";
    poolView = "";
    promoCost = 0;
    finalCost = 0;
    finalPayable = 0;
    differenceindays = 0;
    adventurePeople1 = "";
    adventurevarious = "";
    adventure = "";
    numofRooms=1;
    adventureType = "";
    bedCost = 0;

    foreignKidCost = 0;
    foreignAdultCost = 0;
    localKidCost = 0;
    localAdultCost = 0;
    
}


function foreignerKidsFunction(){
    foreignKidCost = foreignerKidsInput.value * 5000

    total = ((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost +foreignKidCost;
    currentcost.innerText = `${total}`;

}

function foreignerAdultFunction(){
    foreignAdultCost = foreignerAdultInput.value * 10000

    total = ((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost +foreignKidCost +foreignAdultCost;
    currentcost.innerText = `${total}`;


}

function localKidsFunction(){
    localKidCost = localKidsInput.value * 2000

    total = ((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost +foreignKidCost +foreignAdultCost +localKidCost;
    currentcost.innerText = `${total}`;
}

function localAdultFunction(){
    localAdultCost = localAdultInput.value * 5000

    total = ((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost +foreignKidCost +foreignAdultCost +localKidCost +localAdultCost;
    currentcost.innerText = `${total}`;

}









function promoButtonFunction(){

    if(promocodeInput.value === "Promo123"){
 // Total - (Total*0.05)


            //   100 - (100*0.05)
            //   100 - 5
            //   95
   total = ( ((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost +foreignKidCost +foreignAdultCost +localKidCost +localAdultCost) - ((((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost +foreignKidCost +foreignAdultCost +localKidCost +localAdultCost)*0.05);
   currentcost.innerText = `${total} (Promo Valid!)`;
    }
    else{
        alert("Invalid Promo");

    }


}



function extraBedFunction(){
    if (this.checked){
        bedCost = 8000;
    }
    else{
        bedCost = 0
    }

    total = ((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost +foreignAdultCost ;
    currentcost.innerText = `${total}`;




}



function numberofroomsfunction(){
    numofRooms = numRoomsInput.value
    console.log(`${numofRooms}`)



    total = ((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost +foreignAdultCost;
    currentcost.innerText = `${total}`;

    
    
    currentBooking.innerText = `${adventureType}`
}




function adventureFunction(){
    if (adventureInput.value.toLowerCase() === "hillclimb") {
        adventureType = "Hill Climb"
        console.log(`${adventureType}`);
        
      } else if (adventureInput.value.toLowerCase() === "diving") {
        adventureType = "Diving"
        console.log(`${adventureType}`);
        
      } else {
        adventureType = "Rafting"
        console.log(`${adventureType}`);
        
      }

      currentBooking.innerText = `${adventureType}`


}

function addFavFunction(){
    
}


function roomTypeFunction(){
  

    if (roomTypeInput.value.toLowerCase() === "single") {
        roomcost = 25000;
        room = "single";
        console.log(`${roomcost}`);
      } else if (roomTypeInput.value.toLowerCase() === "double") {
        roomcost = 35000;
        room = "double";
        console.log(`${roomcost}`);
        
      } else {
        roomcost = 40000;
        room = "triple";
        console.log(`${roomcost}`);
        
      }
    
      total = ((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost ;
    currentcost.innerText = `${total}`;


    currentBooking.innerText = `Room Type is ${room} `
    

}






function dateCalFunction(){

    
    numberOfDays = Math.abs(new Date(chekoutInput.value) - new Date(chekinInput.value));
    numberDaysCal =((Math.ceil(numberOfDays/(1000*60*60)))/24);
    console.log(`${numberDaysCal}`);

    total = ((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost ;
    currentcost.innerText = `${total}`;



    currentBooking.innerText = `${adventureType}`

    numDayUpdate.innerText = `${numberDaysCal} Day(s)`

    

}






function extrareqFunction(){
    // if(this.value == "wifi"){
    //     if(this.checked){
    //         wifi = "WIFI Included \n";
    //     }else{
    //         wifi = " ";
    //     }
    // }else if(this.value == "pool"){
    //     if(this.checked){
    //         pool = "POOL Included \n";
    //     }else{
    //         pool = " ";
    //     }
    // }else if(this.value == "poolview"){
    //     poolView = " Pool View Included";
    // }else if(this.value == "gardenview"){
    //     poolView = " Garden View Included";
    // }else{
    //     poolView = " ";
    // }
    // extraRequirements = wifi + poolView;
    // outputText2.innerText = `${extraRequirements}`
}




function guideCalFunction(){

    let adultOrKid = this.value.toLowerCase();

    if (adultOrKid === "adult") {
        if (this.checked) {
          guideCost += 1000;
          guide1 = "Adult Guide checed"
        } else {
          guideCost -= 1000;
          guide1="";
        }
      } else {
        if (this.checked) {
          guideCost += 500;
          guide2 = "Kids Guide checked"
        } else {
          guideCost -= 500;
          guide2= "";
        }
      }

      total = ((roomcost*numofRooms + bedCost)* numberDaysCal)+ guideCost ;
    currentcost.innerText = `${total}`;

    currentBooking.innerText = `${adventureType}`


}



function bookButtonFunction(){
  outputText1.innerText = `Order has been placed!!!
     \n Order Details :
      \n Room Type is ${room} and the number of Rooms are ${numofRooms}
       \n Room Cost is (Without promotions) ${roomcost}
        \n Extra Requirements are ${extraRequirements}
         \n Promotion Amount is ${promoCost}
          \n Final Cost Per day ${finalCost}
           \n Adventure Cost is LKR ${advCost}
            \n Total Payable (Including number of days) ${finalPayable}`;

}



   
    


initialize();






































