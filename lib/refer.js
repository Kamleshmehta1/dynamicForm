class Form {
    constructor(formContainerId, formData) {
      this.renderForm(formContainerId, formData);
      this.globalObject = {};
      // Pass formContainerId to append form element inside of HTML DIV element
    }
    // create methods/event to create form/ reset form/ submit form, etc
  
    renderForm(formContainerId, formData) {
      formData.forEach((ele) => {
        let input = document.createElement("input");
        let label = document.createElement("label");
  
        let labelInput = document.createElement("div");
        labelInput.id = "inputLabel";
  
        let left = document.createElement("div");
        left.classList = "left";
        let right = document.createElement("div");
        right.classList = "right";
  
        if (ele.type == "hidden") {
          for (let x in ele) {
            if (typeof ele[x] === "function") {
              input.setAttribute(`${x}`, `${ele[x]}`)
            } else {
              input.setAttribute(`${x}`, `${ele[x]}`)
            }
            right.appendChild(input);
            labelInput.appendChild(right)
          }
        }
  
        if (ele.attr && ele.type !== "hidden" && ele.type != "select") {
          label.setAttribute("for", `${ele.attr.id}`);
          input.setAttribute("id", `${ele.attr.id}`);
        }
  
        if (ele.type !== "submit" && ele.type !== "reset" && ele.type != "hidden") {
          label.innerText = `${ele.label}`;
          left.appendChild(label);
        }
  
        if (
          ele.type !== "select" &&
          ele.type !== "radio" &&
          ele.type !== "checkbox"
        ) {
          if (ele.type) {
            input.setAttribute(
              `${this.getKeyByValue(ele, ele.type)}`,
              `${ele.type}`
            );
          }
          if (ele.attr) {
            for (let x in ele.attr) {
              if (typeof ele.attr[x] === "function" && ele.type !== "submit" && ele.type !== "reset") {
                input.addEventListener(`${x.toString().slice(2)}`, (event) => this.callMe(event, ele.attr[x], ele.key))
              } else if (ele.type === "submit") {
                input.addEventListener(`${x.toString().slice(2)}`, (event) => this.handleSubmit(event, ele.attr[x], ele.key))
              } else {
                input.setAttribute(`${x}`, `${ele.attr[x]}`);
              }
            }
          }
          right.appendChild(input);
        }
        if (ele.type === "select") {
          this.createSelect(ele, right);
        }
        labelInput.appendChild(left);
        labelInput.appendChild(right);
  
        if (ele.type === "radio") {
          this.createToggleButtons(ele.options, ele, right);
        }
  
        if (ele.type === "checkbox") {
          this.createToggleButtons(ele.options, ele, right);
        }
        formContainerId.appendChild(labelInput);
      });
    }
    getUniqueId() {
      return "number";
    }
  
    handleSubmit(e) {
      e.preventDefault();
      console.log("submit called");
      let data = new Storage("mainData", this.globalObject);
    }
  
    getKeyByValue(object, value) {
      return Object.keys(object).find((key) => object[key] === value);
    }
  
    xyz(...fields) {
      console.log('fields', { fields })
  
    }
    createSelect(ele, right) {
      let select = document.createElement("select");
      if (ele.options) {
        ele.options.forEach((ele) => {
          let option = document.createElement("option");
          option.innerText = `${ele.innerText}`;
          option.setAttribute("value", `${ele.value}`);
          select.appendChild(option);
        });
      }
      for (let x in ele.attr) {
        // if (typeof ele.attr[x] === "function") {
        //   select.addEventListener(`${x.toString().slice(2)}`, (event) => this.callMe(event, ele.attr[x], ele.key));
        // }
        // select.setAttribute(`${x}`, typeof ele.attr[x] === 'function' ? (
        //   ele.attr[x] = function x(asa){console.log(asa)}) : `${ele.attr[x]}`);
        if (typeof ele.attr[x] === "function") {
          select.on(`${ele.attr[x]}`, function (data) {
            console.log('First subscriber: ' + data);
          });
        }
      }
      right.appendChild(select);
    }
  
    // create radio buttons
    createToggleButtons(options, ele, right) {
      options.forEach((item) => {
        let label = document.createElement("label");
        let input = document.createElement("input");
        let div = document.createElement("div");
        label.setAttribute(
          `${this.getKeyByValue(item, item.value)}`,
          `${item.value}`
        );
        label.innerText = item.innerText;
        for (let x in item.attr) {
          if (x === "innerText") {
            label.innerText = x;
          } else {
            input.setAttribute(
              `${this.getKeyByValue(ele, ele.type)}`,
              `${ele.type}`
            );
            input.setAttribute(
              `${this.getKeyByValue(item, item.name)}`,
              `${item.name}`
            );
            if (item.value === item.attr[x]) {
              label.setAttribute("for", `${item.attr[x]}`);
            }
            if (typeof item.attr[x] == "function") {
              //   input.addEventListener(`${x.toString().slice(2)}`, (event) => this.callMe(event, item.attr[x], ele.key));
              // } else {
              input.setAttribute(`${x}`, `${item.attr[x]}`);
            }
          }
        }
        div.appendChild(input);
        div.appendChild(label);
        right.appendChild(div);
        right.appendChild(div);
      });
    }
    // call-back function
    callMe(event, formCallback, eleKey) {
      console.log("formCallback:======= " + formCallback);
      console.log(eleKey);
      this.globalObject[eleKey] = event.target.value
    }
  }