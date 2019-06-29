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
  const textAreaRef = useRef(null);

  function openStore(e) {
    // window.location.href = '/phantoms';
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

  function copyToClipboard(e) {
    const el = textAreaRef.current;

    var oldContentEditable = el.contentEditable,
      oldReadOnly = el.readOnly,
      range = document.createRange();

    el.contentEditable = true;
    el.readOnly = false;
    el.value = document.URL;
    range.selectNodeContents(el);

    var s = window.getSelection();
    s.removeAllRanges();
    s.addRange(range);

    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.

    el.contentEditable = oldContentEditable;
    el.readOnly = oldReadOnly;

    document.execCommand('copy');
    e.preventDefault();
    openStore();
  }

  return (
    <form onSubmit={copyToClipboard}>
      <textarea style={{ display: 'none' }} ref={textAreaRef} />
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
