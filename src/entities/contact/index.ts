export type Bank = {
  name: string;
  card: string;
};

export type Document = {
  citizenship: string;
  passport: string;
  issued: string;
  validityPeriodPassport: string;
  placeOfBirth: string;
  registration: string;
  patent: string;
  validityPeriodPatent: string;
  snils: string;
  inn: string;
  medicalBook: string;
};

export type HRInfo = {
  post: string;
  division: string;
  solution: string;
  source: string;
  date: string;
  note: string;
};

export type Contact = {
  id: number;
  name: string;
  phone: string;
  gender: string;
  birthday: string;
  metro: string;
  adress: string;
  bank: Bank;
  documents: Document;
  hrInfo: HRInfo;
};
