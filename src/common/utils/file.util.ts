/* eslint-disable @typescript-eslint/no-explicit-any */
import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { EXCEL_STYLE } from '../const/style.const';
import { FileWithPreviewOrUrl } from '../interfaces';

export const styleDefaultRowExcel = (row: ExcelJS.Row) => {
  row.eachCell((cell) => {
    cell.border = EXCEL_STYLE.border as any;
    cell.font = EXCEL_STYLE.content.fontBlack;
    cell.alignment = EXCEL_STYLE.content.alignment as any;
  });
};

export const styleDefaultHeaderExcel = (row: ExcelJS.Row) => {
  row.font = EXCEL_STYLE.header.font;
  row.alignment = EXCEL_STYLE.header.alignment as any;
  row.eachCell((cell) => {
    cell.border = EXCEL_STYLE.border as any;
    cell.fill = EXCEL_STYLE.header.fill as any;
  });
};

export const fitColumnWidthHeightExcel = (
  worksheet: ExcelJS.Worksheet,
  fixedHeightRows?: Set<number>, //  Những dòng sẽ style height bằng tay không áp dụng auto fit
  rowHeight?: number,
) => {
  worksheet.columns.forEach((column: any) => {
    let maxLength = 0;
    column.eachCell({ includeEmpty: true }, (cell: any) => {
      if (cell.isMerged || (cell.master && cell.master.address !== cell.address)) return;
      if (cell.value != null) {
        const length = cell.value.toString().trim().length;
        if (length > maxLength) maxLength = length;
      }
    });

    const width = maxLength + 3;
    column.width = Math.max(width, 7);
  });

  worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
    if (fixedHeightRows?.has(rowNumber)) return;

    let maxLines = 1;
    row.eachCell({ includeEmpty: true }, (cell) => {
      if (cell.value) {
        const lines = cell.value.toString().split('\n').length;
        if (lines > maxLines) maxLines = lines;
      }
    });
    row.height = maxLines * (rowHeight || 18);
  });
};

export async function exportArrayObjectToExcel<T extends object>(
  array: T[],
  fileName: string,
  columnNameObj: Partial<Record<keyof T, string>>,
  sheetName = 'SHEET',
) {
  if (!array.length) throw new Error('Array is empty');

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet(sheetName || 'SHEET');

  // HEADER
  const keys = Object.keys(columnNameObj) as (keyof T)[];
  const headers = keys.map((key) => columnNameObj[key]!);
  const headerRow = worksheet.addRow(headers);
  styleDefaultHeaderExcel(headerRow);

  array.forEach((obj) => {
    // ROW
    const dataRow = keys.map((key) => (obj as any)[key]);
    const row = worksheet.addRow(dataRow);
    styleDefaultRowExcel(row);
  });

  fitColumnWidthHeightExcel(worksheet);

  const buffer = (await workbook.xlsx.writeBuffer()) as any;

  const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  saveAs(blob, fileName);
}

export const downloadFileFromBlob = (response: any, fileName?: string) => {
  const contentDisposition = response.headers['content-disposition'];
  if (contentDisposition) {
    const match = contentDisposition.match(/filename="(.+)"/);
    if (match && match[1]) fileName = decodeURIComponent(match[1]);
  }

  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `${fileName || 'export'}.xlsx`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

export const getFileExtension = (file: FileWithPreviewOrUrl): string => {
  const name = typeof file === 'string' ? file : file?.name || '';
  return name.split('.').pop()?.toLowerCase() || '';
};

export const isImageFile = (file: FileWithPreviewOrUrl): boolean => {
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'svg'];
  return imageExtensions.includes(getFileExtension(file));
};
