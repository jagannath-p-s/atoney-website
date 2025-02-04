import React from 'react';
import { Helmet } from 'react-helmet';

const StructuredData = ({ type, data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type,
          ...data
        })}
      </script>
    </Helmet>
  );
};

export default StructuredData;
