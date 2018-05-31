export let refUrl = (url) => {
  const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = url;
  document.body.appendChild(s);
};
