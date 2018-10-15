export class Country {

    constructor(
        private id: number, 
        private description: string, 
        private title: string) { 
    }

    getId() {
        return this.id;
    }

    getDescription() {
        return this.description;
    }

    getTitle() {
        return this.title;
    }
}