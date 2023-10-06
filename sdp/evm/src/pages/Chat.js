import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
    {
      id: "GlobeCoin Chat",
      message: "Hello, I am GlobeCoin Bot. Your virtual assistant.",
      trigger: "Ask name",
    },
    {
      id: "Ask name",
      message: "Please enter your name before we proceed...",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Hi {previousValue}, please select what your doubt:",
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        {
          value: "Cryptocurrency",
          label: "Cryptocurrency",
          trigger: "Cryptocurrency",
        },
        { value: "Bitcoin", label: "Bitcoin", trigger: "Bitcoin" },
        { value: "GlobeCoin", label: "GlobeCoin", trigger: "GlobeCoin" },
      ],
    },
    {
      id: "Cryptocurrency",
      message:
        "Cryptocurrency is a digital asset designed to work as a medium of exchange. The database uses strong cryptography to secure transaction records. Cryptocurrency does not exist in physical world and It is not issued by a central authority, so It is different from central banking systems.",
      end: true,
    },
    {
      id: "Bitcoin",
      message:
        "Bitcoin is a decentralized digital currency without a central bank or single administrator. Transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain. Bitcoins are created as a reward for a process known as mining. They can be exchanged for other currencies, products, and services.",
      end: true,
    },
    {
      id: "GlobeCoin",
      message:
        "GlobeCoin is a project designed by Milton Rodrigues. Enthusiastic about the Open Source community and the Linux family, Rodrigues increasingly seeks to improve himself in highest technologies such as ReactJS! I hope you enjoyed the application!",
      end: true,
    },
  ];


// Creating our own theme
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};

// Set some properties of the bot
const config = {
	botAvatar: "../img/robo.jpg",
	floating: true,
};

function Chat() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot

					headerTitle="GeekBot"
					steps={steps}
					{...config}

				/>
			</ThemeProvider>
		</div>
	);
}

export default Chat;