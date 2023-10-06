import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NavBar from '../pages/Navbar';
import Footer from './Footer';

function createData(name, models, Available, Availability, Explore, price) {
  return {
    name,
    models,
    Available,
    Availability,
    Explore,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: '122121223',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.models}</TableCell>
        <TableCell align="right">{row.Available}</TableCell>
        <TableCell align="right">{row.Availability}</TableCell>
        <TableCell align="right">{row.Explore}</TableCell>
      </TableRow>
      <TableRow sx={{backgroundColor:"lightyellow"}}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }} >
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow sx={{backgroundColor:"lightgreen"}}>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{backgroundColor:"yellow"}}>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    models: PropTypes.number.isRequired,
    Availability: PropTypes.number.isRequired,
    Available: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    Explore: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Car bookings', 16, 16.0,'yes',  <button><a href={'https://www.youtube.com/'}>GO</a></button>, 3.99),
  createData('Flight bookings', 13, 9.0,'yes', <button><a href={'https://www.goibibo.com/cars/'}>GO</a></button>, 4.99),
  createData('Hotel bookings', 26, 26.0, 'yes',<button><a href={'https://www.trivago.in/en-IN/lm/en?themeId=115&tc=18&search=200-64981&sem_keyword=hotel%20bookings&sem_creativeid=590504156785&sem_matchtype=e&sem_network=g&sem_device=c&sem_placement=&sem_target=&sem_adposition=&sem_param1=&sem_param2=&sem_campaignid=11541397100&sem_adgroupid=116149168487&sem_targetid=kwd-28172750&sem_location=9301528&cipc=sem&cip=9119000439&gclid=Cj0KCQiA4aacBhCUARIsAI55maFi3_emne2VHbU4LB23vEnAxR_3ajORBKBgm-h7BtvnbCoZd9LGd64aAgmZEALw_wcB'}>GO</a></button> , 3.79),
  createData('Travel advisor', 30, 30, 'yes', <button><a href={'https://www.tripadvisor.in/'}>GO</a></button>, 2.5),
  createData('Holiday Planner', 35, 35, 'yes',<button><a href={'http://holidayplannersindia.com/'}>GO</a></button>, 1.5),
  createData('Catering Service', 15, 12, 'yes',<button><a href={'https://www.justdial.com/Vijayawada/Caterers/nct-10083293'}>GO</a></button>, 3.99),
  createData('Cleaning', 23, 21, 'yes', <button><a href={'https://www.urbancompany.com/vijayawada-professional-home-cleaning'}>GO</a></button>, 4.99),
  createData('Grooming Servics', 26, 20, 'yes', <button><a href={'https://jawedhabib.com/'}>GO</a></button>, 3.79),
  createData('Assistance', 30, 25, 'yes', <button><a href={'https://medlineplus.gov/homecareservices.html'}>GO</a></button>, 2.5),
  createData('Gift supply', 35, 30, 'yes', <button><a href={''}>GO</a></button>, 1.5),
];

export default function Services() {
  return (
    <TableContainer component={Paper} sx={{backgroundColor:"aquamarine"}}>
    <NavBar/>
      <Table aria-label="collapsible table">
        <TableHead sx={{backgroundColor:"hotpink"}}>
          <TableRow >
            <TableCell />
            <TableCell sx={{ fontFamily:"Algerian", fontSize:"20px"}}>Available Services</TableCell>
            <TableCell align="right" sx={{ fontFamily:"Algerian", fontSize:"20px"}}>Models</TableCell>
            <TableCell align="right" sx={{ fontFamily:"Algerian", fontSize:"20px"}}>Available</TableCell>
            <TableCell align="right" sx={{ fontFamily:"Algerian", fontSize:"20px"}}>Availability</TableCell>
            <TableCell align="right" sx={{ fontFamily:"Algerian", fontSize:"20px"}}>Explore</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
      <Footer/>
    </TableContainer>
  );
}