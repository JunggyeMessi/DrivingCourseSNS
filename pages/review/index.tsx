import Header from "@/components/Header/Header";
import { FormEvent, Fragment } from "react";

function ReviewPage() {
  const handleClick = (
    event: FormEvent<HTMLFormElement>
  ) => {
    console.log(event.target);
    console.log(event.currentTarget);
  };

  return (
    <Fragment>
      <Header />
      
    </Fragment>
  );
}

export default ReviewPage;
