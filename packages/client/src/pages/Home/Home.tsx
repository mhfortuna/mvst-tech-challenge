import React from "react";
import Layout from "../../components/Layout";
import MainTimer from "../../components/MainTimer";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className="flex flex-col h-full w-full align-middle justify-center">
        <MainTimer />
      </div>
    </Layout>
  );
}
