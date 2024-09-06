function App() {
  
  const name = "kimeunho";
  const age = 30;

  const gritingMessage = `안녕하세요. ${name}님 나이가 ${age}세 이시네요.`

  console.log(gritingMessage);
  
  const user = {
    isLoggedIn : true,
    role : 'admin', 
  };

  if (user.isLoggedIn && user.role === 'admin') {
    console.log("관리자 페이지 접근 가능");
  } else {
    console.log("관리자 페이지 접근 불가능");
  };

  
  
  return <div><p>hello world</p></div>;
}

export default App;
