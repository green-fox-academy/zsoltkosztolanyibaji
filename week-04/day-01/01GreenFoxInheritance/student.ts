"use strict";

import { Person } from "./person";

export class Student extends Person {
  previousOrganization: string;
  skippedDays: number = 0;

  constructor(
    name: string = "Jane Doe",
    age: number = 30,
    gender: string = "female",
    previousOrganization: string = "The School of Life",
    skippedDays: number = 0
  ) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
  }

  getGoal(): void {
    console.log("My goal is: Be a junior software developer.");
  }

  introduce(): void {
    console.log(
      "Hi, I'm " +
        this.name +
        ", a " +
        this.age +
        " year old " +
        this.gender +
        " from " +
        this.previousOrganization +
        " who skipped " +
        this.skippedDays +
        " days from the course already."
    );
  }
  skipDays(numberOfDays: number): void {
    this.skippedDays = this.skippedDays + numberOfDays;
  }
}
