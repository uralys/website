import React, {useEffect, useState} from 'react';
import UAParser from 'ua-parser-js';
import Layout from '../components/layout';
import SEO from '../components/seo';

const PLAYSTORE = {
  exalt: 'https://play.google.com/store/apps/details?id=com.uralys.exalt',
  kodo: 'https://play.google.com/store/apps/details?id=com.uralys.kodo.find_the_color',
  'kodo-monster': 'https://play.google.com/store/apps/details?id=com.uralys.kodo.monster',
};

const APPSTORE = {
  exalt: 'https://apps.apple.com/us/app/testflight/id899247664',
  kodo: 'https://apps.apple.com/us/app/kodo-find-the-color/id684227637',
  'kodo-monster': 'https://apps.apple.com/us/app/id1462688847',
};

const isKnown = (name) => Object.keys(PLAYSTORE).includes(name);

const Router = () => {
  const parser = new UAParser();
  const os = parser.getOS().name;

  const [app, setApp] = useState(null);
  const [appLink, setAppLink] = useState('');
  const [redirection, setRedirection] = useState('/');
  const [info, setInfo] = useState('');

  useEffect(() => {
    const [hostname, path] = document.URL.split('/router');
    const _app = path && path.split('/')[1];

    setAppLink(`${hostname}${path}`);
    setApp(_app);

    if (!isKnown(_app)) {
      setInfo(`unknown app "${_app}"`);
      return;
    }

    setInfo(`You'll be redirected to the stores to download "${_app}".`);

    switch (os) {
      case 'Android':
        setRedirection(PLAYSTORE[_app]);
        break;
      case 'iOS':
        setRedirection(APPSTORE[_app]);
        break;
      default:
        setInfo('This link should be opened in Android or iOS.');
    }
  }, []);

  const copyToClipboard = () => {
    const copyText = document.getElementById('textarea');
    copyText.value = appLink;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
  };

  const validate = (event) => {
    copyToClipboard();
    event.preventDefault();
    window.location.href = redirection;
  };

  return (
    <Layout>
      <SEO title={'[router]'} keywords={['uralys', 'games', 'mobile']} />
      <form onSubmit={validate}>
        <textarea style={{opacity: 0}} id="textarea" />
        <p>{info}</p>
        {isKnown(app) && <button>Continue</button>}
      </form>
    </Layout>
  );
};

export default Router;
