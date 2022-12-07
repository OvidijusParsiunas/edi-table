import {CalendarFunctionality} from './calendarFunctionality';
import {CategoriesProperties} from './categoriesProperties';
import {InterfacesUnion} from './utilityTypes';
import {SortingFuncs} from './sortingFuncs';
import {CellText} from './tableContents';

// DO NOT USE THIS INTERFACE INTERNALLY - this is to be used by the client

interface Parent {
  name: string;
  // the reason why cell text is a string is because when it is extracted from an element it comes out in a string format
  validation?: (cellText: string) => boolean;
  removeOnFailedValidation?: boolean;
  failedValidationStyle?: () => void;
  customValidationStyleColors?: () => void;
  sorting?: SortingFuncs; // By default the elements will be sorted in ascending ASCII character order
  defaultText?: CellText;
}

interface Calendar extends Omit<Parent, 'sorting'> {
  calendar: CalendarFunctionality;
}

interface Categories extends Omit<Parent, 'validation'> {
  categories: CategoriesProperties | true;
}

export type ColumnType = InterfacesUnion<Calendar | Categories | Parent>;

export type ColumnTypes = ColumnType[];
