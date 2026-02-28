"use client";

import Script from 'next/script';

const MicrosoftClarity = () => {
  const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const isProd = process.env.NODE_ENV === 'production';

  // Guard against missing or placeholder IDs
  const invalidPlaceholders = new Set([
    'YOUR_PROJECT_ID',
    'your_microsoft_clarity_project_id_here',
    'CLARITY_PROJECT_ID',
  ]);

  if (!isProd || !clarityProjectId || invalidPlaceholders.has(clarityProjectId)) {
    return null;
  }

  return (
    <Script id="microsoft-clarity" strategy="lazyOnload">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityProjectId}");
      `}
    </Script>
  );
};

export default MicrosoftClarity;