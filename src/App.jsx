function App() {
  fetch("http://localhost:3000/recipies")
    .then((response) => response.json())
    .then((data) => console.log(data));

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center ">
        Hello world!
      </h1>
      <button className="btn btn-secondary ml-auto mr-auto"> click</button>
    </>
  );
}

export default App;
