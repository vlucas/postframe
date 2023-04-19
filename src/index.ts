type TDone = (response?: any) => void; // eslint-disable-line no-unused-vars
type TEventHandler = (event: any, done: TDone) => void; // eslint-disable-line no-unused-vars
export type TPostframe = {
  on: (eventName: string, fn?: TEventHandler) => void; // eslint-disable-line no-unused-vars
  off: (eventName: string, fn?: TEventHandler) => void; // eslint-disable-line no-unused-vars
  send: (frame: Window, eventName: string, data: any, doneFn?: TDone) => void; // eslint-disable-line no-unused-vars
  debugFn: (fn: any) => void; // eslint-disable-line no-unused-vars
};
