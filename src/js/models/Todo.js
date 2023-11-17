export class Todo 
{
    name; 
    description;
    createdDate
    deadline;
    assignedTo;

    constructor(name, description, deadline, createdDate, assignedTo){
        this.name = name;
        this.description = description;
        this.createdDate = createdDate;
        this.deadline = deadline; 
        this.assignedTo = assignedTo;
    }
}