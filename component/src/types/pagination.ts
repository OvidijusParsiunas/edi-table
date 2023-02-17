import {OuterContainerContentPosition} from './outerContainer';
import {CSSStyle, StatefulCSS} from './cssStyle';

export interface PaginationPosition {
  position: OuterContainerContentPosition;
  order?: number;
}

export interface PaginationPositions {
  pageButtons?: PaginationPosition;
  numberOfVisibleRows?: PaginationPosition;
  rowsPerPageSelect?: PaginationPosition;
}

export interface RowsPerPageOptionsStyle<T = StatefulCSS> {
  container?: CSSStyle;
  prefixText?: CSSStyle;
  button?: T;
  buttonText?: T;
  buttonArrow?: T;
}

type ActionButtonStyle<T> = T & {
  previousText?: string;
  nextText?: string;
  firstText?: string;
  lastText?: string;
};

export interface PageButtonStyle<T = StatefulCSS> {
  container?: CSSStyle;
  buttons?: T;
  activeButton?: T;
  activeButtonPrecedence?: boolean; // by default false
  disabledButtons?: CSSStyle; // disabled buttons do not have any mouse events
  actionButtons?: ActionButtonStyle<T>; // will also use 'buttons' style
  firstVisibleButtonOverride?: CSSStyle;
  lastVisibleButtonOverride?: CSSStyle;
}

export interface PaginationStyle<T = StatefulCSS> {
  pageButtons: PageButtonStyle<T>;
  numberOfVisibleRows?: CSSStyle;
  rowsPerPageSelect?: RowsPerPageOptionsStyle<T>;
}

export interface RowsPerPageSelect {
  // 'All'|'all' causes all table rows to be displayed
  options?: (number | 'All' | 'all')[]; // by default [10, 25, 50, 'All']
  prefixText?: string; // by default 'Rows per page'
}

export interface Pagination {
  rowsPerPage?: number; // by default set to 10
  rowsPerPageSelect?: RowsPerPageSelect | boolean;
  maxNumberOfVisiblePageButtons?: number; // by default set to 8
  displayPrevNext?: boolean; // by default true
  displayFirstLast?: boolean; // by default true
  displayNumberOfVisibleRows?: boolean; // by default true
  style?: PaginationStyle;
  positions?: PaginationPositions;
}
