import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType("mytheme-blocks/firstblock", {
  title: __("First Block", "mytheme-blocks"),
  description: __("Our First Block", "mytheme-blocks"),
  category: "layout",
  icon: "admin-network",
  keywords: [__("photo", "mytheme-blocks"), __("image", "mytheme-blocks")],
  edit: function () {
    return <p>Editor</p>;
  },
  save: function () {
    return <p>Saved Changes</p>;
  },
});
