import React, { FC } from 'react';

interface MDXComponentProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  [key: string]: any;
}

// Define the colors object with explicit types
const colors: { [key: string]: string } = {
  // Base Colors
  black: '#000000',
  white: '#ffffff',
  gray: '#6b7280',
  red: '#ef4444',
  green: '#16a34a',
  blue: '#3b82f6',

  // Brand Colors
  blueBrand: '#61dafb',
  // Semantic Colors
  appBgDefault: '#f3f4f6',
  appFgDefault: '#1f2937',
  appBgSpecial: '#61dafb',
  appFgSpecial: '#ffffff',
  appBorderDefault: '#d1d5db',
  appLinkDefault: '#3b82f6',
  appLinkHover: '#1e40af',
  appButtonCtaBg: '#3b82f6',
  appButtonCtaFg: '#ffffff',
  appBgFooter: 'rgba(0, 0, 0, 0.65)',
  appFgFooter: '#ffffff',
};

const baseMDXComponents: Record<string, FC<MDXComponentProps>> = {
  H1: ({ className, ...props }) => (
    <h1
      className={`text-h1 font-bold tracking-tight ${className || ''}`}
      {...props}
    />
  ),
  H2: ({ className, ...props }) => (
    <h2
      className={`text-h2 font-semibold tracking-tight ${className || ''}`}
      {...props}
    />
  ),
  H3: ({ className, ...props }) => (
    <h3
      className={`text-h3 font-medium tracking-tight ${className || ''}`}
      {...props}
    />
  ),
  H4: ({ className, ...props }) => (
    <h4 className={`text-h4 font-regular ${className || ''}`} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p
      className={`text-gray-700 text-base leading-relaxed ${className || ''}`}
      {...props}
    />
  ),
  a: ({ className, ...props }) => (
    <a
      className={`text-blue-500 hover:text-blue-700 underline ${className || ''}`}
      {...props}
    />
  ),
  strong: ({ className, ...props }) => (
    <strong className={`font-bold ${className || ''}`} {...props} />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={`border-l-4 border-gray-300 pl-4 italic ${className || ''}`}
      {...props}
    />
  ),
  ul: ({ className, ...props }) => (
    <ul className={`list-disc list-inside ${className || ''}`} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={`list-decimal list-inside ${className || ''}`} {...props} />
  ),
  li: ({ className, ...props }) => <li className={className} {...props} />,
  code: ({ className, ...props }) => (
    <code
      className={`bg-gray-100 text-sm font-mono rounded px-1 ${className || ''}`}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => {
    const codeContent = props.children;
    return (
      <pre
        className={`bg-gray-100 overflow-x-auto rounded-md p-4 my-4 ${className || ''}`}
        {...props}
      >
        <code className="text-sm font-mono">{codeContent}</code>
      </pre>
    );
  },
  ColorBlock: ({ colorName, ...props }) => {
    const colorValue = colors[colorName as keyof typeof colors];
    if (!colorValue) {
      return <p>Color "{colorName}" not found.</p>;
    }
    return (
      <div className="flex items-center gap-4 my-2">
        <div
          style={{
            backgroundColor: colorValue,
            width: '40px',
            height: '40px',
            borderRadius: '4px',
          }}
          className="border border-gray-300"
        />
        <div>
          <p className="font-medium">{colorName}</p>
          <p className="text-sm text-gray-500">{colorValue}</p>
        </div>
      </div>
    );
  },
};

export function useMDXComponents(
  inputComponents: Record<string, FC<MDXComponentProps>> = {}
) {
  const extendedComponents = {
    ...baseMDXComponents,
    ...inputComponents,
  };
  return extendedComponents;
}

export default useMDXComponents;
