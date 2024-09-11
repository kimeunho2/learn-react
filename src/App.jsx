import Count from './components/Count';
import Card from './components/Card';
import Login from './pages/Login';
import ThemeButton from './components/ThemeButton';
import { useEffect, useState } from 'react';


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

/**
 * 1. ThemeButton에 온클릭 이벤트를 만든다.
 * 2. 버튼 클릭 이벤트를 부모 컴포넌트에 전송한다.
 * 3. 부모 컴포넌트가 클릭 이벤트를 받으면 div 클래스가 변경되는 함수를 생성한다. (handleTheme)
 * 4. [state] isDarkMode라는 state를 생성한다.
 * 5. isDarkMode state를 wrap클래스가 있는 div에 className의 속성을 다르게 넣어준다.
 * 5-1. 다크모드인 경우에 'dark-mode`라는 클래스를 준다.
 * 5-2. 다크모드가 아닌 경우엔 'light-mode`라는 클래스를 준다.
 * 6. handleTheme함수에서 isDarkMode의 값을 토글로 변경해준다. 
 * 7. themeButton컴포넌트에 isDarkMode라는 props를 내려준다.
 * 7-1 이 props에는 isDarkMode의 값을 넣어준다.
 * 8. ThemeButton컴포넌트에 isDarkMode의 값을 받아서 true인 경우엔 '다크모드' 
 * false인 경우엔 '라이트 모드'라는 텍스트를 ui에 보여준다. 
트루면 라이트모드 
*/



const [isDarkMode, satIsDarkMode] = useState(false)


const handleTheme = () => {
  satIsDarkMode(!isDarkMode);
}


const [isLoggedIn, setIsLoggedin] = useState(false);

const [message, setMessage] = useState(['메시지']);

useEffect(() => {
  alert("123")
}, [isDarkMode])

return (
  <>
  <div className={`wrap ${isDarkMode ? 'light-mode' : 'dark-mode'}`}> 
  <Card title={"123"} subText="123"/>
  <Card/>

  <ThemeButton onTheme={handleTheme} text={isDarkMode}/>


  {/* {isLoggedIn ? <p>환영합니다.</p> : <p>로그인 해주세요</p>}

  {message.length && <p>메시지가 {message.length}개 있습니다.</p> } */}




</div>
  {/* <Count count = {2}/> */}

  {/* <Login/> */}


    </>
    
    
  );
}


  

export default App;


