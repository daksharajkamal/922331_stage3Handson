import {Employee} from './employee';
import {Department} from './department';
import {Skill} from './skill';

export class EmployeeTest{

    constructor(public id:number,
        public name:string,
        public salary:number,
        public permanent:boolean,
        public dept:Department,
        public skill:Skill[]){

        }
        display(){
            console.log("id:"+res.id);
            console.log("name:"+res.name);
            console.log("salary:"+res.salary);
            console.log("permanent:"+res.permanent);
            console.log("department id:"+res.dept.department_id);
            console.log("department name:"+res.dept.department_name);
            console.log("skill[0]: "+res.skill[0].id+","+res.skill[0].name);
            console.log("skill[1]: "+res.skill[1].id+","+res.skill[1].name);
            console.log("skill[2]: "+res.skill[2].id+","+res.skill[2].name);}
}

var res: Employee;
res={
    id:3,
    name:"John",
    salary:10000,
    permanent:true,
    dept:{
        department_id:1,
        department_name:'payroll'
    },
    skill:[{
        id:1,
        name:"HTML"
    }, {
        id:2,
        name:"CSS"
    }, {
        id:3,
        name:"JAVASCRIPT"
    }],
    dateOfBirth: new Date(21/3/2020)

};
let details=new EmployeeTest(res.id,res.name,res.salary,res.permanent,res.dept,res.skill);
details.display()
/* Uncomment below and comment class EployeeTest to get  Solution for questions except last one
console.log("id:"+res.id);
console.log("name:"+res.name);
console.log("salary:"+res.salary);
console.log("permanent:"+res.permanent);
console.log("department id:"+res.dept.department_id);
console.log("department name:"+res.dept.department_name);
console.log("skill[0]: "+res.skill[0].id+","+res.skill[0].name);
console.log("skill[1]: "+res.skill[1].id+","+res.skill[1].name);
console.log("skill[2]: "+res.skill[2].id+","+res.skill[2].name);*/