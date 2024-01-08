import Userdetails from "../Auth/Userdetails";
import Box from '@mui/material/Box';
import Header from "../Componenets/Header";
import AdsWall from "../Pagescompo/AdsWall";

export default function Home(){

	return(
		<Box>
		<Header/>
		<AdsWall/>
		<h1>Home</h1>
		</Box>
		)
}