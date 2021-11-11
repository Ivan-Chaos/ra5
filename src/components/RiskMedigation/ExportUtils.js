import { cloneElement } from 'react';
import { jsPDF } from "jspdf";



export async function exportToPdf(gridElement, fileName) {
  const [{ jsPDF }, autoTable, { head, body, foot }] = await Promise.all([
    import('jspdf'),
    (await import('jspdf-autotable')).default,
    await getGridContent(gridElement)
  ]);
  const doc = new jsPDF({
    orientation: 'l',
    unit: 'px'
  });

  autoTable(doc, {
    head,
    body,
    foot,
    horizontalPageBreak: true,
    styles: { cellPadding: 1.5, fontSize: 8, cellWidth: 'wrap' },
    tableWidth: 'wrap'
  });
  doc.save(fileName);
}

async function getGridContent(gridElement) {
  const { renderToStaticMarkup } = await import('react-dom/server');
  const grid = document.createElement('div');
  grid.innerHTML = renderToStaticMarkup(
    cloneElement(gridElement, {
      enableVirtualization: false
    })
  );

  return {
    head: getRows('.rdg-header-row'),
    body: getRows('.rdg-row:not(.rdg-summary-row)'),
    foot: getRows('.rdg-summary-row')
  };

  function getRows(selector) {
    return Array.from(grid.querySelectorAll<HTMLDivElement>(selector)).map((gridRow) => {
      return Array.from(gridRow.querySelectorAll<HTMLDivElement>('.rdg-cell')).map(
        (gridCell) => gridCell.innerText
      );
    });
  }
}

function serialiseCellValue(value) {
  if (typeof value === 'string') {
    const formattedValue = value.replace(/"/g, '""');
    return formattedValue.includes(',') ? `"${formattedValue}"` : formattedValue;
  }
  return value;
}

function downloadFile(fileName, data) {
  const downloadLink = document.createElement('a');
  downloadLink.download = fileName;
  const url = URL.createObjectURL(data);
  downloadLink.href = url;
  downloadLink.click();
  URL.revokeObjectURL(url);
}