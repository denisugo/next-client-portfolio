import Head from "next/head";

function Meta({ title, description }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

Meta.defaulstProps = {
  title: "Next app",
  description: "Next app description",
};

export default Meta;
