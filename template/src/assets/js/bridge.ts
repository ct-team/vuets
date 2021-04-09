function isInTcyApp() {
  if (!window.HtmlInterface) {
    return false;
  }

  return true;
}

function getHeaderInfo() {
  if (!isInTcyApp()) {
    return {};
  }

  console.log('😈:头信息 ', JSON.parse(window.HtmlInterface.getHeaderInfo()));
  const headerInfo = window.HtmlInterface.getHeaderInfo();
  if (headerInfo) {
    return JSON.parse(headerInfo);
  }
}

function setPageName(title: string) {
  if (!isInTcyApp()) {
    return;
  }

  window.HtmlInterface.setPageName(title);
}

export default {
  getHeaderInfo,
  setPageName
};
