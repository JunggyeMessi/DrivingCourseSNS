import Header from "@/components/Header/Header";
import { FormEvent, Fragment } from "react";
// import { getSession } from 'next-auth/client';
import { useState, useRef, useEffect } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { GetServerSidePropsContext } from "next/types";

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

async function createUser(email: string, password: string) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

function LoginPage() {
  //   const [isLoading, setIsLoading] = useState(true);
  //   const router = useRouter();

  //   useEffect(() => {
  //     getSession().then((session) => {
  //       if (session) {
  //         router.replace("/");
  //       } else {
  //         setIsLoading(false);
  //       }
  //     });
  //   }, [router]);

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!emailInputRef.current || !passwordInputRef.current) return;

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    if (
      !enteredEmail ||
      !enteredEmail.includes("@") ||
      !enteredPassword ||
      enteredPassword.trim().length < 7
    ) {
      return;
    }
    // optional: Add validation

    if (isLogin) {
      
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (!result) return;
      
      if (!result.error) {
        // set some auth state
        router.replace("/profile");
      }
      
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Fragment>
      <Header />
      <Section>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div>
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button type="button" onClick={switchAuthModeHandler}>
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </Section>
    </Fragment>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/profile',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default LoginPage;
