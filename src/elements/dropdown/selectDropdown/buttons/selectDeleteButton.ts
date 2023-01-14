import {EditableTableComponent} from '../../../../editable-table-component';
import {SelectDeleteButtonEvents} from './selectDeleteButtonEvents';
import {SelectDropdownT} from '../../../../types/columnDetails';
import {DropdownItem} from '../../dropdownItem';
import {SelectButton} from './selectButton';

export class SelectDeleteButton {
  private static readonly DELETE_BUTTON_ICON_CLASS = 'select-button-icon';
  private static readonly DELETE_ICON_TEXT = '×';

  private static createIcon() {
    const iconElement = document.createElement('div');
    iconElement.classList.add(SelectDeleteButton.DELETE_BUTTON_ICON_CLASS);
    iconElement.innerText = SelectDeleteButton.DELETE_ICON_TEXT;
    return iconElement;
  }

  private static createButton(etc: EditableTableComponent, selectDropdown: SelectDropdownT) {
    const buttonElement = document.createElement('div');
    buttonElement.classList.add(DropdownItem.DROPDOWN_ITEM_IDENTIFIER, SelectButton.SELECT_BUTTON_CLASS);
    SelectDeleteButtonEvents.addEvents(etc, selectDropdown, buttonElement);
    return buttonElement;
  }

  private static createContainer() {
    const containerElement = document.createElement('div');
    containerElement.classList.add(SelectButton.SELECT_BUTTON_CONTAINER_CLASS);
    return containerElement;
  }

  public static create(etc: EditableTableComponent, selectDropdown: SelectDropdownT) {
    const containerElement = SelectDeleteButton.createContainer();
    const buttonElement = SelectDeleteButton.createButton(etc, selectDropdown);
    const iconElement = SelectDeleteButton.createIcon();
    buttonElement.appendChild(iconElement);
    containerElement.appendChild(buttonElement);
    return containerElement;
  }

  public static changeVisibility(itemElement: HTMLElement, rightSideDelta: number, displayOnDropdown?: HTMLElement) {
    const buttonContainerElement = itemElement.children[2] as HTMLElement;
    buttonContainerElement.style.display = displayOnDropdown ? 'block' : 'none';
    if (displayOnDropdown) {
      const buttonElement = buttonContainerElement.children[0] as HTMLElement;
      buttonElement.style.left = `${displayOnDropdown.offsetWidth - rightSideDelta}px`;
    }
  }
}