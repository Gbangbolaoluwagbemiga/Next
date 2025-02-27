async function page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return <h1>yooooo</h1>;
}

export default page;
