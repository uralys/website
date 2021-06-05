import React from 'react';
export const onRenderBody = ({setHeadComponents, setPostBodyComponents}, pluginOptions) => {
  setHeadComponents([
    <script
      key="lasso"
      src="https://sd.toneden.io/production/lasso.loader.js"
      type="text/javascript"
      async
    />,
    <script
      key="configure-lasso"
      dangerouslySetInnerHTML={{
        __html: `
        window.LassoReady = window.LassoReady || [];
        window.LassoReady.push(function () {
          window.Lasso.configure({user_id: 48822303});
        });
      `,
      }}
    />,
  ]);
};
