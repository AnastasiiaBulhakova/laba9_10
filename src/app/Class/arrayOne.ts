export class ArrayOne {
    surnames: string[] = ["Шевченко", "Бойко", "Коваленко", "Мельник", "Бондаренко"];
    filteredSurnames: string[] = [];

    constructor() {
    }

    filterByLetter(letter: string) {
        this.filteredSurnames = [];
        if (!letter) return;

        const searchChar = letter.toLowerCase();

        this.filteredSurnames = this.surnames.filter(name =>
            name.toLowerCase().startsWith(searchChar)
        );
    }
}