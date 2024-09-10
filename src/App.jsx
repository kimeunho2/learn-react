import Count from './components/Count';
import Card from './components/Card';
import Login from './pages/Login';


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



  // Default parameter
  const greeting = (input = "고객") => {
    return `${input}님 반갑습니다.`;
  };

  console.log(greeting());


  // 구조분해 할당
  const color = ["red", "blue"];

  const [firstColor, secondColor] = color;

  console.log(firstColor, secondColor);


  const person = {
    name : "김은호",
    age : 30,
    email : "dmsgheka@naver.com",
  };

  const { name: personName, age: personAge, email } = person

  console.log("이름", personName);
  console.log("나이", personAge);
  console.log("이메일", email);

  const studentlist = ["김태욱", "정세현"];
  const [firstStudent, SecondStudent] = studentlist;

  console.log(firstStudent, SecondStudent);


  const addStudent = () => {
    const addStudentList = [...studentlist, "김은호"];
    
    console.log(addStudentList);
    console.log(studentlist);
  };


  addStudent();

  const messageItem = {
    messageId: 1,
    message: "안녕하세요",
  };

const copyPerson = {
  ...person,
  ...messageItem,
  name: "mabu",
  realName: "김은호",
}; 

console.log(copyPerson);



return (
    <>
  {/* <Card title={"123"} subText="123"/>
  <Card/> */}

  {/* <Count/> */}

  <Login/>


    </>
    
    
  );
}

  
  

export default App;


