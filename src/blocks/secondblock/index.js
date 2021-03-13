import "./styles.editor.scss";
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
import {
  RichText,
  BlockControls,
  AlignmentToolbar,
  InspectorControls,
  PanelColorSettings,
} from "@wordpress/block-editor";

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
  styles: [
    // Mark style as default.
    {
      name: "default",
      label: __("Rounded"),
      isDefault: true,
    },
    {
      name: "outline",
      label: __("Outline"),
    },
    {
      name: "squared",
      label: __("Squared"),
    },
  ],
  attributes: {
    content: {
      type: "string",
      source: "html",
      selector: "p",
    },
    alignment: {
      type: "string",
    },
    backgroundColor: {
      type: "string",
    },
    textColor: {
      type: "string",
    },
  },
  edit: ({ className, attributes, setAttributes }) => {
    const { content, alignment, backgroundColor, textColor } = attributes;
    const onChangeContent = (content) => {
      setAttributes({ content });
    };
    const onChangeAlignment = (alignment) => {
      setAttributes({ alignment });
    };
    const onChangeBackgroundColor = (backgroundColor) => {
      setAttributes({ backgroundColor });
    };
    const onChangeTextColor = (textColor) => {
      setAttributes({ textColor });
    };
    return (
      <>
        <InspectorControls>
          <PanelColorSettings
            title={__("Panel", "mytheme-blocks")}
            colorSettings={[
              {
                value: backgroundColor,
                onChange: onChangeBackgroundColor,
                label: __("Background Color", "mytheme-blocks"),
              },
              {
                value: textColor,
                onChange: onChangeTextColor,
                label: __("Text Color", "mytheme-blocks"),
              },
            ]}
          />
        </InspectorControls>
        <BlockControls>
          <AlignmentToolbar onChange={onChangeAlignment} value={alignment} />
        </BlockControls>
        <RichText
          tagName="p"
          className={className}
          onChange={onChangeContent}
          value={content}
          style={{
            textAlign: alignment,
            backgroundColor: backgroundColor,
            color: textColor,
          }}
        />
      </>
    );
  },
  save: ({ attributes }) => {
    const { content, alignment, backgroundColor, textColor } = attributes;
    return (
      <RichText.Content
        tagName="p"
        value={content}
        style={{
          textAlign: alignment,
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      />
    );
  },
});
