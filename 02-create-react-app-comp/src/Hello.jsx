function Hello() {
  let myName = "Satyajeet";

  let lastName = () => {
    return "Das Chowdhury";
  };

  return (
    <h3>
      Hello, I am {myName} {lastName()}
    </h3>
  );
}
export default Hello;
