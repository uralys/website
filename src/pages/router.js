import React, { useRef } from 'react';
import UAParser from 'ua-parser-js';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PLAYSTORE = {
  exalt: 'https://play.google.com/store/apps/details?id=com.uralys.exalt',
  kodo:
    'https://play.google.com/store/apps/details?id=com.uralys.kodo.find_the_color',
  'kodo-monster':
    'https://play.google.com/store/apps/details?id=com.uralys.kodo.monster'
};

const APPSTORE = {
  exalt: 'https://apps.apple.com/us/app/testflight/id899247664',
  kodo: 'https://apps.apple.com/us/app/kodo-find-the-color/id684227637',
  'kodo-monster': 'https://apps.apple.com/us/app/id1462688847'
};

const Redirect = ({ app, link }) => {
  let info = `You'll be redirected to the stores to download "${app}".`;
  let redirection = '/';

  const parser = new UAParser();
  const os = parser.getOS().name;

  switch (os) {
    case 'Android':
      redirection = PLAYSTORE[app];
      break;
    case 'iOS':
      redirection = APPSTORE[app];
      break;
    default:
      info = 'This link should be opened in Android or iOS.';
  }

  const copyToClipboard = () => {
    const copyText = document.getElementById('textarea');
    copyText.value = link;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
  };

  const validate = event => {
    copyToClipboard();
    event.preventDefault();
    window.location.href = redirection;
  };

  return (
    <form onSubmit={validate}>
      <textarea style={{ opacity: 0 }} id="textarea" />
      <p>{info}</p>
      <button>Continue</button>
    </form>
  );
};

const Router = context => {
  const [hostname, path] = document.URL.split('/router/?link=');
  const app = path && path.split('/')[1];
  const isKnown = name => Object.keys(PLAYSTORE).includes(name);

  return (
    <Layout>
      <SEO title={'[router]'} keywords={['uralys', 'games', 'mobile']} />
      {isKnown(app) ? (
        <Redirect app={app} link={`${hostname}${path}`} />
      ) : (
        <p>{`unknown app "${app}"`}</p>
      )}
    </Layout>
  );
};

export default Router;
