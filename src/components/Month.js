function Month(props) {
  const getData = async () => {
    const resp = await fetch("./data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    console.log(await resp.json());
  };

  getData();
  return <div>month</div>;
}

export default Month;
