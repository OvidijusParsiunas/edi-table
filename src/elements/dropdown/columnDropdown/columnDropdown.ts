import {EditableTableComponent} from '../../../editable-table-component';
import {ElementViewPort} from '../../../utils/elements/elementViewPort';
import {HeaderCellEvents} from '../../cell/headerCellEvents';
import {ColumnDropdownItem} from './columnDropdownItem';
import {CellEvents} from '../../cell/cellEvents';
import {DropdownItem} from '../dropdownItem';
import {SIDE} from '../../../types/side';
import {Dropdown} from '../dropdown';

export class ColumnDropdown extends Dropdown {
  private static focusNextItemOutsideOfInput(focusedElement: HTMLElement) {
    const itemElement = focusedElement.parentElement as HTMLElement;
    const nextItemElement = itemElement.nextSibling as HTMLElement;
    nextItemElement.focus();
  }

  // WORK - fix
  private static focusNextItem(dropdownElement: HTMLElement, event: KeyboardEvent) {
    event.preventDefault();
    const focusedElement = event.target as HTMLElement;
    const nextElement = focusedElement.nextSibling as HTMLElement;
    if (nextElement) {
      nextElement.focus();
    } else if (!nextElement) {
      // if at last item
      if (DropdownItem.doesElementContainItemClasses(focusedElement)) {
        ColumnDropdownItem.focusInputElement(dropdownElement);
      } else {
        // if currently inside of input item (assuming input is not last item)
        ColumnDropdown.focusNextItemOutsideOfInput(focusedElement);
      }
    }
  }

  private static resetDropdownPosition(dropdownElement: HTMLElement) {
    dropdownElement.style.left = '';
  }

  // prettier-ignore
  public static processTextAndHide(etc: EditableTableComponent) {
    const {
      overlayElementsState: {columnDropdown, fullTableOverlay},
      focusedCell: {element: cellElement, columnIndex}} = etc;
    // setCellToDefaultIfNeeded will not work without etc.contents containing trimmed text
    etc.contents[0][columnIndex as number] = (cellElement?.textContent as string).trim();
    CellEvents.setCellToDefaultIfNeeded(etc, 0, columnIndex as number, cellElement as HTMLElement);
    HeaderCellEvents.fadeCell(cellElement as HTMLElement);
    Dropdown.hideElements(columnDropdown as HTMLElement, fullTableOverlay as HTMLElement);
    ColumnDropdown.resetDropdownPosition(columnDropdown as HTMLElement);
  }

  private static onKeyDown(this: EditableTableComponent, dropdownElement: HTMLElement, event: KeyboardEvent) {
    if (event.key === Dropdown.ENTER_KEY) {
      const itemElement = event.target as HTMLElement;
      if (DropdownItem.doesElementContainItemClasses(itemElement)) {
        ColumnDropdown.processTextAndHide(this);
      } else {
        itemElement.click();
      }
    } else if (event.key === Dropdown.ESCAPE_KEY) {
      ColumnDropdown.processTextAndHide(this);
    } else if (event.key === Dropdown.TAB_KEY) {
      ColumnDropdown.focusNextItem(dropdownElement, event);
    }
  }

  public static create(etc: EditableTableComponent, areHeadersEditable: boolean) {
    const dropdownElement = Dropdown.createBase();
    dropdownElement.onkeydown = ColumnDropdown.onKeyDown.bind(etc, dropdownElement);
    if (areHeadersEditable) ColumnDropdownItem.addCellTextInputItem(dropdownElement);
    DropdownItem.addTitle(dropdownElement, 'Property type');
    ColumnDropdownItem.addColumnTypeNestedDropdownItem(dropdownElement);
    ColumnDropdownItem.addSortButton(dropdownElement, 'Ascending');
    ColumnDropdownItem.addSortButton(dropdownElement, 'Descending');
    DropdownItem.addButtonItem(dropdownElement, 'Insert Right');
    DropdownItem.addButtonItem(dropdownElement, 'Insert Left');
    DropdownItem.addButtonItem(dropdownElement, 'Delete');
    return dropdownElement;
  }

  private static getLeftPropertyToCenterDropdown(cellDimensions: DOMRect) {
    return `${cellDimensions.left + cellDimensions.width / 2 - Dropdown.DROPDOWN_WIDTH / 2}px`;
  }

  // TO-DO will this work correctly when a scrollbar is introduced
  private static displayAndSetDropdownPosition(cellElement: HTMLElement, dropdownElement: HTMLElement) {
    const dimensions = cellElement.getBoundingClientRect();
    dropdownElement.style.left = ColumnDropdown.getLeftPropertyToCenterDropdown(dimensions);
    dropdownElement.style.top = `${dimensions.bottom}px`;
    // needs to be displayed in order to evalute if in view port
    dropdownElement.style.display = Dropdown.CSS_DISPLAY_VISIBLE;
    const visibilityDetails = ElementViewPort.getVisibilityDetails(dropdownElement);
    if (!visibilityDetails.isFullyVisible) {
      const tableElement = dropdownElement.parentElement as HTMLElement;
      if (visibilityDetails.blockingSide === SIDE.LEFT) {
        dropdownElement.style.left = `${tableElement.getBoundingClientRect().left}px`;
      } else if (visibilityDetails.blockingSide === SIDE.RIGHT) {
        dropdownElement.style.left = `${tableElement.getBoundingClientRect().right - Dropdown.DROPDOWN_WIDTH}px`;
      }
    }
  }

  // WORK
  // should be text by default unless the user actually sets it to number, date, currency, etc.
  // option to place input masks if type has been set by user or placed inside a config
  // option to automatically infer the type on blur

  // prettier-ignore
  // WORK - how will this positioning work with scrolling
  public static displayRelevantDropdownElements(etc: EditableTableComponent, columnIndex: number, event: MouseEvent) {
    const fullTableOverlay = etc.overlayElementsState.fullTableOverlay as HTMLElement;
    const dropdownElement = etc.overlayElementsState.columnDropdown as HTMLElement;
    const cellElement = event.target as HTMLElement;
    ColumnDropdownItem.setUpContent(etc, dropdownElement, columnIndex, cellElement);
    ColumnDropdown.displayAndSetDropdownPosition(cellElement, dropdownElement);
    ColumnDropdownItem.focusInputElement(dropdownElement);
    ColumnDropdownItem.rebindButtonItems(etc, columnIndex, dropdownElement);
    fullTableOverlay.style.display = Dropdown.CSS_DISPLAY_VISIBLE;
  }
}