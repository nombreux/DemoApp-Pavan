import React, { useState } from 'react';
import './App.css';
import styled from '@emotion/styled';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { InputLabel, FormControl, Divider, TextField } from '@mui/material';
import { padding } from '@mui/system';
import { css } from '@emotion/css';



const Dropdown = () => {
	const [val, setValue] = useState();

	return (
		<div>
			<FormControl >
				<InputLabel>Pass</InputLabel>
				<Select
					sx={{ minWidth: '150px' }}
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={val}
					label="Age"
					onChange={() => setValue}
				>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>
		</div>
	)
}


const Section = styled.div({
	display: 'flex',
	flexDirection: 'row',
	gap: '125px',
	alignItems: 'center'
})

const Questions = styled.div({
	display: 'inline-flex',
	flexDirection: 'row',
	width: '80%',
	gap: '5px'
})

const Border = styled.div({
	height: '1px',
	background: 'grey',
	marginTop: '20px',
	marginBottom: '20px'

})

const InlineInputStyle = styled.div({

    display: 'flex',
    flexDirection: 'row',
    gap: '125px',
    alignItems: 'center'

})

const QuestionSection = ({ }) => {
	return (
		<>
			<Section>
				<div>
					<div>
						<h4>Public Avaliable Website</h4>
					</div>
					<div>
						<Questions>
							<div>
								QA1
							</div>
							<div>
								In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
							</div>
						</Questions>
					</div>
				</div>
				<div>
					<Dropdown />
				</div>
			</Section>
		</>

	)
}

const InlineInput = () => {
	return (
		<InlineInputStyle>
			<div className={css({
				width: '60%',
				marginLeft:'100px'
			})}>
				<div>Machine Readable Format</div>
			</div>
			<div className={css({
				marginLeft:'-105px'
			})}>
				<Dropdown />
			</div>
		</InlineInputStyle>
	)
}

const ComplaintTextBox = () => {
	return (
		<>
			<h4 className={css({
				marginLeft:'10px'
			})}>
				Summary of Observations & Results (Optional)
			</h4>
			<TextField
				id="outlined-multiline-static"
				label=""
				multiline
				rows={4}
				defaultValue=""
				fullWidth
        	/>
		</>
	)
}
function App() {

	return (

		<div className={css({
			marginLeft: '30px',
			marginRight:'30px'
		})} >
			<div>
				<h1>Machine Redable</h1>
			</div>

			<div>
				<div>
					<h3>Online Avaliablity</h3>
				</div>
				<Border />
				<QuestionSection />
				<Border />
				<div className={css({
					display: 'flex',
					flexDirection:'column',
					gap:'10px'
				})}>

					<InlineInput />

					<InlineInput />
				</div>
				<Border />
				<QuestionSection />
				<Border />
				<ComplaintTextBox />


			</div>





		</div>
	);
}

export default App;
