export interface Student {
  name: string;
  rollNo: string
  class:string;
  section:string;
  attendance:number;
  lastMarks:number;
  healthScore:number;
  status:'active' | 'watch' | 'at-risk'
}