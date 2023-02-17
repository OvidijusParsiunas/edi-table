import {PaginationUtils} from '../../../../utils/outerTableComponents/pagination/paginationUtils';
import {RowsPerPageSelectButtonElement} from '../button/rowsPerPageSelectButtonElement';
import {PageButtonContainerElement} from '../../pageButtons/pageButtonContainerElement';
import {RowsPerPageDropdownItem} from './rowsPerPageDropdownItem';
import {ActiveTable} from '../../../../activeTable';

export class RowsPerPageDropdownItemUtil {
  private static updateRowsAndPaginationComponents(at: ActiveTable, optionsButton: HTMLElement, newRowsPerPage: string) {
    PageButtonContainerElement.repopulateButtons(at);
    RowsPerPageSelectButtonElement.updateButtonText(optionsButton, newRowsPerPage);
    PaginationUtils.displayRowsForDifferentButton(at, 1);
  }

  private static getNewRowsPerPage(at: ActiveTable, newRowsPerPage: string) {
    const {_pagination, content, dataStartsAtHeader} = at;
    if (_pagination.isAllRowsOptionSelected) {
      return dataStartsAtHeader ? content.length : content.length - 1;
    }
    return Number(newRowsPerPage);
  }

  public static setNewRowsPerPage(at: ActiveTable, optionsButton: HTMLElement, newRowsPerPage: string) {
    at._pagination.isAllRowsOptionSelected = newRowsPerPage.toLocaleLowerCase() === RowsPerPageDropdownItem.ALL_ITEM_TEXT;
    at._pagination.rowsPerPage = RowsPerPageDropdownItemUtil.getNewRowsPerPage(at, newRowsPerPage);
    RowsPerPageDropdownItemUtil.updateRowsAndPaginationComponents(at, optionsButton, newRowsPerPage);
  }
}
