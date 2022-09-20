import React, {useState} from 'react'
import styles from '../styles/Header.module.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { selectCars } from '../feature/car/carSlice'
import { useSelector } from 'react-redux'

function Header(){
	const [burgerStatus, setburgerStatus] = useState(false)
	const cars = useSelector(selectCars)
	return(
		<div className={styles.Container}>
			<a href="">
				<img src="images/logo.svg" />
			</a>

			<div className={styles.Menu}>
				{cars && cars.map((car, index)=>(
					<a key={index} href="#">{car}</a>
				))}
			</div>

			<div className={styles.RightMenu}>
				<a href="#">Shop</a>
				<a href="#">Tesla Account</a>
				<MenuOutlinedIcon className={styles.CustomMenu} onClick={()=>setburgerStatus(true)}/>
			</div>

			<div className={styles.BurgerNav} show = {burgerStatus}>
				<div className={styles.CloseWrapper}>
					<CloseOutlinedIcon className={styles.CustomClose} onClick={()=>setburgerStatus(false)} />
				</div>
				{cars && cars.map((car, index)=>(
					<li key={index}><a href="#" >{car}</a></li>
				))}
				<li><a href="#" >Trade-in</a></li>
				<li><a href="#" >CyberTruck </a></li>
				<li><a href="#" >Roadaster</a></li>
				<li><a href="#" >Existing Inventory </a></li>
				<li><a href="#" >Used Inventory </a></li>
				<li><a href="#" >Existing Inventory </a></li>
				<li><a href="#" >Existing Inventory </a></li>
			</div>
		</div>
	)
}

export default Header