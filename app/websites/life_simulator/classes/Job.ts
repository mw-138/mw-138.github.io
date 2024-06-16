import JobSalary from "./JobSalary";

export default class Job {
  public id: string;
  public label: string;
  public description: string;
  public salary: JobSalary;

  constructor(
    id: string,
    label: string,
    description: string,
    yearlySalary: number,
  ) {
    this.id = id;
    this.label = label;
    this.description = description;
    this.salary = new JobSalary(yearlySalary);
  }
}
