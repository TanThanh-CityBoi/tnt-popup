export const messParser = {
    In: (value: Array<any>) => {
      return { type: 'in', value };
    },
    NotIn: (value: Array<any>) => {
      return { type: 'notin', value };
    },
    IsNull: () => {
      return { type: 'isnull' };
    },
    Between: (from: any, to: any) => {
      return { type: 'between', value: { from, to } };
    },
    MoreThanOrEqual: (value: any) => {
      return { type: 'moreThanOrEqual', value };
    },
    LessThanOrEqual: (value: any) => {
      return { type: 'lessThanOrEqual', value };
    },
    Like: (value: any) => {
      return { type: 'like', value };
    },
  };
  