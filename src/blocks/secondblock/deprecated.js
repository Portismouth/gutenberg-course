import { RichText, getColorClassName } from "@wordpress/block-editor";
import classnames from "classnames";
import { omit } from "lodash";
import attributes from "./block-attributes";

const deprecated = [
  {
    attributes: omit(
      {
        ...attributes,
      },
      ["textAlignment"]
    ),
    migrate: (attributes) => {
      return omit(
        {
          ...attributes,
          textAlignment: attributes.alignment,
        },
        ["alignment"]
      );
    },
    save: ({ attributes }) => {
      const {
        content,
        alignment,
        backgroundColor,
        textColor,
        customTextColor,
        customBackgroundColor,
        shadow,
        shadowOpacity,
      } = attributes;
      const backgroundClass = getColorClassName(
        "background-color",
        backgroundColor
      );
      const textClass = getColorClassName("color", textColor);

      const classes = classnames({
        [backgroundClass]: backgroundClass,
        [textClass]: textClass,
        "has-shadow": shadow,
        [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity,
      });

      return (
        <RichText.Content
          tagName="h4"
          className={classes}
          value={content}
          style={{
            textAlign: alignment,
            backgroundColor: backgroundClass
              ? undefined
              : customBackgroundColor,
            color: textClass ? undefined : customTextColor,
          }}
        />
      );
    },
  },
  {
    attributes: omit(
      {
        ...attributes,
        content: {
          type: "string",
          source: "html",
          selector: "p",
        },
      },
      ["textAlignment"]
    ),
    migrate: (attributes) => {
      return omit(
        {
          ...attributes,
          textAlignment: attributes.alignment,
        },
        ["alignment"]
      );
    },
    save: ({ attributes }) => {
      const {
        content,
        alignment,
        backgroundColor,
        textColor,
        customTextColor,
        customBackgroundColor,
        shadow,
        shadowOpacity,
      } = attributes;
      const backgroundClass = getColorClassName(
        "background-color",
        backgroundColor
      );
      const textClass = getColorClassName("color", textColor);

      const classes = classnames({
        [backgroundClass]: backgroundClass,
        [textClass]: textClass,
        "has-shadow": shadow,
        [`shadow-opacity-${shadowOpacity * 100}`]: shadowOpacity,
      });

      return (
        <RichText.Content
          tagName="p"
          className={classes}
          value={content}
          style={{
            textAlign: alignment,
            backgroundColor: backgroundClass
              ? undefined
              : customBackgroundColor,
            color: textClass ? undefined : customTextColor,
          }}
        />
      );
    },
  },
];

export default deprecated;
