export class Blog {
  id: number;
  title: string;
  autor: string;
  text: string;
  constructor(id: number, title: string, autor: string, text: string){
    this.id = id;
    this.title = title;
    this.autor = autor;
    this.text = text;
  }
}
