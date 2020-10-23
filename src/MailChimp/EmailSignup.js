import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import styled from "styled-components";

const EmailSignup = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const subscribe = async (event) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
    const result = await addToMailchimp(email);
    return result;
  };

  return (
    <SignUp>
      <div className="card">
        <div className="card-content">
          {subscribed ? (
            <div className="has-text-centered has-text-weight-semibold">
              Thanks for Subscribing!&nbsp;&nbsp;
              <span role="img" aria-label="party">
                🎉
              </span>
            </div>
          ) : (
            <>
              <Title>
                <span role="img" aria-label="panda">
                  🐼
                </span>
                &nbsp;&nbsp;Get pandas recipes straight to your inbox!
              </Title>
              <form onSubmit={subscribe}>
                <div className="field has-addons">
                  <div className="control is-expanded">
                    <input
                      type="email"
                      className="input"
                      style={{
                        width: "85%",
                        margin: "4px",
                        padding: "8px",
                        borderradius: "8px",
                      }}
                      placeholder="Your Email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className="control">
                    <button
                      className="button is-primary has-text-weight-semibold"
                      type="submit"
                      style={{
                        padding: "4px",
                        margin: "4px",
                      }}
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
              <Extra>
                Join other Data Scientists/Analysts/Engineers in learning pandas
                deeper. No spam!
              </Extra>
            </>
          )}
        </div>
      </div>
    </SignUp>
  );
};

const Title = styled("div").attrs({ className: "subtitle is-5" })`
  margin-bottom: 1.2rem;
  font-size: 1.2rem;
`;

const Extra = styled("div")`
  margin-top: 1rem;
  font-size: 0.8rem;
  opacity: 0.7;
`;

const SignUp = styled("div")`
  margin: 1.2rem;
  border-radius: 8px;
  padding: 8px;
  border: 3px solid gray;
`;

export default EmailSignup;
