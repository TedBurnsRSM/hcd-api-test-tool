export class ContentPage {
    title: string = "";

    constructor() {}

    updateTitle(value: string) {
    console.log(`updateTitle: ${value}`);
    this.title = value;
  }
}
