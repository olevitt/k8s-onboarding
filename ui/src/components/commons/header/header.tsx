import D from 'i18n';
import React from 'react';
import { Divider, Typography, Grid, Box } from '@material-ui/core/';
import AppBar from '../appbar';
import './header.scss';

const Header = () => {
	return (
		<>
			<AppBar displayBtn />
			<Box m={10} />
			<Grid container justify="center" alignItems="baseline" direction="column">
				<Grid>
					<Typography variant="body1" gutterBottom className="description">
						{D.appDescription}
					</Typography>
					{/*<Box m={2} />
					 <Button
						variant="outlined"
						color="primary"
						className="tutorial_button"
					>
						{D.header_button_tutorial}
					</Button> */}
				</Grid>
				<Box m={2} />
			</Grid>
			<Divider className="divider" />
			<Box m={2} />
		</>
	);
};

export default Header;
