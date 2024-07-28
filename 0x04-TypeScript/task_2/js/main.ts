interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home';
  getCoffeeBreak = (): string => 'Cannot have a break';
  workTeacherTasks = (): string => 'Getting to work';
}

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary == 'number' && salary < 500) return new Teacher();
  else return new Director();
}

function isDirector(employee: any): employee is Director {
  return (employee as Director) !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): void {
  if (isDirector(employee)) {
    employee.workDirectorTasks();
  } else employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: string): string {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
}
