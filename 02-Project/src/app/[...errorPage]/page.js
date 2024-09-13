"use client"

const ErrorPage = ({ params }) => {
    console.log(params)
  return (
		<div>
          <div>Y mera error page hai!</div>
          <div>"{params.errorPage.map((v, i) => (<span key={i}>{v} </span>))}" y path exist nhi krta</div>
		</div>
	);
}

export default ErrorPage;