import type { VariantProps } from "@gluestack-ui/utils/nativewind-utils";
import React from "react";
import { textStyle } from "./styles";

type ITextProps = React.ComponentProps<"span"> & VariantProps<typeof textStyle>;

const Text = React.forwardRef<React.ComponentRef<"span">, ITextProps>(
  function Text(
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size = "md",
      sub,
      italic,
      highlight,
      style,
      ...props
    }: { className?: string; style?: React.CSSProperties } & ITextProps,
    ref
  ) {
    return (
      <span
        className={textStyle({
          isTruncated: isTruncated as boolean,
          bold: bold as boolean,
          underline: underline as boolean,
          strikeThrough: strikeThrough as boolean,
          size,
          sub: sub as boolean,
          italic: italic as boolean,
          highlight: highlight as boolean,
          class: className,
        })}
        style={{
          color: "#FFFFFF",
          fontFamily:
            'Lexend, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
          ...style,
        }}
        {...props}
        ref={ref}
      />
    );
  }
);

Text.displayName = "Text";

export { Text };
