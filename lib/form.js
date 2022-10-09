class Form {
  constructor(formContainerId, formData, storageId) {
    this.renderForm(formContainerId, formData);
    this.globalObject = {};
    this.storageId = storageId;
    // Pass formContainerId to append form element inside of HTML DIV element
    this.mainContainer;
    this.leftContainer;
    this.rightContainer;
    this.leftElement;
    this.rightElement;
    this.label;
    this.globalObject = {};
  }
  // create methods/event to create form/ reset form/ submit form, etc
  isValidElement(input) {
    return (
      document.createElement(input).toString() != "[object HTMLUnknownElement]"
    );
  }

  renderForm(formContainerId, formData) {
    formData.forEach((ele) => {
      this.leftElement = document.createElement("label");
      this.rightElement = document.createElement(
        `${this.isValidElement(ele.type) ? ele.type : "input"}`
      );
      this.leftContainer = document.createElement("div");
      this.rightContainer = document.createElement("div");
      this.mainContainer = document.createElement("div");
      this.mainContainer.id = "inputLabel";
      this.callRecursiveIteration(
        ele,
        this.leftElement,
        this.rightElement,
        ele.key
      );
      this.leftContainer.appendChild(this.leftElement);
      this.leftContainer.classList = "left";
      if (
        ele.type !== "hidden" &&
        ele.type !== "radio" &&
        ele.type !== "checkbox"
      ) {
        this.rightContainer.appendChild(this.rightElement);
      }
      this.rightContainer.classList = "right";
      this.mainContainer.appendChild(this.leftContainer);
      this.mainContainer.appendChild(this.rightContainer);
      formContainerId.appendChild(this.mainContainer);
    });
  }

  callRecursiveIteration(Obj, leftElement, eleType, eleKey) {
    for (let key in Obj) {
      // ------------------------------------------
      if (key == "innerText") {
        eleType.innerText = Obj[key];
      }
      if (key === "label" && Obj.type != "hidden") {
        this.leftElement.innerText = Obj[key];
      }
      if (key === "id") {
        leftElement.setAttribute("for", Obj[key]);
      }
      // ------------------------------------------
      if (typeof Obj[key] === "object") {
        // ------------------------------------------
        this.callRecursiveIteration(Obj[key], leftElement, eleType, eleKey);
      } else {
        if (typeof Obj[key] == "function") {
          eleType.addEventListener(key.slice(2), (event) =>
            Obj.value === "Submit"
              ? this.handleSubmit(event, Obj[key])
              : this.handleEvent(event, Obj[key], eleKey)
          );
        } else {
          eleType.setAttribute(key, Obj[key]);
        }
      }
      // ------------------------------------------

      if (Obj[key].length != 0 && Array.isArray(Obj[key])) {
        if (Obj.type != "select") {
          this.handleIteration(Obj[key], Obj.type, eleKey);
        } else {
          this.handleIteration(Obj[key], Obj.type, eleKey);
        }
      }
    }
  }

  handleIteration(ObjArr, inputType, eleKey) {
    ObjArr.forEach((ele) => {
      if (inputType == "select") {
        let option = document.createElement("option");
        this.callRecursiveIteration(ele, this.label, option, eleKey);
        this.rightElement.appendChild(option);
      } else {
        let divContainer = document.createElement("div");
        let input = document.createElement("input");
        input.setAttribute("type", inputType);
        let label = document.createElement("label");
        this.callRecursiveIteration(ele, label, input, eleKey);
        label.innerText = ele.innerText;
        divContainer.appendChild(input);
        divContainer.appendChild(label);
        this.rightContainer.appendChild(divContainer);
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("done submitted");
    let data = new Storage(storageId, this.globalObject);
  }

  handleEvent(event, callBack, eleKey) {
    // console.log(event.target.value);
    // console.log("formCallback:======= " + callBack);
    this.globalObject[eleKey] = event.target.value;
    let data = new Storage(this.storageId, this.globalObject);
  }
}
