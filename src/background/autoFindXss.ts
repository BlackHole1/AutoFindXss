import { IOnMessageRequest, IRequestInfo, IRequestList, IWebsiteInfo } from '../../typing/autoFindXss';
import { calculatedSize, hookArray } from './common/utils';

class AutoFindXss {
  urlList: { [key: string]: IWebsiteInfo };

  constructor () {
    this.urlList = {};
  }

  public init () {
    this.handleMessage();
  }

  private handleMessage () {
    chrome.runtime.onMessage.addListener((request: IOnMessageRequest, sender): void => {
      if (request && typeof request === 'object' && request.identifier === Identifier) {
        const url = sender.url;
        const urlMain = new URL(url).origin;
        const { title, favIconUrl } = sender.tab;
        if (typeof this.urlList[urlMain] !== 'object') {
          this.urlList[urlMain] = {
            title,
            favIconUrl,
            requestList: [],
            size: 0
          };
          hookArray(this.urlList[urlMain].requestList, 'push', (arr: IRequestInfo) => {
            const content = arr.content;
            this.urlList[urlMain].size += calculatedSize(content);
          });
        }
        if(this.urlList[urlMain].requestList.every((item: IRequestInfo) => item.url !== sender.url)) {
          this.urlList[urlMain].requestList.push({
            type: 'content',
            url: sender.url,
            content: request.content
          });
        }
      }
    });
  }
}

export default AutoFindXss;
