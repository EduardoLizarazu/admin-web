enum Status {
    PENDENT = 0,
    ACTIVE = 1,
    REJECT = 2,
}

interface servicesOnCourse {
    id: string;
    to: string;
    userId: string;
    date: Date;
    status: string;
}

class servicesOnCourseModel implements servicesOnCourse {
    id: string;
    to: string;
    userId: string;
    date: Date;
    status: string;

    constructor (
        servicesOnCourse: servicesOnCourse
    ) {
        this.id = servicesOnCourse.id;
        this.userId = servicesOnCourse.userId;
        this.to = servicesOnCourse.to;
        this.date = servicesOnCourse.date;
        this.status = servicesOnCourse.status;
    }
    
    
    toPlainObject() {
        return {
            id: this.id || "",
            to: this.to || "",
            userId: this.userId || "",
            date: this.date || new Date(),
            status: this.status || "",
        };
    } 

}