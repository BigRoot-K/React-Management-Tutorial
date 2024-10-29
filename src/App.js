import logo from './logo.svg';
import Customer from './components/Customer'
import './App.css';

const customer = [
  {
    'id' : 1,
    'image' : 'https://picsum.photos/id/1/100/100',
    'name' : '나동빈' , 
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://picsum.photos/id/2/100/100',
    'name' : '홍길동' , 
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 3,
    'image' : 'https://picsum.photos/id/3/100/100',
    'name' : '홍길녀' , 
    'birthday' : '960305',
    'gender' : '여자',
    'job' : '디자이너'
  }
];

function App() {
  return (
    <div>
      {
        customer.map(cus => {
          return (
            <Customer 
              key={cus.id}
              id={cus.id} 
              image={cus.image}
              name={cus.name}
              birthday={cus.birthday}
              gender={cus.gender}
              job={cus.job}
            />  
          ); 
        })
      }  
    </div>
  );
}

export default App;
