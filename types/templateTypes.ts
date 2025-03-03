export interface Template {
    id: string;
    templateName: string;
    thumbnailPath: string;
    templateCreator: string;
    creatorProfileUrl: string;
  }
  
  export interface TemplatesData {
    templates: Template[];
  }