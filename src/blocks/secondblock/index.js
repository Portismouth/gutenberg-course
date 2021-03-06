import "./styles.editor.scss";
const { __ } = wp.i18n;
import { registerBlockType } from "@wordpress/blocks";
import { RichText, getColorClassName } from "@wordpress/block-editor";
import Edit from "./edit";
import classnames from "classnames";
import deprecated from "./deprecated";
import attributes from "./block-attributes";
import transforms from "./transforms";

registerBlockType("mytheme-blocks/secondblock", {
  title: __("Second Block", "mytheme-blocks"),
  description: __("Our Second Block", "mytheme-blocks"),
  category: "layout",
  icon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  keywords: [__("photo", "mytheme-blocks"), __("image", "mytheme-blocks")],
  attributes,
  deprecated,
  transforms,
  edit: Edit,
  save: ({ attributes }) => {
    const {
      content,
      textAlignment,
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
          textAlign: textAlignment,
          backgroundColor: backgroundClass ? undefined : customBackgroundColor,
          color: textClass ? undefined : customTextColor,
        }}
      />
    );
  },
});
