var formData = [
  {
    type: "hidden",
    key: "userId",
    label: "User Id",
    unique: true,
    getValue: function () {
      return getRandomNumber();
    },
  },
  {
    type: "hidden",
    key: "createdAt",
    label: "Created At",
    getValue: function () {
      return new Date().getTime();
    },
  },
  {
    type: "text",
    label: "Name",
    key: "name",
    value: "",
    attr: {
      id: "txtName1",
      class: "form-control textInput",
      placeholder: "Enter name",
      name: "txtName",
      required: true,
      onchange: function (e) {},
    },
  },
  {
    type: "email",
    label: "Email",
    key: "email",
    value: "",
    attr: {
      id: "txtEmail",
      class: "form-control textInput",
      placeholder: "Enter email",
      name: "txtName",
      required: true,
      onchange: function (e) {},
    },
  },
  {
    type: "tel",
    label: "Phone",
    key: "phone",
    value: "",
    attr: {
      id: "txtPhone",
      class: "form-control textInput",
      placeholder: "Enter phone number",
      name: "txtName",
      required: true,
      onchange: function (e) {},
    },
  },
  {
    type: "textarea",
    label: "Address",
    key: "address",
    value: "",
    attr: {
      id: "txtAddress",
      class: "form-control textInput",
      placeholder: "Enter Address",
      rows: "5",
      name: "txtName",
      required: true,
      onchange: function (e) {
      },
    },
  },
  {
    type: "text",
    label: "Street Address",
    key: "street_address",
    value: "",
    attr: {
      id: "txtStreet",
      class: "form-control textInput",
      placeholder: "Enter Street Address",
      name: "txtName",
      required: true,
      onchange: function (e) {},
    },
  },
  {
    type: "text",
    label: "City",
    key: "city",
    value: "",
    attr: {
      id: "txtCity",
      class: "form-control textInput",
      placeholder: "Enter City",
      name: "txtName",
      required: true,
      onchange: function (e) {},
    },
  },
  {
    type: "text",
    label: "State",
    key: "state",
    value: "",
    attr: {
      id: "txtState",
      class: "form-control textInput",
      placeholder: "Enter State",
      name: "txtName",
      required: true,
      onchange: function (e) {},
    },
  },
  {
    type: "number",
    label: "Pin Code",
    key: "pin_code",
    value: "",
    attr: {
      id: "txtPincode",
      class: "form-control textInput",
      placeholder: "Enter Pin Code",
      name: "txtName",
      required: true,
      onchange: function (e) {},
    },
  },
  {
    type: "select",
    label: "Country",
    key: "country",
    value: [],
    attr: {
      id: "txtCountry",
      name: "country",
      required: true,
      class: "form-control columns",
      onclick: function (e, d) {},
    },
    options: [
      {
        innerText: "Select Country",
        value: "",
      },
      {
        innerText: "India",
        value: "india",
      },
      {
        innerText: "United States",
        value: "united-states",
      },
      {
        innerText: "Sri Lanka",
        value: "sri-lanka",
      },
    ],
  },
  {
    type: "radio",
    label: "Gender",
    key: "gender",
    value: "",
    options: [
      {
        innerText: "Male",
        value: "male",
        name: "gender",
        attr: {
          id: "male",
          class: "form-check-input radioGender",
          required: true,
          onchange: function (e) {},
        },
      },
      {
        innerText: "Female",
        value: "female",
        name: "gender",
        attr: {
          id: "female",
          class: "form-check-input radioGender",
          required: true,
          onchange: function (e) {},
        },
      },
    ],
  },
  {
    type: "checkbox",
    label: "Hobbies",
    key: "hobbies",
    value: "",
    options: [
      {
        innerText: "Swimming",
        value: "swimming",
        name: "hobbies",
        attr: {
          id: "swimming",
          class: "form-check-input radioHobbies",
          onchange: function (e) {},
        },
      },
      {
        innerText: "Singing",
        value: "singing",
        name: "hobbies",
        attr: {
          id: "singing",
          class: "form-check-input radioHobbies",
          onchange: function (e) {},
        },
      },
      {
        innerText: "Writing",
        value: "writing",
        name: "hobbies",
        attr: {
          id: "writing",
          class: "form-check-input radioHobbies",
          onchange: function (e) {},
        },
      },
    ],
  },
  {
    type: "submit",
    attr: {
      id: "btnSubmit",
      name: "btnSubmit",
      class: "btn btn-block btn-primary submit",
      value: "Submit",
      onclick: function (e) {},
    },
  },
  {
    type: "reset",
    attr: {
      id: "btnReset",
      name: "btnReset",
      class: "btn btn-block btn-primary reset",
      value: "Reset",
      onclick: (e, obj, array, dataObjArray) => {},
    },
  },
];
