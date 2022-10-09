class Table {
  constructor(storageId, tableContainerId) {
    // Pass tableContainerId to append table inside of HTML DIV element
    this.renderTable = this.renderTable(storageId, tableContainerId);
  }
  // create methods/event to refresh table data, add data row, update data row, delete data row, etc
  renderTable(storageId, tableContainerId) {
    let data = JSON.parse(localStorage.getItem(storageId));
    console.log(data);


    
  }
}
