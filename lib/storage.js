class Storage {
  constructor(storageId, objData) {
    // Pass storageId to save json string data after each operation in localStorage
    // local storageId is important to retrieve old saved data
    this.globalArr = [];
    this.fetchData = this.fetchData(storageId, objData);
  }
  // create methods to perform operations like save/edit/delete/add data
  fetchData(storageId, objData) {
    this.globalArr.push(objData);
    localStorage.setItem(storageId, JSON.stringify(this.globalArr));
    let data = new Table(storageId);
  }
}
