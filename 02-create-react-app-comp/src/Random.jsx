function Random() {
  return (
    <h1 style={{ backgroundColor: "#776661" }}>
      {Math.floor(Math.random() * 10) + 1}
    </h1>
  );
}

export default Random;
