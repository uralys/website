import React, { useRef } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PLAYSTORE = {
  exalt: 'https://play.google.com/store/apps/details?id=com.uralys.exalt',
  kodo:
    'https://play.google.com/store/apps/details?id=com.uralys.kodo.find_the_color',
  'kodo-monster':
    'https://play.google.com/store/apps/details?id=com.uralys.kodo.monster'
};

// const APPSTORE = {
//   exalt: '',
//   kodo: 'https://apps.apple.com/us/app/kodo-find-the-color/id684227637',
//   'kodo-monster': 'https://apps.apple.com/us/app/id1462688847'
// };

function Redirect({ app, params }) {
  function openStore(e) {
    const splitters = document.URL.split('/');
    const game = splitters[splitters.length - 3];

    if (PLAYSTORE[game]) {
      window.location.href = PLAYSTORE[game];
    } else {
      window.location.href = '/';
    }

    // const userAgent = new UAParser(event.headers['User-Agent']);
    // const { os: platform } = userAgent.getResult();
    // switch (platform.name) {
    //   case 'Android':
    //     return {
    //       statusCode: 301,
    //       headers: {
    //         Location: storeLink.android(APP_ID)
    //       }
    //     };
    //   case 'iOS':
    //     return {
    //       statusCode: 301,
    //       headers: {
    //         Location: storeLink.ios(APP_STORE_ID)
    //       }
    //     };
    //   default:
    //     return {
    //       statusCode: 409,
    //       body: 'This link should be opened in Android or iOS.'
    //     };
    // }
  }

  function copyToClipboard() {
    const copyText = document.getElementById('textarea');
    copyText.value = document.URL;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
  }

  function validate(e) {
    copyToClipboard();
    e.preventDefault();
    openStore();
  }

  return (
    <form onSubmit={validate}>
      <textarea style={{ opacity: 0 }} id="textarea" />
      {/* <textarea style={{ display: 'none' }} id="textarea" /> */}
      <p>{`You'll be redirected to the stores to download "${app}".`}</p>
      <button>Continue</button>
    </form>
  );
}

const Router = context => {
  const slugs = context.location.pathname.split('/');
  const app = slugs[2];
  const params = slugs.slice(2, slugs.length);
  const isKnown = name => Object.keys(PLAYSTORE).includes(name);

  return (
    <Layout>
      <SEO title={'[router]'} keywords={['uralys', 'games', 'mobile']} />
      {isKnown(app) ? (
        <Redirect app={app} params={params} />
      ) : (
        <p>{`unknown app "${app}"`}</p>
      )}
    </Layout>
  );
};

export default Router;
