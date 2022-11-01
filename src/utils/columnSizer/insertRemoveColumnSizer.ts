import {ColumnsDetailsT, ColumnDetailsT, ColumnDetailsTPartial} from '../../types/columnDetails';
import {ColumnSizerOverlayElement} from '../../elements/columnSizer/columnSizerOverlayElement';
import {MovableColumnSizerElement} from '../../elements/columnSizer/movableColumnSizerElement';
import {ColumnSizerElementOverlay} from '../../elements/columnSizer/columnSizerElementOverlay';
import {ColumnSizerElement} from '../../elements/columnSizer/columnSizerElement';
import {EditableTableComponent} from '../../editable-table-component';
import {ColumnSizerT} from '../../types/columnSizer';
import {ColumnSizer} from './columnSizer';

export class InsertRemoveColumnSizer {
  private static updateIdsOfAllSubsequent(columnsDetails: ColumnsDetailsT, nextIndex: number) {
    columnsDetails.slice(nextIndex).forEach((columnDetails: ColumnDetailsT, index: number) => {
      const relativeIndex = nextIndex + index;
      ColumnSizerElement.setElementId(columnDetails.columnSizer.element, relativeIndex);
    });
  }

  private static applySizerStateToElements(columnSizer: ColumnSizerT) {
    const {element: sizerElement, movableElement, overlayElement, styles} = columnSizer;
    ColumnSizerElement.unsetElementsToDefault(sizerElement, styles.default.width);
    ColumnSizerElementOverlay.setWidth(sizerElement.children[0] as HTMLElement, styles.default.width);
    ColumnSizerElement.setStaticProperties(sizerElement, styles.static.marginRight);
    ColumnSizerElement.setBackgroundImage(sizerElement, styles.default.backgroundImage);
    MovableColumnSizerElement.setStaticProperties(movableElement, styles.static.marginRight, styles.hover.width);
    ColumnSizerOverlayElement.setStaticProperties(overlayElement, styles.static.marginRight, styles.hover.width);
  }

  private static insertAtIndex(etc: EditableTableComponent, newColumnDetails: ColumnDetailsTPartial, columnIndex: number) {
    // assuming this has already been added, otherwise pass it down through params
    const cellDividerElement = newColumnDetails.elements[0].nextSibling as HTMLElement;
    const columnSizer = ColumnSizer.create(etc, columnIndex);
    newColumnDetails.columnSizer = columnSizer;
    cellDividerElement.appendChild(columnSizer.element);
    cellDividerElement.appendChild(columnSizer.overlayElement);
    cellDividerElement.appendChild(columnSizer.movableElement);
    InsertRemoveColumnSizer.applySizerStateToElements(columnSizer);
  }

  private static updatePrevious(columnsDetails: ColumnsDetailsT, columnIndex: number) {
    const previousIndex = columnIndex - 1;
    if (previousIndex < 0) return;
    const {columnSizer} = columnsDetails[previousIndex];
    // no need for full creation as there is a need to retain the element and its bindings
    const newColumnSizer = ColumnSizer.createObject(columnSizer.element, columnsDetails, previousIndex);
    // cannot simply overwright columnSizer object as it has already binded to elements
    // movableElement ref is not overwritten
    Object.assign(columnSizer, newColumnSizer);
    InsertRemoveColumnSizer.applySizerStateToElements(columnSizer);
  }

  // prettier-ignore
  public static insert(etc: EditableTableComponent,
      columnsDetails: ColumnsDetailsT, newColumnDetails: ColumnDetailsTPartial, columnIndex: number) {
    InsertRemoveColumnSizer.updatePrevious(columnsDetails, columnIndex);
    InsertRemoveColumnSizer.insertAtIndex(etc, newColumnDetails, columnIndex);
    InsertRemoveColumnSizer.updateIdsOfAllSubsequent(columnsDetails, columnIndex + 1);
  }

  public static remove(columnsDetails: ColumnsDetailsT, columnIndex: number) {
    InsertRemoveColumnSizer.updatePrevious(columnsDetails, columnIndex);
    InsertRemoveColumnSizer.updateIdsOfAllSubsequent(columnsDetails, columnIndex);
  }
}
