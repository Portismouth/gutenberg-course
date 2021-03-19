import { createBlock } from "@wordpress/blocks";

const transforms = {
  from: [
    {
      type: "block",
      blocks: ["core/paragraph"],
      transform: ({ content, align }) => {
        return createBlock("mytheme-blocks/secondblock", {
          content: content,
          textAlignment: align,
        });
      },
    },
    {
      type: "prefix",
      prefix: "#",
      transform: () => {
        return createBlock("mytheme-blocks/secondblock");
      },
    },
  ],
  to: [
    {
      type: "block",
      blocks: ["core/paragraph"],
      isMatch: ({ content }) => {
        if (content) return true;
        return false;
      },
      transform: ({ content, textAlignment }) => {
        return createBlock("core/paragraph", {
          content: content,
          align: textAlignment,
        });
      },
    },
  ],
};

export default transforms;
