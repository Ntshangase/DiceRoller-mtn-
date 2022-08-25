
var numR;

numR = Math.ceil(Math.random()*14);

const winner = ["Best Consumer Solution","Best Enterprise Solution","Most Innovative Soulution",
"Best Gaming Solution", "Best Health Solution","Best Agricultural Solution",
 "Best Educational Solution","Best Financial Solution","Best Hackathon Solution", 
 "Best 'South African' Solution", "Best Campus Cup Soulution","Best African Solution","Huawei Catergory 15" 
];

function selected() {
    return console.log(winner[numR]);
}

export default new selected();