'use client';

import dynamic from 'next/dynamic';

// Add type declaration for swagger-ui-react module
declare module 'swagger-ui-react' {
  import { ComponentType } from 'react';
  
  interface SwaggerUIProps {
    url?: string;
    [key: string]: any;
  }
  
  const SwaggerUI: ComponentType<SwaggerUIProps>;
  export default SwaggerUI;
}

// Dynamically import SwaggerUI with its CSS
const SwaggerUI = dynamic(
  async () => {
    const [{ default: SwaggerUI }] = await Promise.all([
      import('swagger-ui-react'),
      import('swagger-ui-react/swagger-ui.css')
    ]);
    return SwaggerUI;
  },
  { ssr: false }
);

export default function ApiDocs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">API Documentation</h1>
      <div className="swagger-ui-container">
        <SwaggerUI 
          url="/api/swagger" 
        />
      </div>
    </div>
  );
}