isl=[
    {team:"atk",played:17,won:11,draw:3,los:3,pts:36},
    {team:"mumbai",played:17,won:10,draw:4,los:3,pts:34},
    {team:"hyderabad",played:18,won:6,draw:9,los:3,pts:27},
    {team:"goa",played:18,won:6,draw:9,los:3,pts:27},
    {team:"northeast",played:18,won:6,draw:9,los:3,pts:27},
    {team:"benguluru",played:18,won:5,draw:7,los:6,pts:22},
    {team:"jamshed",played:18,won:5,draw:6,los:7,pts:21},
]
//to make upper case of mathches played
isl.map(tem=>tem.team.toUpperCase()).forEach(tem => console.log(tem))

//data=isl.sort((o1,o2)=>o1.played>o2.played?-1:1).forEach(tem=>console.log(tem))

//print details of highest points

var max=isl.map(tem=>tem.pts).reduce((o1,o2)=>o1>o2?o1:o2);
//console.log(max);
var teams=isl.reduce(((t1,t2)=>t1.pts>t2.pts?t1:t2))
//console.log(teams);
//print team with highest loss match
var team=isl.reduce(((t1,t2)=>t1.los<t2.los?t1.los:t2.los))
//console.log(team);
//if point above 32,then add a new element "status :qualified" else "status:not qualified"

isl.filter(tem=>tem.pts>32?tem["status"]="not qualified":tem["status"]=" qualified").forEach(tem=>console.log(tem))
