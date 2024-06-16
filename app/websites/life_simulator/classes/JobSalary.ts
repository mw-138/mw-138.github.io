export default class JobSalary {
  public yearlyWage: number;

  constructor(yearlyWage: number) {
    this.yearlyWage = yearlyWage;
  }

  public getMonthlyWage(): number {
    return this.yearlyWage / 12;
  }
}
