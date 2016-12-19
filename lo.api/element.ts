namespace lo {
 module api {
  export function ready() { }
  export function getDOMElement(id: string): HTMLElement { return null; }
  export function getDocumentModel(id: string): any { return null; }
  export function supports(event: string, method: any) { }
 }
 namespace elements {
  class Element {
   element: HTMLElement;
   id: string = 'dddd';
   documentModel: any;
   constructor() {

    api.ready = () => {
     this.element = api.getDOMElement(this.id);
     this.element = api.getDocumentModel(this.id);
     api.supports('check', this.check);
     api.supports('reset', this.reset);
    }

   }
   check() { }
   reset() { }

  }
 }
}