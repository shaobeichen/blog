export let addScript = (url) => {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = url;
  document.body.appendChild(s);
};

export let addhttpequiv = () => {
  var oMeta = document.createElement('meta');
  oMeta.content = 'upgrade-insecure-requests';
  oMeta.setAttribute('http-equiv', 'Content-Security-Policy');
  document.getElementsByTagName('head')[0].appendChild(oMeta);
};
