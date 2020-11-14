import { Request, Response } from 'express';

import Post from '../models/post';

interface IDate {
  year: string;
  months: string[];
}

function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}
const dummyDate = [
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
  { createdAt: randomDate(new Date(2010, 0, 1), new Date()) },
];

class DateController {
  async getMonthsAndYears(req: Request, res: Response) {
    const dates: IDate[] = [];
    const findOnDb = (await Post.find({}).select('createdAt -_id')) as any;
    findOnDb.forEach((el: any) => {
      const date = new Date(el.createdAt);
      const index = dates.findIndex(
        (el) => el.year === date.getFullYear().toString()
      );
      if (index === -1) {
        dates.push({
          year: date.getFullYear().toString(),
          months: [(date.getMonth()).toString()],
        });
      } else if (
        !dates[index].months.includes((date.getMonth()).toString())
      ) {
        dates[index].months.push((date.getMonth()).toString());
      }
    });
    dates.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    dates.forEach(({ months }) =>
      months.sort((a, b) => parseInt(a) - parseInt(b))
    );
    return res.status(200).json(dates);
  }
}

export default DateController;
