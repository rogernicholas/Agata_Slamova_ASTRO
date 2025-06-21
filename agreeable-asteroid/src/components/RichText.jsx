import { PortableText } from '@portabletext/react';

const components = {
  block: {
    normal: ({ children }) => <p>{children}</p>, // force paragraph rendering
  },
};

export default function RichText({ value }) {
  if (!value || !Array.isArray(value)) return null;

  return (
    <div className="richtext">
      <PortableText value={value} components={components} />
    </div>
  );
}