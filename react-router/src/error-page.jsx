/**
 * 当应用在渲染、加载数据中、执行数据变更中抛出错误时，React Router 就会捕获到错误并展示当前页面
 */
import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/** statusText 为错误响应 */}
        <i>{error.statusText || error.message}</i> 
      </p>
    </div>
  );
}