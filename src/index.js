wallet.registerRpcMessageHandler(async (originString, requestObject) => {
  switch (requestObject.method) {
    case 'hello':
      const header = "Thank you for giving through Priceless!";
      const chainId = await wallet.request({ 
        method: 'eth_chainId' 
      });
      const accounts = await wallet.request({ 
        method: 'eth_requestAccounts' 
      });
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: header,
            description:
              'Priceless helps non-profit organizations leverage Web3 to further their mission.',
            textAreaContent:
              `Thank you for you your donation on network ${chainId}!. You currently have ETH.}`,
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
});