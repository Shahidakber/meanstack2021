var employee =
{
    id:100,
    name:"shahid",
    desig:"developer",
    salary:25000
}
console.log(employee["salary"]);
employee["salary"]+=5000

if("gender" in employee)
{
    console.log("exist");

}
else{
    employee["gender"] = "male";
}
console.log(employee);