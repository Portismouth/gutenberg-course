const attributes = {
  content: {
    type: "string",
    source: "html",
    selector: "h4",
  },
  alignment: {
    type: "string",
  },
  textAlignment: {
    type: "string",
  },
  backgroundColor: {
    type: "string",
  },
  textColor: {
    type: "string",
  },
  customBackgroundColor: {
    type: "string",
  },
  customTextColor: {
    type: "string",
  },
  shadow: {
    type: "boolean",
    default: false,
  },
  shadowOpacity: {
    type: "number",
    default: 0.3,
  },
};

export default attributes;
