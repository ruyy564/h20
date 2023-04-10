import { Contact } from '.';

export const getContactId = (contact: Contact) => contact.id;
export const getContactName = (contact: Contact) => contact.name;
export const getContactAdress = (contact: Contact) => contact.adress;
export const getContactBirthday = (contact: Contact) => contact.birthday;
export const getContactGender = (contact: Contact) => contact.gender;
export const getContactMetro = (contact: Contact) => contact.metro;
export const getContactPhone = (contact: Contact) => contact.phone;

export const getContactBank = (contact: Contact) => contact.bank;
export const getContactBankName = (contact: Contact) => contact.bank.name;
export const getContactBankCard = (contact: Contact) => contact.bank.card;

export const getContactDocuments = (contact: Contact) => contact.documents;
export const getContactDocumentsCitizenship = (contact: Contact) =>
  contact.documents.citizenship;
export const getContactDocumentsInn = (contact: Contact) =>
  contact.documents.inn;
export const getContactDocumentsIssued = (contact: Contact) =>
  contact.documents.issued;
export const getContactDocumentsMedicalBook = (contact: Contact) =>
  contact.documents.medicalBook;
export const getContactDocumentsPassport = (contact: Contact) =>
  contact.documents.passport;
export const getContactDocumentsPatent = (contact: Contact) =>
  contact.documents.patent;
export const getContactDocumentsPlaceOfBirth = (contact: Contact) =>
  contact.documents.placeOfBirth;
export const getContactDocumentsRegistration = (contact: Contact) =>
  contact.documents.registration;
export const getContactDocumentsSnils = (contact: Contact) =>
  contact.documents.snils;
export const getContactDocumentsValidityPeriodPassport = (contact: Contact) =>
  contact.documents.validityPeriodPassport;
export const getContactDocumentsValidityPeriodPatent = (contact: Contact) =>
  contact.documents.validityPeriodPatent;

export const getContactHrInfo = (contact: Contact) => contact.hrInfo;
export const getContactHrInfoDate = (contact: Contact) => contact.hrInfo.date;
export const getContactHrInfoDivision = (contact: Contact) =>
  contact.hrInfo.division;
export const getContactHrInfoNote = (contact: Contact) => contact.hrInfo.note;
export const getContactHrInfoPost = (contact: Contact) => contact.hrInfo.post;
export const getContactHrInfoSolution = (contact: Contact) =>
  contact.hrInfo.solution;
export const getContactHrInfoSource = (contact: Contact) =>
  contact.hrInfo.source;
