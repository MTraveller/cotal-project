/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

exports.onRenderBody = ({ setHtmlAttributes, setBodyAttributes }) => {
  setHtmlAttributes({ lang: `en`, className: `h-full` });
  setBodyAttributes({
    className: `h-full bg-gray-300 dark:bg-slate-900 text-gray-600 dark:text-slate-400 font-normal dark:font-light`,
  });
};
