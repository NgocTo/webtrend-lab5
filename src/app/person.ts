export class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    getAge(): number {
        let today: Date = new Date();
        let age: number = today.getFullYear() - this.dateOfBirth.getFullYear();

        // compare with date of birth with today's date
        if (this.dateOfBirth.getDate() > today.getDate() && this.dateOfBirth.getMonth() > today.getMonth())
        {
            age--;
        }
        return age;
    }
}
