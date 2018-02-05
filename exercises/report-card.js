class ReportCard {
  constructor() {
    this.grades = {};
  }
  addGrade(subject, value) {
    this.grades[subject] = value;
  }
  getAverageGrade() {
    let result = 0;
    Object.keys(this.grades).forEach(function(subj) {
      result += this.grades[subj];
    }, this);
    return result / Object.keys(this.grades).length;
  }
}

const ahmedCard = new ReportCard();
ahmedCard.addGrade("maths", 20);
ahmedCard.addGrade("physics", 10);
ahmedCard.addGrade("kabab", 18);
ahmedCard.addGrade("bta3y", 4);
ahmedCard.addGrade("ishta", 7);
console.log(ahmedCard.getAverageGrade());
