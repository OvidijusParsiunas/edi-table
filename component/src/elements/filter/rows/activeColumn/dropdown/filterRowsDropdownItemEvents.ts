import {OuterDropdownItemEvents} from '../../../../../utils/outerTableComponents/dropdown/outerDropdownItemEvents';
import {FilterRowsInternalConfig} from '../../../../../types/filterInternal';
import {FilterRowsInputEvents} from '../../input/filterRowsInputEvents';
import {FilterRowsDropdownElement} from './filterRowsDropdownElement';
import {ActiveTable} from '../../../../../activeTable';

export class FilterRowsDropdownItemEvents {
  private static resetEvents(config: FilterRowsInternalConfig, at: ActiveTable, targetText: string) {
    if (config.activeColumnName !== targetText) {
      config.activeColumnName = targetText;
      FilterRowsInputEvents.setEvents(at, config);
    }
  }

  public static setEvents(at: ActiveTable, item: HTMLElement, config: FilterRowsInternalConfig) {
    const actionFunc = FilterRowsDropdownItemEvents.resetEvents.bind(this, config);
    const hideFunc = FilterRowsDropdownElement.hide;
    item.onmousedown = OuterDropdownItemEvents.itemMouseDownCommon.bind(at, actionFunc, hideFunc);
  }
}