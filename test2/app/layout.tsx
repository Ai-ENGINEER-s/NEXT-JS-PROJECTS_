

import React from 'react'

const RootLayout = ({children}) => {
  return (
   <html>
<body>

<header style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
<h1>Mon Application Sanoussa</h1></header>

{children}
</body>

   </html>
  )
}

export default RootLayout
