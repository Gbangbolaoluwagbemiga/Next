import { auth } from "./_lib/auth";

async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
}

export default Home;
