
var numR;

numR = Math.floor(Math.random()*13);

const winner = ["Best Consumer Solution","Best Enterprise Solution","Most Innovative Soulution",
"Best Gaming Solution", "Best Health Solution","Best Agricultural Solution",
 "Best Educational Solution","Best Financial Solution","Best Hackathon Solution", 
 "Best 'South African' Solution", "Best Campus Cup Soulution","Best African Solution","Huawei Catergory 15" 
];

 function selected() {
    return  console.log(winner[numR]);
}

function refreshPage(){
    window.location.reload();
}
