export class CountryModel {
    public id: number;
    public name: string;
    public code: string;
    public flagUrl: string;
    public isActive: boolean = false;
  }

  export class LanguageModel {
    public title: string;
    public code: string;
    public name?: string;
  }
  