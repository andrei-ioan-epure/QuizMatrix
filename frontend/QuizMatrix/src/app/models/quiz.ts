export class Quiz {
    id_quiz: number;
    id_domain: number;
    title: string;
    description: string;
    creation_date: Date;
    time: number;

    constructor(
        id_quiz: number,
        id_domain: number,
        title: string,
        description: string,
        creation_date: Date,
        time: number
      ) {
        this.id_quiz = id_quiz;
        this.id_domain = id_domain;
        this.title = title;
        this.description = description;
        this.creation_date = creation_date;
        this.time = time;
      }
};