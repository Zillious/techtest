import { User } from './user';
import { Company } from './company';

export class ResponseModel{
public page:number;
public per_page:number;
public total_page:number;
public total:number;

public data: User[];
public ad:Company;
}