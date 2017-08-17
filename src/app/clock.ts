export class Clock {
  clockIn: number = 0;
  minimumClockOut: number = 0;
  normalClockOut: number = 0;
  maximumClockOut: number = 0;
  maximumExtraTime: number = 0;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}