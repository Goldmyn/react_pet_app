import { Button, Result } from "antd";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="container mx-auto grid h-screen place-items-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to={"/"}>
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </div>
  );
}

export default ErrorPage;
