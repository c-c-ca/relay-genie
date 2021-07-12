// import React, { useEffect, useState } from 'react';
// import Verifiable from './Verifiable';

// const VerifiableContainer = ({
//   verify = () => ({ error: false }),
//   ...props
// }) => {
//   const [verifying, setVerifying] = useState(true);
//   const [response, setResponse] = useState(null);

//   useEffect(async function () {
//     setResponse(await verify());
//     setVerifying(false);
//   }, []);

//   return <Verifiable {...props} verifying={verifying} response={response} />;
// };

// export default VerifiableContainer;
