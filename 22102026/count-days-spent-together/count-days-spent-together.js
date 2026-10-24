const arriveAlice = "08-15";
const leaveAlice = "08-18";
const arriveBob = "08-16";
const leaveBob = "08-19";
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const toDayOfYear = (dateStr) => {
    const [month, day] = dateStr.split("-").map(Number);
    let totalDays = 0;
    for (let i = 0; i < month - 1; i++) {
      totalDays += daysInMonth[i];
    }
    return totalDays + day;
  }

  const startA = toDayOfYear(arriveAlice);
  const endA = toDayOfYear(leaveAlice);
  const startB = toDayOfYear(arriveBob);
  const endB = toDayOfYear(leaveBob);

  const overlapStart = Math.max(startA, startB);
  const overlapEnd = Math.min(endA, endB);
  return Math.max(0, overlapEnd - overlapStart + 1);
};
console.log(countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob));