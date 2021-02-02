export const excuteAsync = (pAsyncFunc: Promise<any>, pResolveFunc: (pData: any) => void) => {
  const callAsync = async () => {
    await pAsyncFunc.then((pData) => pResolveFunc(pData));
  };
  callAsync();
};
