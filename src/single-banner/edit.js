import {
  useBlockProps,
  MediaUpload,
  MediaUploadCheck,
  URLInput,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
  const { mobileImage, desktopImage, bannerUrl } = attributes;
  const blockProps = useBlockProps();

  const fallback = desktopImage || mobileImage;

  return (
    <div {...blockProps}>
      <h4>{__("Single Banner Block", "fm-blocks")}</h4>

      {/* Image upload buttons */}
      <MediaUploadCheck>
        <MediaUpload
          onSelect={(media) =>
            setAttributes({
              mobileImage: {
                id: media.id,
                url: media.url,
                alt: media.alt,
              },
            })
          }
          allowedTypes={["image"]}
          value={mobileImage?.id}
          render={({ open }) => (
            <Button onClick={open} variant="secondary" className="mb-2">
              {mobileImage ? "Replace Mobile Image" : "Upload Mobile Image"}
            </Button>
          )}
        />
      </MediaUploadCheck>

      <MediaUploadCheck>
        <MediaUpload
          onSelect={(media) =>
            setAttributes({
              desktopImage: {
                id: media.id,
                url: media.url,
                alt: media.alt,
              },
            })
          }
          allowedTypes={["image"]}
          value={desktopImage?.id}
          render={({ open }) => (
            <Button onClick={open} variant="secondary" className="mb-2">
              {desktopImage ? "Replace Desktop Image" : "Upload Desktop Image"}
            </Button>
          )}
        />
      </MediaUploadCheck>

      {/* URL input */}
      <p>
        <label>{__("Banner Link URL:", "fm-blocks")}</label>
        <URLInput
          value={bannerUrl}
          onChange={(url) => setAttributes({ bannerUrl: url })}
        />
      </p>

      {/* Live preview */}
      {(mobileImage || desktopImage) && (
        <div className="banner-preview" style={{ marginTop: "1em" }}>
          {bannerUrl ? (
            <a href={bannerUrl} target="_blank" rel="noopener noreferrer">
              <picture>
                {mobileImage && (
                  <source media="(max-width: 767px)" srcSet={mobileImage.url} />
                )}
                {desktopImage && (
                  <source
                    media="(min-width: 768px)"
                    srcSet={desktopImage.url}
                  />
                )}
                <img
                  src={fallback.url}
                  alt={fallback.alt || ""}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </picture>
            </a>
          ) : (
            <picture>
              {mobileImage && (
                <source media="(max-width: 767px)" srcSet={mobileImage.url} />
              )}
              {desktopImage && (
                <source media="(min-width: 768px)" srcSet={desktopImage.url} />
              )}
              <img
                src={fallback.url}
                alt={fallback.alt || ""}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </picture>
          )}
        </div>
      )}
    </div>
  );
}
