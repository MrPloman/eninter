import { Action } from "rxjs/internal/scheduler/Action";

export class ElementHeader {
  icon?: string;
  name: string;
  description: string;
  elements?: any[];
  action?: () => any;
}
