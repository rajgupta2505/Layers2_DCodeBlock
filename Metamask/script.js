function connectMetamask() {
  if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_requestAccounts' })
          .then((accounts) => {
              console.log('Connected to Metamask. Wallet address:', accounts[0]);
              // Additional actions can be performed here.
          })
          .catch((error) => {
              console.error('Error connecting to Metamask:', error);
          });
  } else {
      console.error('Metamask is not installed or not supported.');
  }
}
