import "./style.css";
const MyComponent = () => {
  //   const name = "Duc Huy"; --> string
  //   const name = 25; --> int
  //   const name = true; --> boolean
  //   const name = null;
  //   const name = undefined;
  const name = [1, 3, 5, 7, 10];
  //   const name = {
  //     name: "trong hieu",
  //     age: 25,
  //   };
  return (
    <>
      <div>Hello {JSON.stringify(name)}</div>
      <div>{console.log("THIEU")}</div>
      <div className="child" style={{ borderRadius: "10px" }}>
        Child
      </div>
    </>
  );
};

export default MyComponent;
