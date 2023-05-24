import {OuterContainerDropdownI} from '../../../types/outerContainerInternal';
import {ActiveOverlayElements} from '../../../types/activeOverlayElements';
import {OuterDropdownButtonElement} from './outerDropdownButtonElement';
import {OuterDropdownButtonEvents} from './outerDropdownButtonEvents';
import {OuterContentPosition} from '../../../types/outerContainer';
import {ElementVisibility} from '../../elements/elementVisibility';
import {Dropdown} from '../../../elements/dropdown/dropdown';
import {OuterDropdownEvents} from './outerDropdownEvents';
import {ActiveTable} from '../../../activeTable';
import {SIDE} from '../../../types/side';

export class OuterDropdownElement {
  private static readonly DROPUP_CLASS = 'active-table-dropup';

  public static hide(activeOverlayElements: ActiveOverlayElements) {
    const dropdown = activeOverlayElements.outerContainerDropdown;
    if (dropdown) {
      Dropdown.hide(dropdown.element);
      if (dropdown.button.classList.contains(OuterDropdownButtonElement.AUTO_STYLING)) {
        OuterDropdownButtonElement.toggleIcon(dropdown.button);
      }
      delete activeOverlayElements.outerContainerDropdown;
    }
  }

  public static display(dropdown: OuterContainerDropdownI, at: ActiveTable) {
    if (dropdown.button.classList.contains(OuterDropdownButtonElement.AUTO_STYLING)) {
      OuterDropdownButtonElement.toggleIcon(dropdown.button);
    }
    Dropdown.display(dropdown.element);
    at._activeOverlayElements.outerContainerDropdown = dropdown;
  }

  public static displayReactToBottomVisibility(dropdown: OuterContainerDropdownI, at: ActiveTable) {
    dropdown.element.classList.remove(OuterDropdownElement.DROPUP_CLASS);
    OuterDropdownElement.display(dropdown, at);
    const visibilityDetails = ElementVisibility.getDetailsInWindow(dropdown.element, at._tableDimensions.border, false);
    if (!visibilityDetails.isFullyVisible && visibilityDetails.blockingSides.has(SIDE.BOTTOM)) {
      dropdown.element.classList.add(OuterDropdownElement.DROPUP_CLASS);
    }
  }

  private static setOrientation(dropdownElement: HTMLElement, position: OuterContentPosition) {
    if (position.endsWith('right')) dropdownElement.style.right = '0px';
  }

  private static createElement(additionalClasses?: string[]) {
    const dropdownElement = Dropdown.createBase();
    dropdownElement.style.width = '';
    dropdownElement.classList.add('outer-container-dropdown');
    if (additionalClasses) dropdownElement.classList.add(...additionalClasses);
    return dropdownElement;
  }

  // prettier-ignore
  public static create(at: ActiveTable,
      button: HTMLElement, position: OuterContentPosition, additionalClasses?: string[], hideFunc?: () => void) {
    const dropdownElement = OuterDropdownElement.createElement(additionalClasses);
    const hide = hideFunc || OuterDropdownElement.hide.bind(this, at._activeOverlayElements);
    const dropdown: OuterContainerDropdownI = {element: dropdownElement, hide, button: button};
    OuterDropdownElement.setOrientation(dropdownElement, position);
    OuterDropdownButtonEvents.set(at, button, position, dropdown);
    OuterDropdownEvents.set(at, dropdown);
    return dropdown;
  }
}
