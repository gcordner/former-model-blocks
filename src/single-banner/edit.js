import { useBlockProps } from "@wordpress/block-editor";

export default function Edit({ attributes }) {
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <p>
        <strong>Single Banner Block</strong>
      </p>
      <p>This is a placeholder. Media upload and link input coming next.</p>
    </div>
  );
}
