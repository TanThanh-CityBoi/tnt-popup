import {
  In,
  Not,
  IsNull,
  Between,
  MoreThanOrEqual,
  LessThanOrEqual,
  Like,
} from 'typeorm';

const findOperatorParser = (data) => {
  const dataParser = data.where || data;
  Object.keys(dataParser).map((itm) => {
    if (dataParser[itm] && dataParser[itm].type) {
      const { type, value } = dataParser[itm];
      switch (type) {
        case 'in':
          dataParser[itm] = In(value);
          break;
        case 'notin':
          dataParser[itm] = Not(In(value));
          break;
        case 'isnull':
          dataParser[itm] = IsNull();
          break;
        case 'between':
          const { from, to } = value;
          dataParser[itm] = Between(from, to);
          break;
        case 'moreThanOrEqual':
          dataParser[itm] = MoreThanOrEqual(value);
          break;
        case 'lessThanOrEqual':
          dataParser[itm] = LessThanOrEqual(value);
          break;
        case 'like':
          dataParser[itm] = Like(value);
          break;
      }
    }
  });
  return data;
};

export { findOperatorParser };
