/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare var jquery: any;

interface JQueryStatic {
  notify(options: any, settings: any);
  tooltip(options?: any): any;
}

declare let Chartist: any;

