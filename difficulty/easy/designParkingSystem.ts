/** @url https://leetcode.com/problems/design-parking-system/ */
/**
 * @constraint
 * 자동차 타입은 대형, 중형, 소형이 있으며 1, 2, 3 으로 표기한다.
 */

class ParkingSystem {
  private big: number;
  private medium: number;
  private small: number;

  constructor(big: number, medium: number, small: number) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  }

  addCar(carType: number) {
    switch (carType) {
      case 1: {
        if (this.big !== 0) {
          this.big--;
          return true;
        }
        return false;
      }
      case 2: {
        if (this.medium !== 0) {
          this.medium--;
          return true;
        }
        return false;
      }
      case 3: {
        if (this.small !== 0) {
          this.small--;
          return true;
        }
        return false;
      }
      default: return false;
    }
  }
}

const parkingSystem = new ParkingSystem(1, 1, 0);
console.log(parkingSystem.addCar(1));
console.log(parkingSystem.addCar(2));
console.log(parkingSystem.addCar(3));
console.log(parkingSystem.addCar(1));

/* 살펴보기 */
function ParkingSystemFunction(...spaces: any) {
  this.spaces = spaces;
}

ParkingSystemFunction.prototype.addCar = function (car: number) {
  return this.spaces[car-1] ? this.spaces[car-1]-- && true : false;
};
