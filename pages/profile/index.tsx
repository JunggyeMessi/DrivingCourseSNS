import Header from "@/components/Header/Header";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import { FormEvent, Fragment, useRef } from "react";
import { styled } from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function ProfilePage() {
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  async function changePasswordHandler(passwordData: Object) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!oldPasswordRef.current || !newPasswordRef.current) return;

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;

    // optional: Add validation

    changePasswordHandler({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }
  return (
    <Fragment>
      <Header />
      <Section>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="new-password">New Password</label>
          <input type="password" id="new-password" ref={newPasswordRef} />
        </div>
        <div>
          <label htmlFor="old-password">Old Password</label>
          <input type="password" id="old-password" ref={oldPasswordRef} />
        </div>
        <div>
          <button>Change Password</button>
        </div>
      </form>
      </Section>
    </Fragment>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default ProfilePage;
