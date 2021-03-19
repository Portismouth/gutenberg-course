import { registerBlockStyle } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

const secondBlockStyles = [
  // Mark style as default.
  {
    name: "default",
    label: __("Rounded"),
    isDefault: true,
  },
  {
    name: "outline",
    label: __("Outline"),
    isDefault: false,
  },
  {
    name: "squared",
    label: __("Squared"),
    isDefault: false,
  },
];

const register = () => {
  secondBlockStyles.forEach((blockStyle) =>
    registerBlockStyle("mytheme-blocks/secondblock", blockStyle)
  );
};

wp.domReady(() => {
  register();
});
