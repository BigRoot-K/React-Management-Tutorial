import Customer from './components/Customer'
import './App.css';
import { Table, TableBody, TableHead, TableRow, TableCell, Paper  } from '@mui/material';
import { withStyles } from '@mui/styles';
import React, {Component} from 'react';


const useStyles =  theme => ({
  root: {
    width: '100%',
    overflowX: "auto", 
    
  },
  table: {
    minWidth: 1080
  }
});

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

class App extends Component {

  render() {

    const  classes  = this.props.classes;

    return (
      <Paper className={classes.root} >
        <Table className={classes.table} >
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customer.map(cus => {
              return (<Customer key={cus.id} id={cus.id} image={cus.image} name={cus.name} birthday={cus.birthday} gender={cus.gender} job={cus.job} />)
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default withStyles(useStyles)(App);
