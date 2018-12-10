export interface IRequestInfo {
  type: 'content' | 'js' | 'ajax',
  url: string;
  content: string,
}

export type IRequestList = Array<IRequestInfo>;

export interface IWebsiteInfo {
  title: string;
  favIconUrl: string;
  requestList: IRequestList;
  size: number;
}

export interface IOnMessageRequest {
  identifier: string;
  content: string;
}
