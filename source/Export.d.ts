
interface ExportOptions{
  delimiter?: string,
  contentType?: string,
  filename?: string,
  includeHeaders?: string,
  columns?: Array<string>,
  headers?: any,
  formatters?: any
}

export class Export{

  static create(options:ExportOptions):Export;

  static download(data:any):void;

  constructor(options:any);
  downloadCsv(data:Array<any>):void;
  
}

export default Export;
