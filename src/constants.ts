export enum STATUS {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum ORDER {
  ASC = 'asc',
  DESC = 'desc',
}

export type Styles = {
  readonly [key: string]: string;
};
